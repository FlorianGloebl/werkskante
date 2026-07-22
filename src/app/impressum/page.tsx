import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <div className="bg-white py-32">
      <Container className="prose prose-neutral max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-ink">Impressum</h1>

        <p className="mt-6 text-ink/70">Angaben gemäß § 5 TMG</p>

        <p className="mt-6 text-ink/70">
          Florian Glöbl
          <br />
          Geschäftsbezeichnung: Werkskante
          <br />
          Birkenweg 6
          <br />
          84082 Laberweinting
        </p>

        <p className="mt-6 text-ink/70">
          Telefon: +49 (0) 172 171 8875
          <br />
          E-Mail: info@werkskante.de
        </p>

        <p className="mt-6 text-ink/70">
          Umsatzsteuer-Identifikationsnummer: [noch zu ergänzen – falls vorhanden bzw.
          Hinweis auf Kleinunternehmerregelung gemäß § 19 UStG]
        </p>

        <h2 className="mt-10 font-display text-xl font-bold text-ink">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p className="mt-4 text-ink/70">
          Florian Glöbl
          <br />
          Birkenweg 6
          <br />
          84082 Laberweinting
        </p>

        <h2 className="mt-10 font-display text-xl font-bold text-ink">
          EU-Streitschlichtung
        </h2>
        <p className="mt-4 text-ink/70">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
          bereit: https://ec.europa.eu/consumers/odr/. Zur Teilnahme an einem
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht
          verpflichtet und nicht bereit.
        </p>

        <h2 className="mt-10 font-display text-xl font-bold text-ink">Haftung für Inhalte</h2>
        <p className="mt-4 text-ink/70">
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
          Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
          als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
          fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
          rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
          konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender
          Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <h2 className="mt-10 font-display text-xl font-bold text-ink">Haftung für Links</h2>
        <p className="mt-4 text-ink/70">
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
          keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
          Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
          Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
          inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
          einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Links umgehend entfernen.
        </p>

        <h2 className="mt-10 font-display text-xl font-bold text-ink">Urheberrecht</h2>
        <p className="mt-4 text-ink/70">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
          unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
          bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </Container>
    </div>
  );
}
