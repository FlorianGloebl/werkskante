"use client";

import { useState } from "react";
import {
  checkQuestions,
  checkResultLevels,
  getCheckRiskLevel,
  type CheckRiskLevel,
} from "@/content/check";
import { Button } from "@/components/ui/Button";

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

export function CheckQuiz() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === checkQuestions.length;

  const gaps = checkQuestions.filter(
    (q) => answers[q.id] !== undefined && answers[q.id] !== q.goodAnswer,
  );
  const riskLevel = getCheckRiskLevel(gaps.length);
  const result = checkResultLevels.find((r) => r.level === riskLevel)!;
  const styles = LEVEL_STYLES[riskLevel];

  function answer(id: string, value: boolean) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  return (
    <div className="rounded-sm border border-ink/10 bg-white p-6 shadow-sm sm:p-10">
      <div className="flex flex-col gap-6">
        {checkQuestions.map((q, i) => (
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
                        : "bg-mist text-ink/60 hover:bg-ink/10 hover:ring-2 hover:ring-accent/60 focus-visible:ring-2 focus-visible:ring-accent"
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

      {!allAnswered && (
        <p className="mt-6 text-sm text-ink/40">
          {answeredCount} von {checkQuestions.length} beantwortet
        </p>
      )}

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
        </div>
      )}
    </div>
  );
}
