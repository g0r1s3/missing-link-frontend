// src/components/Footer/Footer.tsx
// @ts-ignore
import React, { useCallback, useEffect, useId, useRef, useState } from 'react'
import './Footer.css'

type ModalKey =
    | 'imprint'
    | 'privacy'
    | 'cookies'
    | 'terms'
    | 'contact'
    | 'dataProcessing'

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
                    <button className="ml-btn" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

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

                <nav className="ml-footer__links" aria-label="Legal and compliance">
                    <button className="ml-footer__link" onClick={() => openModal('imprint')}>Imprint</button>
                    <button className="ml-footer__link" onClick={() => openModal('privacy')}>Privacy Policy (GDPR)</button>
                    <button className="ml-footer__link" onClick={() => openModal('cookies')}>Cookie Policy</button>
                    <button className="ml-footer__link" onClick={() => openModal('terms')}>Terms of Service</button>
                    <button className="ml-footer__link" onClick={() => openModal('contact')}>Contact</button>
                    <button className="ml-footer__link" onClick={() => openModal('dataProcessing')}>Data Processing & DPA</button>
                </nav>

                <p className="ml-footer__note">
                    We use necessary cookies for core functionality. Analytics or marketing cookies are optional and disabled by default.
                    Manage your preferences in the Cookie Policy.
                </p>
            </div>

            {open && (
                <Overlay onClose={closeModal} labelledById={titleId}>
                    {open === 'imprint' && (
                        <section>
                            <h2 id={titleId} className="ml-modal__title">Imprint</h2>
                            <p>
                                Company: Missing-Link GmbH<br />
                                Address: Example Street 1, 12345 Berlin, Germany<br />
                                Managing Director: Jane Doe<br />
                                Commercial Register: HRB 123456<br />
                                VAT ID: DE123456789
                            </p>
                        </section>
                    )}
                    {open === 'privacy' && (
                        <section>
                            <h2 id={titleId} className="ml-modal__title">Privacy Policy (GDPR)</h2>
                            <p>
                                We process personal data according to Art. 6 GDPR. You have rights of access, rectification, erasure, restriction,
                                data portability and objection. Contact details for the controller can be found in the Imprint.
                            </p>
                            <p>
                                Data retention is limited to the purpose. For detailed information about categories, purposes, recipients, and retention
                                periods, see our full policy.
                            </p>
                        </section>
                    )}
                    {open === 'cookies' && (
                        <section>
                            <h2 id={titleId} className="ml-modal__title">Cookie Policy</h2>
                            <p>
                                We use strictly necessary cookies for site operation. Optional cookies (analytics/marketing) are disabled by default.
                            </p>
                            <details>
                                <summary>Cookie categories</summary>
                                <ul>
                                    <li>Necessary: session, security</li>
                                    <li>Analytics: usage, performance</li>
                                    <li>Marketing: personalization (if enabled)</li>
                                </ul>
                            </details>
                            <div className="ml-modal__actions">
                                <button className="ml-btn" onClick={() => alert('Opening cookie settings...')}>Open Cookie Settings</button>
                            </div>
                        </section>
                    )}
                    {open === 'terms' && (
                        <section>
                            <h2 id={titleId} className="ml-modal__title">Terms of Service</h2>
                            <p>
                                By using this site, you agree to our terms and conditions. Liability is limited to the maximum extent permitted by law.
                            </p>
                        </section>
                    )}
                    {open === 'contact' && (
                        <section>
                            <h2 id={titleId} className="ml-modal__title">Contact</h2>
                            <p>
                                Email: legal@missing-link.example<br />
                                Address: Example Street 1, 12345 Berlin, Germany
                            </p>
                        </section>
                    )}
                    {open === 'dataProcessing' && (
                        <section>
                            <h2 id={titleId} className="ml-modal__title">Data Processing & DPA</h2>
                            <p>
                                For processor relationships under Art. 28 GDPR, we provide a Data Processing Agreement (DPA) upon request.
                            </p>
                        </section>
                    )}
                </Overlay>
            )}
        </footer>
    )
}

export default Footer