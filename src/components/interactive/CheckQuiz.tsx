"use client";

import { useState } from "react";
import { checkQuestions } from "@/content/check";
import { Button } from "@/components/ui/Button";

export function CheckQuiz() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});

  const answeredCount = Object.values(answers).filter((v) => v !== undefined).length;
  const allAnswered = answeredCount === checkQuestions.length;

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
            <p className="text-base font-medium text-ink">
              <span className="mr-3 text-ink/30">{String(i + 1).padStart(2, "0")}</span>
              {q.question}
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
                    className={`rounded-sm px-4 py-2 text-sm font-semibold transition-colors ${
                      selected
                        ? "bg-ink text-white"
                        : "bg-mist text-ink/60 hover:bg-ink/10"
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
        <div className="mt-8 flex flex-col items-start gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-ink/70">
            Egal wie Sie geantwortet haben: Die belastbare Einschätzung entsteht vor Ort,
            nicht per Selbsttest.
          </p>
          <Button href="#kontakt" variant="primary">
            Lassen Sie uns gemeinsam vor Ort schauen
          </Button>
        </div>
      )}
    </div>
  );
}
