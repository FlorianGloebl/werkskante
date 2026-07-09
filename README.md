# Werkskante – Website

Werkskante | Arbeitssicherheit & schlanke Prozesse im Mittelstand.
Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Projektstruktur

```
src/
  app/                 Routen (Startseite, Impressum, Datenschutz, API, SEO-Dateien)
  components/
    ui/                Basiskomponenten (Button, Container, Logo, Edge-Motiv, …)
    layout/            Header, Footer
    sections/          Startseiten-Abschnitte (Hero, Ansatz, Leistungen, …)
    interactive/        Interaktive Module (Werkskante-Check, Kompass, Sticky-CTA, …)
  content/             Content als typisierte TS-Dateien (Team, Leistungen, Referenzen, …)
  types/               Datenmodell (TeamMember, Service, Reference, ContactInquiry, …)
  lib/                 Validierung (zod-Schema für das Kontaktformular)
```

Inhalte (Team, Leistungen, Referenzen, Site-Settings) liegen aktuell als strukturierte
TypeScript-Dateien in `src/content/`. Die Typen in `src/types/content.ts` sind bewusst so
modelliert, dass sie 1:1 auf ein späteres CMS/Datenbankschema übertragbar sind (siehe
„Migration zu CMS/Datenbank“ unten).

## Lokale Entwicklung

Voraussetzung: Node.js 20+.

```bash
npm install
cp .env.example .env   # SMTP-Zugangsdaten eintragen (optional für lokale Entwicklung)
npm run dev
```

Die Seite läuft dann unter [http://localhost:3000](http://localhost:3000).

Ohne gesetzte `SMTP_HOST` wird jede Kontaktanfrage nur in die Server-Logs geschrieben –
so lässt sich das Formular lokal testen, ohne echte Mails zu versenden.

### Nützliche Skripte

```bash
npm run dev      # Entwicklungsserver
npm run build    # Produktions-Build
npm run start    # Produktions-Server (nach Build)
npm run lint     # ESLint
```

## Kontaktformular

- Validierung über `zod` (`src/lib/validation.ts`), serverseitig erneut geprüft in
  `src/app/api/contact/route.ts`.
- Spam-Schutz: unsichtbares Honeypot-Feld (`website`) sowie ein einfaches
  IP-basiertes Rate-Limit (5 Anfragen/Minute).
- Versand per SMTP (`nodemailer`), sobald `SMTP_HOST` gesetzt ist. Für produktiven
  Betrieb SPF/DKIM/DMARC für die Mail-Domain einrichten.

## Deployment auf Hetzner (Docker)

1. **Server vorbereiten**: Hetzner Cloud VPS (Ubuntu/Debian), Docker + Docker Compose
   installieren, Firewall so konfigurieren, dass nur 80/443 (öffentlich) und SSH
   (eingeschränkt) erreichbar sind.

2. **Code auf den Server bringen** (z. B. `git clone` oder Deployment via CI/CD).

3. **Umgebungsvariablen setzen**:

   ```bash
   cp .env.example .env
   # SMTP-Zugangsdaten und Empfänger-Adresse eintragen
   ```

4. **Bauen & starten**:

   ```bash
   docker compose up -d --build
   ```

   Der Next.js-Server läuft danach nur auf `127.0.0.1:3000` – öffentlich erreichbar wird
   er über einen Reverse Proxy.

5. **Reverse Proxy & SSL**: Ein Beispiel für Caddy (automatisches Let's Encrypt-SSL)
   liegt unter `deploy/Caddyfile.example`. Alternativ kann Nginx + Certbot verwendet
   werden. Datei nach `/etc/caddy/Caddyfile` kopieren und Domain anpassen.

6. **DNS**: A-Records für `werkskante.de` und `www.werkskante.de` auf die Server-IP
   setzen. Mail-DNS (MX/SPF/DKIM/DMARC) separat und sauber konfigurieren.

7. **Updates ausrollen**:

   ```bash
   git pull
   docker compose up -d --build
   ```

## Roadmap: was später ins CMS/Backend wandern sollte

Phase 1 nutzt bewusst lokale Content-Dateien, um den Prototyp schlank zu halten. Das
Datenmodell in `src/types/content.ts` ist so gebaut, dass folgende Bereiche später ohne
Strukturbruch in ein CMS/eine Datenbank (z. B. PostgreSQL + Prisma, oder ein Headless-CMS
wie Payload/Directus/Strapi) migriert werden können:

- **Team** (`TeamMember`) – Profile, Reihenfolge, Sichtbarkeit
- **Leistungen** (`Service`, `BusinessUnit`) – Leistungsbeschreibungen, Kategorien
- **Referenzen** (`Reference`) – erst nach Freigabe sichtbar (`approved`/`visible`)
- **Kontaktanfragen** (`ContactInquiry`) – aktuell nur per Mail versendet, künftig
  persistiert und mit Status-Workflow (`new` → `contacted` → `qualified` → `closed`)
- **Site-Settings** (`SiteSettings`) – Meta-Daten, Kontaktdaten, Rechtstexte

Bis dahin gilt: Inhalte in `src/content/*.ts` pflegen, Typen in `src/types/content.ts`
nicht ohne Migrationsplan ändern.

## Bildmaterial

Die Fotos in `public/images/` sind lizenzfreie Pexels-Platzhalter (Pexels-Lizenz: freie
kommerzielle Nutzung, keine Namensnennung nötig), ausgewählt nach den Kriterien aus dem
Master-Prompt (keine erkennbaren Marken/Logos, keine Sicherheitshelm-Klischees). Vor
Launch durch eigene Betriebsfotos ersetzen:

- `hero-industrial-edge.jpg` – Hero-Hintergrund
- `technician-inspection.jpg` – „Was bedeutet Werkskante“
- `rope-access-safety.jpg`, `warehouse-racking.jpg` – „Aus der Praxis“-Galerie

## Rechtliches

`src/app/impressum` und `src/app/datenschutz` enthalten Platzhalter-Texte. Vor Launch
durch rechtlich geprüfte Inhalte ersetzen.
