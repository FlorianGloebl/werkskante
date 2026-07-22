import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <div className="bg-white py-32">
      <Container className="prose prose-neutral max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-ink">Datenschutzerklärung</h1>

        <h2 className="mt-10 font-display text-xl font-bold text-ink">1. Verantwortlicher</h2>
        <p className="mt-4 text-ink/70">
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          <br />
          Florian Glöbl – Werkskante
          <br />
          Birkenweg 6, 84082 Laberweinting
          <br />
          E-Mail: info@werkskante.de
          <br />
          Telefon: +49 (0) 172 171 8875
        </p>

        <h2 className="mt-10 font-display text-xl font-bold text-ink">
          2. Allgemeines zur Datenverarbeitung
        </h2>
        <p className="mt-4 text-ink/70">
          Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit
          dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und
          Leistungen erforderlich ist. Die Verarbeitung erfolgt auf Grundlage einer
          Einwilligung, zur Erfüllung eines Vertrags bzw. vorvertraglicher Maßnahmen, zur
          Erfüllung einer rechtlichen Verpflichtung oder aufgrund eines berechtigten
          Interesses (Art. 6 Abs. 1 DSGVO).
        </p>

        <h2 className="mt-10 font-display text-xl font-bold text-ink">
          3. Hosting und Server-Logfiles
        </h2>
        <p className="mt-4 text-ink/70">
          Diese Website wird bei [Hosting-Anbieter noch einzutragen] gehostet. Beim Aufruf
          der Website erhebt der Hosting-Anbieter automatisch Informationen in sogenannten
          Server-Logfiles, die Ihr Browser automatisch übermittelt: Browsertyp und -version,
          verwendetes Betriebssystem, Referrer-URL, IP-Adresse (anonymisiert bzw. gekürzt),
          Datum und Uhrzeit der Anfrage. Diese Daten dienen ausschließlich der
          technischen Bereitstellung und Absicherung der Website und werden nach kurzer Zeit
          automatisch gelöscht.
        </p>

        <h2 className="mt-10 font-display text-xl font-bold text-ink">4. Kontaktformular</h2>
        <p className="mt-4 text-ink/70">
          Wenn Sie uns über das Kontaktformular eine Anfrage zukommen lassen, werden die von
          Ihnen angegebenen Daten (Firma, Ansprechpartner, E-Mail-Adresse, optional Telefon,
          Anzahl Mitarbeitende und Branche, Thema und Nachricht) ausschließlich zum Zweck der
          Bearbeitung Ihrer Anfrage per E-Mail an uns übermittelt. Die Daten werden nicht in
          einer Datenbank gespeichert, sondern per E-Mail zugestellt. Eine Weitergabe an
          Dritte findet nicht statt, mit Ausnahme des von uns genutzten
          E-Mail-Versanddienstes [SMTP-Anbieter noch einzutragen], der die Zustellung
          technisch übernimmt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. f DSGVO
          (Bearbeitung Ihrer Anfrage bzw. unser berechtigtes Interesse an einer effizienten
          Kommunikation). Die Daten werden gelöscht, sobald sie für die Bearbeitung Ihrer
          Anfrage nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen.
        </p>

        <h2 className="mt-10 font-display text-xl font-bold text-ink">5. Cookies</h2>
        <p className="mt-4 text-ink/70">
          Diese Website setzt keine Analyse- oder Marketing-Cookies und keine
          Tracking-Technologien Dritter ein.
        </p>

        <h2 className="mt-10 font-display text-xl font-bold text-ink">
          6. Ihre Rechte als betroffene Person
        </h2>
        <p className="mt-4 text-ink/70">
          Sie haben jederzeit das Recht auf Auskunft über Ihre bei uns gespeicherten
          personenbezogenen Daten (Art. 15 DSGVO), auf Berichtigung (Art. 16 DSGVO), auf
          Löschung (Art. 17 DSGVO), auf Einschränkung der Verarbeitung (Art. 18 DSGVO), auf
          Datenübertragbarkeit (Art. 20 DSGVO) sowie auf Widerspruch gegen die Verarbeitung
          (Art. 21 DSGVO). Wenden Sie sich hierzu bitte an die oben genannte
          Kontaktadresse.
        </p>

        <h2 className="mt-10 font-display text-xl font-bold text-ink">
          7. Beschwerderecht bei einer Aufsichtsbehörde
        </h2>
        <p className="mt-4 text-ink/70">
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
          Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Zuständig ist das
          Bayerische Landesamt für Datenschutzaufsicht (BayLDA).
        </p>

        <h2 className="mt-10 font-display text-xl font-bold text-ink">
          8. Änderung dieser Datenschutzerklärung
        </h2>
        <p className="mt-4 text-ink/70">
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
          aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer
          Leistungen umzusetzen.
        </p>
      </Container>
    </div>
  );
}
