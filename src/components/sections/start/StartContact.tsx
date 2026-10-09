"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteSettings } from "@/content/site";
import { startContent } from "@/content/start";

type Status = "idle" | "success";

export function StartContact() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Honeypot ausgelöst: Formular still bestätigen, aber nichts öffnen.
    if (data.website) {
      setStatus("success");
      form.reset();
      return;
    }

    const subject = `Neue Anfrage über werkskante.de/start: ${data.name}`;
    const body = [`Name: ${data.name}`, `E-Mail: ${data.email}`, "", data.message].join("\n");

    window.location.href = `mailto:${siteSettings.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus("success");
    form.reset();
  }

  return (
    <section id="kontakt" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <Container className="relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Kontakt"
            title={startContent.contactTitle}
            description={startContent.contactDescription}
            light
          />
          <div className="mt-10 flex flex-col gap-2 text-sm text-white/60">
            <a href={`mailto:${siteSettings.contactEmail}`} className="hover:text-white">
              {siteSettings.contactEmail}
            </a>
            <span>{siteSettings.phone}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 lg:col-span-8" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="E-Mail" name="email" type="email" required />
          </div>

          <label className="flex flex-col gap-2 text-sm">
            <span className="font-medium text-white/80">Dein Vorhaben</span>
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
            className="mt-2 inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3.5 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white hover:text-ink"
          >
            Nachricht senden
          </button>

          {status === "success" && (
            <p className="text-sm text-steel">
              Dein E-Mail-Programm öffnet sich mit einer vorausgefüllten Nachricht. Bitte sende
              sie ab, damit ich sie erhalte.
            </p>
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
