// src/components/Footer/Footer.tsx
// @ts-ignore
import React, { useCallback, useEffect, useId, useRef, useState } from 'react'
import './Footer.css'

type ModalKey = 'imprint' | 'privacy'

const Overlay: React.FC<{ onClose: () => void; labelledById: string }> = ({
                                                                              onClose,
                                                                              labelledById,
                                                                              children
                                                                          }) => {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onClose])

    const dialogRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        dialogRef.current?.focus()
    }, [])

    return (
        <div className="ml-modal__backdrop" role="dialog" aria-modal="true" aria-labelledby={labelledById} onClick={onClose}>
            <div
                ref={dialogRef}
                className="ml-modal"
                tabIndex={-1}
                onClick={(e) => e.stopPropagation()}
            >
        {children}
        <div className="ml-modal__actions">
          <button className="ml-btn" onClick={onClose}>Schließen</button>
        </div>
      </div>
    </div>
  )
}

// ... existing code ...
const Footer: React.FC = () => {
  const [open, setOpen] = useState<ModalKey | null>(null)
  const titleId = useId()

  const openModal = useCallback((k: ModalKey) => setOpen(k), [])
  const closeModal = useCallback(() => setOpen(null), [])

  return (
    <footer className="ml-footer">
      <div className="ml-footer__inner">
        <div className="ml-footer__brandrow">
          <strong className="ml-footer__brand">missing-link</strong>
          <span className="ml-footer__copy">© {new Date().getFullYear()}</span>
        </div>

        <nav className="ml-footer__links" aria-label="Rechtliche Informationen">
          <button className="ml-footer__link" onClick={() => openModal('imprint')}>Impressum</button>
          <button className="ml-footer__link" onClick={() => openModal('privacy')}>Datenschutz</button>
        </nav>
      </div>

      {open && (
        <Overlay onClose={closeModal} labelledById={titleId}>
          {open === 'imprint' && (
            <section>
              <h2 id={titleId} className="ml-modal__title">Impressum</h2>
              <p>
                Anbieter: Missing-Link GmbH<br />
                Anschrift: Beispielstraße 1, 12345 Berlin, Deutschland<br />
                Vertretungsberechtigte Person: Jane Doe<br />
                Handelsregister: HRB 123456 (Amtsgericht Berlin)<br />
                USt-IdNr.: DE123456789<br />
                Kontakt: info@missing-link.example
              </p>
            </section>
          )}
          {open === 'privacy' && (
            <section>
              <h2 id={titleId} className="ml-modal__title">Datenschutzerklärung</h2>
              <p>
                Wir verarbeiten personenbezogene Daten gemäß DSGVO. Auskunfts-, Berichtigungs-, Lösch-,
                Einschränkungs-, Datenübertragbarkeits- sowie Widerspruchsrechte können Sie jederzeit geltend machen.
              </p>
              <p>
                Verantwortlicher: Missing-Link GmbH, Beispielstraße 1, 12345 Berlin, Deutschland, E-Mail: privacy@missing-link.example
              </p>
            </section>
          )}
        </Overlay>
      )}
    </footer>
  )
}

export default Footer