// src/pages/BikeFormPage.tsx
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { Button, TextField } from '../../components'
import { createBike } from '../../features/bikes/api'

import './BikeFormPage.css'

type FormState = {
  brand: string
  model: string
  color: string
  year: string
  frame_number: string
  purchase_date: string
  weight_kg: string
  brake_type: string
  tire_size: string
}

type CreateBikePayload = {
  brand: string
  model?: string
  color?: string
  year?: number
  frame_number?: string
  purchase_date?: string
  weight_kg?: number
  brake_type?: string
  tire_size?: string
}

const initialState: FormState = {
  brand: '',
  model: '',
  color: '',
  year: '',
  frame_number: '',
  purchase_date: '',
  weight_kg: '',
  brake_type: '',
  tire_size: ''
}

const BikeFormPage: React.FC = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState<FormState>(initialState)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    // EU-Format DD.MM.YYYY → in ISO YYYY-MM-DD umwandeln (API erwartet ISO)
    if (name === 'purchase_date') {
      const eu = value.trim()
      const m = eu.match(/^(\d{2})\.(\d{2})\.(\d{4})$/)
      if (m) {
        const [, dd, mm, yyyy] = m
        const iso = `${yyyy}-${mm}-${dd}`
        setForm((f) => ({ ...f, purchase_date: iso }))
        return
      }
    }

    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.brand.trim()) {
      setError('Bitte Marke angeben.')
      return
    }

    const payload: CreateBikePayload = { brand: form.brand.trim() }

    const model = form.model.trim()
    if (model) payload.model = model

    const color = form.color.trim()
    if (color) payload.color = color

    const yearStr = String(form.year ?? '').trim()
    if (yearStr) {
      const yearNum = Number(yearStr)
      if (!Number.isInteger(yearNum) || yearNum < 1900 || yearNum > 2100) {
        setError('Baujahr muss eine Zahl zwischen 1900 und 2100 sein.')
        return
      }
      payload.year = yearNum
    }

    const frame = form.frame_number.trim()
    if (frame) payload.frame_number = frame

    const date = String(form.purchase_date ?? '').trim()
    if (date) {
      const ok = /^\d{4}-\d{2}-\d{2}$/.test(date)
      if (!ok) {
        setError('Kaufdatum muss das Format YYYY-MM-DD haben.')
        return
      }
      payload.purchase_date = date
    }

    const weightStr = String(form.weight_kg ?? '').trim()
    if (weightStr) {
      const weightNum = Number(weightStr)
      if (!Number.isFinite(weightNum) || weightNum <= 0) {
        setError('Gewicht muss eine positive Zahl sein.')
        return
      }
      payload.weight_kg = weightNum
    }

    const brake = form.brake_type.trim()
    if (brake) payload.brake_type = brake

    const tire = form.tire_size.trim()
    if (tire) payload.tire_size = tire

    setSubmitting(true)
    setError(null)
    try {
      const created = await createBike(payload)
      navigate(`/bikes/${created.id}`, { replace: true })
    } catch (e: unknown) {
      const msg = (e as { message?: string })?.message || 'Erstellen fehlgeschlagen'
      setError(msg)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page-constrained">
      <header className="page-header">
        <h1 className="page-title">Fahrzeug hinzufügen</h1>
        <Link to="/profile" className="link-reset">
          <Button variant="primary">Abbrechen</Button>
        </Link>
      </header>

      {error && (
        <p className="form-error" role="alert" aria-live="polite">
          {error}
        </p>
      )}

      <form onSubmit={onSubmit} className="card form-grid">
        <TextField
          label="Marke *"
          name="brand"
          value={form.brand}
          onChange={onChange}
          placeholder="z. B. Canyon"
          required
        />

        <TextField
          label="Modell"
          name="model"
          value={form.model}
          onChange={onChange}
          placeholder="z. B. Endurace"
        />

        <div className="grid-2">
          <TextField
            label="Farbe"
            name="color"
            value={form.color}
            onChange={onChange}
            placeholder="z. B. schwarz"
          />
          <TextField
            label="Baujahr"
            name="year"
            type="number"
            min="1900"
            max="2100"
            value={form.year}
            onChange={onChange}
            placeholder="z. B. 2023"
          />
        </div>

        <TextField
          label="Rahmennummer"
          name="frame_number"
          value={form.frame_number}
          onChange={onChange}
          placeholder="Optional"
        />

        <div className="grid-2">
          <TextField
            label="Kaufdatum"
            name="purchase_date"
            type="date"
            // Browser-UI im deutschen Format; Wert bleibt ISO (YYYY-MM-DD)
            lang="de-DE"
            placeholder="TT.MM.JJJJ"
            value={form.purchase_date}
            onChange={onChange}
          />
          <TextField
            label="Gewicht (kg)"
            name="weight_kg"
            type="number"
            step="0.1"
            min="0"
            max="40"
            value={form.weight_kg}
            onChange={onChange}
            placeholder="z. B. 8.5"
          />
        </div>

        <div className="grid-2">
          <TextField
            label="Bremstyp"
            name="brake_type"
            value={form.brake_type}
            onChange={onChange}
            placeholder="z. B. Scheibe"
          />
          <TextField
            label="Reifengröße"
            name="tire_size"
            value={form.tire_size}
            onChange={onChange}
            placeholder="z. B. 700x28c"
          />
        </div>

        <div className="button-row">
          <Button type="submit" disabled={submitting}>
            {submitting ? 'Speichern…' : 'Speichern'}
          </Button>
          <Link to="/profile" className="link-reset">
            <Button variant="primary" type="button">
              Abbrechen
            </Button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default BikeFormPage
