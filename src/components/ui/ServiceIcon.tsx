import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  harness: (
    <>
      <path d="M12 4v4" />
      <path d="M8 8h8l2 12H6L8 8z" />
      <path d="M6 12h12" />
      <circle cx="12" cy="8" r="2" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <rect x="9" y="2" width="6" height="3" rx="1" />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
      <path d="M8 19h3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
      <circle cx="17" cy="9" r="2.2" />
      <path d="M14.8 19c.4-2.4 1.9-4 3.7-4 1.9 0 3.4 1.7 3.8 4" />
    </>
  ),
  workflow: (
    <>
      <circle cx="5" cy="6" r="2.2" />
      <circle cx="19" cy="6" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <path d="M7 6.8l10-.6" />
      <path d="M6.3 8l4.7 8" />
      <path d="M17.7 8l-4.7 8" />
    </>
  ),
  helmet: (
    <>
      <path d="M4 15a8 8 0 0 1 16 0z" />
      <path d="M3 15h18" />
      <path d="M12 7v-.5" />
    </>
  ),
  goggles: (
    <>
      <rect x="3.5" y="8" width="7" height="6" rx="2" />
      <rect x="13.5" y="8" width="7" height="6" rx="2" />
      <path d="M10.5 10.5h3" />
      <path d="M3.5 9.5c-1 0-1.5.5-1.5 1.5" />
      <path d="M20.5 9.5c1 0 1.5.5 1.5 1.5" />
    </>
  ),
  earmuffs: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
    </>
  ),
  gloves: (
    <>
      <path d="M8 21v-7.5a2 2 0 0 1 4 0V13" />
      <path d="M12 13v-2.5a2 2 0 0 1 4 0V13" />
      <path d="M16 13v-1.5a2 2 0 0 1 4 0V15a6 6 0 0 1-6 6H10a4 4 0 0 1-4-4v-3" />
      <path d="M8 13.5a2 2 0 0 0-4 0V16" />
    </>
  ),
  boots: (
    <>
      <path d="M8 3v9.5c0 1-.4 1.6-1.2 2.3L4 17.5c-.7.6-1 1.2-1 2v1.5h11v-3l3.5-1c1-.3 1.5-.9 1.5-2v-.5c0-1-.6-1.7-1.6-2L12 11" />
      <path d="M8 8h4" />
    </>
  ),
  papers: (
    <>
      <path d="M9 5h9a1 1 0 0 1 1 1v10" />
      <rect x="5" y="8" width="11" height="12" rx="1" />
      <path d="M8 12h5" />
      <path d="M8 15.5h5" />
    </>
  ),
  gap: (
    <>
      <path d="M4 9V6a2 2 0 0 1 2-2h3" />
      <path d="M15 4h3a2 2 0 0 1 2 2v3" />
      <path d="M20 15v3a2 2 0 0 1-2 2h-3" />
      <path d="M9 20H6a2 2 0 0 1-2-2v-3" />
      <path d="M9 12h6" strokeDasharray="2 2.5" />
    </>
  ),
  "megaphone-mute": (
    <>
      <path d="M3 10v4h3l5 4V6l-5 4H3z" />
      <path d="M15 9a3 3 0 0 1 0 6" />
      <path d="M4 4l16 16" />
    </>
  ),
  "blocked-gear": (
    <>
      <circle cx="10" cy="12" r="5" />
      <path d="M10 5v2.2M10 16.8V19M3 12h2.2M14.8 12H17M5.4 6.4l1.6 1.6M13 15l1.6 1.6M5.4 17.6l1.6-1.6M13 9l1.6-1.6" />
      <path d="M17 5l4 4M21 5l-4 4" />
    </>
  ),
  "paper-shield": (
    <>
      <path
        d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"
        strokeDasharray="3 3"
      />
      <path d="M9 12h6" strokeDasharray="2 2" />
    </>
  ),
  certificate: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M9.5 14.5L8 21l4-2 4 2-1.5-6.5" />
      <path d="M9.5 9l1.7 1.7L14.5 7" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 4.5-13 14-14-1 9.5-6 14-14 14z" />
      <path d="M5 19c2-3 4.5-5.5 8-8" />
    </>
  ),
  torch: (
    <>
      <path d="M10 3c-1 1.5-1.5 2.8-1.5 4a3.5 3.5 0 0 0 7 0c0-1.2-.5-2.5-1.5-4-.3 1.2-1 2-1.7 2S10.3 4.2 10 3z" />
      <path d="M9.5 10.5h5L15 21H9l-.5-10.5z" />
      <path d="M9.5 15h5" />
    </>
  ),
  "magnifier-check": (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5L21 21" />
      <path d="M7.5 10.5l2 2 3.5-4" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" />
      <path d="M4 12l8 4.5 8-4.5" />
      <path d="M4 16.5l8 4.5 8-4.5" />
    </>
  ),
  vest: (
    <>
      <path d="M8 4l4 2 4-2 2 3-2 2v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9L6 7l2-3z" />
      <path d="M12 6v13" strokeDasharray="1.5 2" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" />
    </>
  ),
  workplace: (
    <>
      <rect x="4" y="5" width="16" height="10" rx="1.5" />
      <path d="M9 19h6" />
      <path d="M12 15v4" />
    </>
  ),
  "alert-triangle": (
    <>
      <path d="M12 4l9 15H3l9-15z" />
      <path d="M12 10v4" />
      <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  caliper: (
    <>
      <path d="M3 6v5" />
      <path d="M21 6v5" />
      <path d="M3 8.5h18" />
      <path d="M7 8.5V5.5" />
      <path d="M11 8.5V6.5" />
      <path d="M15 8.5V6.5" />
      <path d="M6 15l3 6" />
      <path d="M18 15l-3 6" />
      <path d="M6 15h12" />
    </>
  ),
};

export function ServiceIcon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const path = paths[name] ?? paths.shield;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
