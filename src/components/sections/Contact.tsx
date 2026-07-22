"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactTopics } from "@/lib/validation";
import { siteSettings } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        setErrorMessage(result?.error ?? "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <Image
        src="/images/contact-conversation-v2.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(260deg, #05070A 15%, rgba(6,20,38,0.94) 45%, rgba(6,20,38,0.9) 100%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Kontakt"
            title="Lassen Sie uns über Ihren Betrieb sprechen."
            description="Fordern Sie den kostenlosen Werkskante-Check an oder schreiben Sie uns zu einem anderen Anliegen."
            light
          />
          <div className="mt-10 flex flex-col gap-2 text-sm text-white/60">
            <a href={`mailto:${siteSettings.contactEmail}`} className="hover:text-white">
              {siteSettings.contactEmail}
            </a>
            <span>{siteSettings.phone}</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 lg:col-span-8"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Firma" name="companyName" required />
            <Field label="Ansprechpartner" name="contactName" required />
            <Field label="E-Mail" name="email" type="email" required />
            <Field label="Telefon" name="phone" type="tel" />
            <Field label="Anzahl Mitarbeitende" name="employeeCount" />
            <Field label="Branche" name="industry" />
          </div>

          <label className="flex flex-col gap-2 text-sm">
            <span className="font-medium text-white/80">Thema</span>
            <select
              name="topic"
              required
              defaultValue=""
              className="rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-white focus:border-accent focus:outline-none"
            >
              <option value="" disabled>
                Bitte auswählen
              </option>
              {contactTopics.map((topic) => (
                <option key={topic} value={topic} className="text-ink">
                  {topic}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm">
            <span className="font-medium text-white/80">Nachricht</span>
            <textarea
              name="message"
              required
              minLength={10}
              rows={5}
              className="rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-white focus:border-accent focus:outline-none"
            />
          </label>

          {/* Honeypot: für Menschen unsichtbar, Bots füllen es aus */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
            aria-hidden="true"
          />

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3.5 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white hover:text-ink disabled:opacity-60"
          >
            {status === "submitting" ? "Wird gesendet …" : "Anfrage senden"}
          </button>

          {status === "success" && (
            <p className="text-sm text-steel">
              Vielen Dank! Wir melden uns zeitnah bei Ihnen.
            </p>
          )}
          {status === "error" && errorMessage && (
            <p className="text-sm text-red-400">{errorMessage}</p>
          )}
        </form>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-medium text-white/80">
        {label}
        {required && <span className="text-steel"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-white focus:border-accent focus:outline-none"
      />
    </label>
  );
}
