"use client";

import { useState, type FormEvent } from "react";
import {
  checkQuestionsByArea,
  checkResultLevels,
  getCheckRiskLevel,
  type CheckQuestion,
  type CheckRiskLevel,
} from "@/content/check";
import { businessUnits } from "@/content/services";
import { siteSettings } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

const LEVEL_STYLES: Record<
  CheckRiskLevel,
  { dot: string; bar: string; text: string; ring: string }
> = {
  gruen: {
    dot: "bg-good",
    bar: "bg-good",
    text: "text-good",
    ring: "ring-good/30",
  },
  gelb: {
    dot: "bg-warn",
    bar: "bg-warn",
    text: "text-warn",
    ring: "ring-warn/30",
  },
  rot: {
    dot: "bg-risk",
    bar: "bg-risk",
    text: "text-risk",
    ring: "ring-risk/30",
  },
};

const LEVEL_ORDER: CheckRiskLevel[] = ["gruen", "gelb", "rot"];

const areas = businessUnits
  .filter((unit) => unit.visible && checkQuestionsByArea[unit.id]?.length)
  .sort((a, b) => a.sortOrder - b.sortOrder);

const areaGridClass =
  areas.length >= 3 ? "sm:grid-cols-3" : areas.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";

function buildResultMail(params: {
  areaLabel: string;
  questions: CheckQuestion[];
  answers: Record<string, boolean>;
  resultLabel: string;
  gaps: CheckQuestion[];
  name: string;
  company: string;
  email: string;
  message: string;
}) {
  const { areaLabel, questions, answers, resultLabel, gaps, name, company, email, message } =
    params;

  const lines = [
    `Bereich: ${areaLabel}`,
    `Ergebnis: ${resultLabel}`,
    "",
    "Antworten:",
    ...questions.map((q) => `- ${q.question} → ${answers[q.id] ? "Ja" : "Nein"}`),
  ];

  if (gaps.length > 0) {
    lines.push("", "Mögliche Handlungsfelder:");
    gaps.forEach((g) => lines.push(`- ${g.hint} (Passende Leistung: ${g.serviceTitle})`));
  }

  if (message.trim()) {
    lines.push("", "Frage / Anmerkung:", message.trim());
  }

  lines.push("", `Firma: ${company || "-"}`, `Von: ${name} (${email})`);

  const subject = `Selbstcheck-Ergebnis: ${areaLabel}`;
  return { subject, body: lines.join("\n") };
}

