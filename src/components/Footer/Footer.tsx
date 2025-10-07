// src/components/Footer/Footer.tsx
import React, { useCallback, useId, useState } from 'react'
import './Footer.css'
import Modal from '../Modal'

type ModalKey = 'imprint' | 'privacy'

const Footer: React.FC = () => {
  const [open, setOpen] = useState<ModalKey | null>(null)
  const titleId = useId()

  const openModal = useCallback((k: ModalKey) => setOpen(k), [])
  const closeModal = useCallback(() => setOpen(null), [])

  return (
    <footer className="ml-footer">
      <div className="ml-footer-inner">
        <div className="ml-footer-brand-row">
          <strong className="ml-footer-brand">missing-link</strong>
          <span className="ml-footer-copy">© {new Date().getFullYear()}</span>
        </div>

        <nav className="ml-footer-links" aria-label="Rechtliche Informationen">
          <button className="ml-footer-link" onClick={() => openModal('imprint')}>Impressum</button>
          <button className="ml-footer-link" onClick={() => openModal('privacy')}>Datenschutz</button>
        </nav>
      </div>

      <Modal
        open={open === 'imprint'}
        onClose={closeModal}
        labelledById={titleId}
        title={open === 'imprint' ? 'Impressum' : undefined}
      >
        {open === 'imprint' && (
          <div>
            <p>
              Anbieter: Missing-Link GmbH<br />
              Anschrift: Beispielstraße 1, 12345 Berlin, Deutschland<br />
              Vertretungsberechtigte Person: Jane Doe<br />
              Handelsregister: HRB 123456 (Amtsgericht Berlin)<br />
              USt-IdNr.: DE123456789<br />
              Kontakt: info@missing-link.example
            </p>
          </div>
        )}
      </Modal>
      <Modal
        open={open === 'privacy'}
        onClose={closeModal}
        labelledById={titleId}
        title={open === 'privacy' ? 'Datenschutzerklärung' : undefined}
      >
        {open === 'privacy' && (
          <div>
            <p>
              Wir verarbeiten personenbezogene Daten gemäß DSGVO. Auskunfts-, Berichtigungs-, Lösch-,
              Einschränkungs-, Datenübertragbarkeits- sowie Widerspruchsrechte können Sie jederzeit geltend machen.
            </p>
            <p>
              Verantwortlicher: Missing-Link GmbH, Beispielstraße 1, 12345 Berlin, Deutschland, E-Mail: privacy@missing-link.example
            </p>
          </div>
        )}
      </Modal>
    </footer>
  )
}

export default Footer
