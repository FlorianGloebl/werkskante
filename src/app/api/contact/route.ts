import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/validation";
import { siteSettings } from "@/content/site";

const rateLimitWindowMs = 60_000;
const rateLimitMax = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < rateLimitWindowMs);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > rateLimitMax;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Bitte überprüfen Sie Ihre Eingaben.", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  // Honeypot ausgelöst: Formular still bestätigen, aber nichts versenden.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { companyName, contactName, email, phone, employeeCount, industry, topic, message } =
    parsed.data;

  const smtpHost = process.env.SMTP_HOST;

  try {
    if (smtpHost) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: process.env.SMTP_USER
          ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
          : undefined,
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM ?? siteSettings.contactEmail,
        to: process.env.CONTACT_RECIPIENT ?? siteSettings.contactEmail,
        replyTo: email,
        subject: `Neue Anfrage über werkskante.de: ${topic}`,
        text: [
          `Firma: ${companyName}`,
          `Ansprechpartner: ${contactName}`,
          `E-Mail: ${email}`,
          `Telefon: ${phone || "-"}`,
          `Mitarbeitende: ${employeeCount || "-"}`,
          `Branche: ${industry || "-"}`,
          `Thema: ${topic}`,
          "",
          message,
        ].join("\n"),
      });
    } else {
      console.info("[contact] Kein SMTP konfiguriert, Anfrage nur geloggt:", {
        companyName,
        contactName,
        email,
        topic,
      });
    }
  } catch (error) {
    console.error("[contact] Versand fehlgeschlagen:", error);
    return NextResponse.json(
      { error: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
