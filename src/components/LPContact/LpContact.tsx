// src/components/LpContact/LpContact.tsx
import React, { useState } from 'react'
import './LpContact.css'

import { TextField, Button, TextArea } from '../' // aus dem Komponenten-Index

function LpContact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: API-Call
    setSubmitted(true)
  }

  return (
    <section className="ml-contact" aria-labelledby="contact-heading">
      <div className="ml-contact-container">
        <h2 id="contact-heading" className="ml-contact-title">Kontaktiere uns</h2>
        <p className="ml-contact-subtitle">
          Hast du Fragen? Schreib uns eine Nachricht – wir melden uns schnellstmöglich zurück.
        </p>

        <div className="ml-contact-panel">
          {submitted ? (
            <div className="ml-contact-success" role="status">
              Danke! Deine Nachricht wurde gesendet.
            </div>
          ) : (
            <form className="ml-contact-form" onSubmit={onSubmit} noValidate>
              <div className="ml-contact-row">
                <TextField
                  id="contact-name"
                  label="Dein Name"
                  type="text"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  required
                />
                <TextField
                  id="contact-email"
                  label="E-Mail"
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="ml-contact-row">
                <TextArea
                  id="contact-message"
                  label="Nachricht"
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                  rows={6}
                  required
                />
              </div>

              <div className="ml-contact-actions">
                <Button type="submit">Nachricht senden</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default LpContact
