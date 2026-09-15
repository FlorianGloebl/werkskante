// Seit dem Umzug auf www.werkskante.de läuft die Seite unter der Root-Domain,
// kein Sub-Path mehr nötig (anders als zuvor auf floriangloebl.github.io/werkskante/).
export const basePath = "";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}
