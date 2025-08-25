// import React from 'react'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'
import LPFeature from '../components/LPFeature'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100vw', alignSelf: 'stretch' }}>
            <main className="ml-main" style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1rem 2rem', flex: 1 }}>
                <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.25rem', margin: '0 0 0.75rem' }}>
                        Alle Fahrrad-Dokumente. An einem Ort.
                    </h1>
                    <p style={{ maxWidth: 760, margin: '0.5rem auto 1.25rem', color: '#445', fontSize: '1.05rem' }}>
                        Missing Link ist deine zentrale Plattform für Rechnungen, verbaute Komponenten,
                        Reparaturen, Kostenvoranschläge und Versicherungen – für Besitzer, Händler,
                        Werkstätten und Versicherer.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <Link
                            to="/demo"
                            style={{
                                background: '#154D71',
                                color: '#fff',
                                padding: '0.75rem 1rem',
                                borderRadius: 10,
                                textDecoration: 'none',
                                fontWeight: 600,
                                boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                            }}
                            aria-label="Produkt-Demo starten"
                        >
                            Produkt-Demo starten
                        </Link>
                        <a
                            href="#features"
                            style={{
                                background: 'transparent',
                                color: '#154D71',
                                padding: '0.75rem 1rem',
                                borderRadius: 10,
                                textDecoration: 'none',
                                fontWeight: 600,
                                border: '1px solid #154D71'
                            }}
                        >
                            Mehr erfahren
                        </a>
                    </div>
                </section>

                <section id="features" style={{ marginTop: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Warum Missing Link?</h2>
                    <div className="ml-features-grid">
                        <LPFeature
                            emoji="🧾"
                            title="Rechnungen & Belege"
                            description="Digital ablegen, jederzeit auffindbar – keine Zettelwirtschaft mehr."
                        />
                        <LPFeature
                            emoji="🔩"
                            title="Komponenten-Übersicht"
                            description="Alle verbauten Teile mit Seriennummern und Historie im Blick."
                        />
                        <LPFeature
                            emoji="🛠️"
                            title="Reparaturen & Wartung"
                            description="Eigene Arbeiten oder Werkstatt-Termine dokumentieren – inkl. Kosten."
                        />
                        <LPFeature
                            emoji="📋"
                            title="Kostenvoranschläge"
                            description="Angebote vergleichen, freigeben und nachvollziehen."
                        />
                        <LPFeature
                            emoji="🛡️"
                            title="Versicherungen"
                            description="Policen, Laufzeiten und Schadenfälle zentral verwalten."
                        />
                        <LPFeature
                            emoji="🤝"
                            title="Für alle Beteiligten"
                            description="Besitzer, Händler, Werkstätten und Versicherer auf einer Plattform."
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}