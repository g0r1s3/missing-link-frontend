import { Link } from 'react-router-dom'

import Footer from '../../components/Footer/Footer'
import LPFAQuestion from '../../components/LPFAQuestion'
import LPContact from '../../components/LPContact'
import LPFeature from '../../components/LPFeature'

import './LandingPage.css'

export default function LandingPage() {
  return (
    <>
      {/* Seiten-Wrapper + Hauptinhalt */}
      <div className="ml-landing">
        <main className="ml-main ml-main-container">
          {/* HERO */}
          <section className="ml-hero" aria-labelledby="hero-title">
            <h1 id="hero-title" className="ml-hero-title">
              Alle Fahrrad-Dokumente. An einem Ort.
            </h1>
            <p className="ml-hero-lead">
              Missing Link ist deine zentrale Plattform für Rechnungen, verbaute Komponenten,
              Reparaturen, Kostenvoranschläge und Versicherungen – für Besitzer, Händler,
              Werkstätten und Versicherer.
            </p>

            <div className="ml-hero-cta">
              <Link to="/demo" className="ml-cta ml-cta-primary" aria-label="Produkt-Demo starten">
                Produkt-Demo starten
              </Link>
              <a href="#features" className="ml-cta ml-cta-secondary">
                Mehr erfahren
              </a>
            </div>
          </section>

          {/* FEATURES */}
          <section id="features" className="ml-section">
            <h2 className="ml-section-title">Warum Missing Link?</h2>
            <div className="ml-features-grid">
              <LPFeature emoji="🧾" title="Rechnungen & Belege" description="Digital ablegen, jederzeit auffindbar – keine Zettelwirtschaft mehr." />
              <LPFeature emoji="🔩" title="Komponenten-Übersicht" description="Alle verbauten Teile mit Seriennummern und Historie im Blick." />
              <LPFeature emoji="🛠️" title="Reparaturen & Wartung" description="Eigene Arbeiten oder Werkstatt-Termine dokumentieren – inkl. Kosten." />
              <LPFeature emoji="📋" title="Kostenvoranschläge" description="Angebote vergleichen, freigeben und nachvollziehen." />
              <LPFeature emoji="🛡️" title="Versicherungen" description="Policen, Laufzeiten und Schadenfälle zentral verwalten." />
              <LPFeature emoji="🤝" title="Für alle Beteiligten" description="Besitzer, Händler, Werkstätten und Versicherer auf einer Plattform." />
            </div>
          </section>

          {/* FAQ */}
          <section className="ml-faq-section" aria-labelledby="faq-title">
            <h2 id="faq-title" className="ml-section-title">Häufige Fragen</h2>
            <LPFAQuestion
              question="Brauche ich ein Konto?"
              answer="Nein, für die Demo nicht. Für die volle Nutzung später schon."
              defaultOpen
            />
            <LPFAQuestion
              question="Kann ich jederzeit kündigen?"
              answer={<p>Ja, monatlich zum Ende der Laufzeit. Keine Mindestdauer.</p>}
            />
            <LPFAQuestion
              question="Gibt es einen Teamrabatt?"
              answer={
                <ul>
                  <li>Ab 5 Nutzer: 10%</li>
                  <li>Ab 20 Nutzer: 20%</li>
                </ul>
              }
            />
          </section>

          {/* Kontakt */}
          <LPContact />
        </main>
      </div>

      <Footer />
    </>
  )
}
