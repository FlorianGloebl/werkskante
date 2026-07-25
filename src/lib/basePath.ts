// Kept in sync with next.config.ts: GitHub Pages serves this repo under /werkskante/.
export const basePath = process.env.GITHUB_PAGES === "true" ? "/werkskante" : "";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}