function openMailto(email: string, subject: string, body: string) {
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function CheckQuiz() {
  const [areaId, setAreaId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showSendForm, setShowSendForm] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "success">("idle");

  if (!areaId) {
    return (
      <div className="rounded-sm border border-ink/10 bg-white p-6 shadow-sm sm:p-10">
        <h3 className="font-display text-lg font-bold text-ink">
          Für welchen Bereich möchten Sie den Selbstcheck machen?
        </h3>
        <p className="mt-2 text-sm text-ink/60">
          Wenige kurze Fragen, keine Note – nur ein erster Hinweis, wo sich ein genauerer Blick lohnt.
        </p>
        <div className={`mt-6 grid gap-4 ${areaGridClass}`}>
          {areas.map((unit) => (
            <button
              key={unit.id}
              type="button"
              onClick={() => setAreaId(unit.id)}
              className="flex flex-col gap-3 rounded-sm border border-accent bg-accent p-5 text-left text-white transition-all hover:bg-ink hover:ring-2 hover:ring-accent focus-visible:outline-none focus-visible:bg-ink focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/15 text-white">
                <ServiceIcon name={unit.icon} className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-white">{unit.navLabel}</span>
              <span className="text-sm text-white/75">{unit.claim}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const questions = checkQuestionsByArea[areaId];
  const areaLabel = areas.find((unit) => unit.id === areaId)?.navLabel ?? "";

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;

  const gaps = questions.filter(
    (q) => answers[q.id] !== undefined && answers[q.id] !== q.goodAnswer,
  );
  const riskLevel = getCheckRiskLevel(gaps.length);
  const result = checkResultLevels.find((r) => r.level === riskLevel)!;
  const styles = LEVEL_STYLES[riskLevel];

  function answer(id: string, value: boolean) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function changeArea() {
    setAreaId(null);
    setAnswers({});
    setShowSendForm(false);
    setSendStatus("idle");
  }

  function handleSendResult(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Honeypot ausgelöst: Formular still bestätigen, aber nichts öffnen.
    if (data.website) {
      setSendStatus("success");
      form.reset();
      return;
    }

    const { subject, body } = buildResultMail({
      areaLabel,
      questions,
      answers,
      resultLabel: result.label,
      gaps,
      name: data.name,
      company: data.company,
      email: data.email,
      message: data.message ?? "",
    });

    openMailto(siteSettings.contactEmail, subject, body);

    setSendStatus("success");
    form.reset();
  }

  const areaUnit = areas.find((unit) => unit.id === areaId);

  return (
    <div className="rounded-sm border border-ink/10 bg-white p-6 shadow-sm sm:p-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-6">
        <span className="flex items-center gap-3 text-sm font-semibold text-ink/50">
          {areaUnit && (
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-ink text-white">
              <ServiceIcon name={areaUnit.icon} className="h-4 w-4" />
            </span>
          )}
          Selbstcheck: <span className="text-ink">{areaLabel}</span>
        </span>
        <button
          type="button"
          onClick={changeArea}
          className="text-sm font-semibold text-accent hover:underline"
        >
          Anderen Bereich wählen
        </button>
      </div>

      <div className="mb-8 flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-mist">
          <div
            className="h-full rounded-full bg-accent transition-all duration-300"
            style={{ width: `${(answeredCount / questions.length) * 100}%` }}
          />
        </div>
        <span className="shrink-0 text-xs font-semibold text-ink/40">
          {answeredCount}/{questions.length}
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {questions.map((q, i) => (
          <div
            key={q.id}
            className="flex flex-col gap-3 border-b border-ink/10 pb-6 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="flex gap-3 text-base font-medium text-ink">
              <span className="shrink-0 text-ink/30">{String(i + 1).padStart(2, "0")}</span>
              <span>{q.question}</span>
            </p>
            <div className="flex gap-2">
              {(["Ja", "Nein"] as const).map((label) => {
                const value = label === "Ja";
                const selected = answers[q.id] === value;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => answer(q.id, value)}
                    className={`rounded-sm px-4 py-2 text-sm font-semibold outline-none transition-all ${
                      selected
                        ? "bg-ink text-white ring-2 ring-accent"
                        : "bg-mist text-ink/60 hover:bg-accent/10 hover:text-accent hover:ring-2 hover:ring-accent/60 focus-visible:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {allAnswered && (
        <div className="mt-8 flex flex-col gap-6 border-t border-ink/10 pt-8">
          <div className="flex items-center gap-3">
            <div className="flex h-2 flex-1 gap-1 overflow-hidden rounded-full bg-mist">
              {LEVEL_ORDER.map((lvl) => (
                <div
                  key={lvl}
                  className={`h-full flex-1 rounded-full transition-colors ${
                    lvl === riskLevel ? LEVEL_STYLES[lvl].bar : "bg-ink/10"
                  }`}
                />
              ))}
            </div>
            <span
              className={`flex items-center gap-2 whitespace-nowrap rounded-sm px-3 py-1 text-sm font-semibold ring-2 ${styles.ring} ${styles.text}`}
            >
              <span className={`h-2 w-2 shrink-0 rounded-full ${styles.dot}`} />
              {result.label}
            </span>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-ink">{result.headline}</h4>
            <p className="mt-2 max-w-2xl text-ink/70">{result.body}</p>
          </div>

          {gaps.length > 0 && (
            <ul className="flex flex-col gap-3">
              {gaps.map((q) => (
                <li
                  key={q.id}
                  className="flex flex-col gap-1 rounded-sm bg-mist p-4 sm:flex-row sm:items-start sm:gap-4"
                >
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${styles.dot}`}
                    aria-hidden="true"
                  />
                  <p className="text-sm text-ink/70">
                    {q.hint}{" "}
                    <span className="font-semibold text-ink">
                      Passende Leistung: {q.serviceTitle}.
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          )}

          <p className="text-xs text-ink/40">
            Kein automatischer Test ersetzt die Einschätzung vor Ort – er zeigt nur, wo ein
            genauerer Blick sich lohnt.
          </p>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button href="#kontakt" variant="primary">
              Vor-Ort-Termin vereinbaren
            </Button>
            {gaps.length > 0 && (
              <Button href="#leistungen" variant="secondary">
                Passende Leistungen ansehen
              </Button>
            )}
          </div>

          <div className="rounded-sm border border-ink/10 bg-mist p-6">
            {!showSendForm && sendStatus !== "success" && (
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h5 className="font-display font-bold text-ink">Ergebnis behalten?</h5>
                  <p className="text-sm text-ink/60">
                    Schicken Sie sich (und uns) das Ergebnis per E-Mail – gerne mit einer Frage dazu.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSendForm(true)}
                  className="inline-flex shrink-0 items-center justify-center rounded-sm border border-accent px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-accent transition-colors hover:bg-accent hover:text-white"
                >
                  Per E-Mail senden
                </button>
              </div>
            )}

            {showSendForm && sendStatus !== "success" && (
              <form onSubmit={handleSendResult} noValidate className="flex flex-col gap-4">
                <div>
                  <h5 className="font-display font-bold text-ink">Ergebnis per E-Mail senden</h5>
                  <p className="text-sm text-ink/60">
                    Wir erhalten Ihre Antworten und eine Rückmailadresse, um uns zu melden.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="font-medium text-ink/80">
                      Name<span className="text-risk"> *</span>
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="rounded-sm border border-ink/15 bg-white px-3 py-2.5 text-ink focus:border-accent focus:outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="font-medium text-ink/80">
                      E-Mail<span className="text-risk"> *</span>
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="rounded-sm border border-ink/15 bg-white px-3 py-2.5 text-ink focus:border-accent focus:outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="font-medium text-ink/80">Firma</span>
                    <input
                      type="text"
                      name="company"
                      className="rounded-sm border border-ink/15 bg-white px-3 py-2.5 text-ink focus:border-accent focus:outline-none"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-ink/80">Ihre Frage oder Anmerkung (optional)</span>
                  <textarea
                    name="message"
                    rows={3}
                    className="rounded-sm border border-ink/15 bg-white px-3 py-2.5 text-ink focus:border-accent focus:outline-none"
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

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-ink"
                  >
                    Ergebnis senden
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSendForm(false)}
                    className="text-sm font-semibold text-ink/50 hover:text-ink"
                  >
                    Abbrechen
                  </button>
                </div>
              </form>
            )}

            {sendStatus === "success" && (
              <p className="text-sm text-good">
                Ihr E-Mail-Programm öffnet sich mit dem vorausgefüllten Ergebnis. Bitte senden Sie
                die E-Mail ab, damit wir sie erhalten.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
