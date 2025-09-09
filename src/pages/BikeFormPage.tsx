// src/pages/BikeFormPage.tsx
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { createBike } from '../features/bikes/api'
import { Button } from '../components'

const initialState = {
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
    const [form, setForm] = useState(initialState)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm((f) => ({ ...f, [name]: value }))
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!form.brand.trim()) {
      setError('Bitte Marke angeben.')
      return
    }

    // Client-Validation und sauberes Payload
    const payload: any = { brand: form.brand.trim() }

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
    } catch (e: any) {
      // zeigt jetzt die detaillierte Server-Message aus fetchJson
      setError(e?.message || 'Erstellen fehlgeschlagen')
    } finally {
      setSubmitting(false)
    }
  }

    return (
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '2rem 1rem' }}>
            <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h1 style={{ margin: 0, color: 'var(--panel-text, #0f172a)' }}>Fahrzeug hinzufügen</h1>
                <Link to="/profile" style={{ textDecoration: 'none' }}>
                    <Button variant="secondary">Abbrechen</Button>
                </Link>
            </header>

            {error && <p style={{ color: 'var(--color-accent, #33A1E0)' }}>{error}</p>}

            <form onSubmit={onSubmit}
                  style={{
                      background: 'var(--panel-bg, #ffffff)',
                      color: 'var(--panel-text, #0f172a)',
                      border: '1px solid var(--color-border, rgba(15, 23, 42, 0.12))',
                      borderRadius: 12,
                      padding: '1rem',
                      display: 'grid',
                      gap: '0.75rem'
                  }}
            >
                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>Marke *</label>
                    <input
                        name="brand"
                        value={form.brand}
                        onChange={onChange}
                        placeholder="z. B. Canyon"
                        required
                        style={{ width: '100%', padding: '0.5rem 0.6rem', borderRadius: 8, border: '1px solid var(--color-border, rgba(15,23,42,0.18))', background: 'var(--panel-bg, #fff)', color: 'inherit' }}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>Modell</label>
                    <input name="model" value={form.model} onChange={onChange} placeholder="z. B. Endurace" style={{ width: '100%', padding: '0.5rem 0.6rem', borderRadius: 8, border: '1px solid var(--color-border, rgba(15,23,42,0.18))', background: 'var(--panel-bg, #fff)', color: 'inherit' }} />
                </div>
                <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: '1fr 1fr' }}>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>Farbe</label>
                        <input name="color" value={form.color} onChange={onChange} placeholder="z. B. schwarz" style={{ width: '100%', padding: '0.5rem 0.6rem', borderRadius: 8, border: '1px solid var(--color-border, rgba(15,23,42,0.18))', background: 'var(--panel-bg, #fff)', color: 'inherit' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>Baujahr</label>
                        <input name="year" value={form.year} onChange={onChange} type="number" min="1900" max="2100" placeholder="z. B. 2023" style={{ width: '100%', padding: '0.5rem 0.6rem', borderRadius: 8, border: '1px solid var(--color-border, rgba(15,23,42,0.18))', background: 'var(--panel-bg, #fff)', color: 'inherit' }} />
                    </div>
                </div>
                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>Rahmennummer</label>
                    <input name="frame_number" value={form.frame_number} onChange={onChange} placeholder="Optional" style={{ width: '100%', padding: '0.5rem 0.6rem', borderRadius: 8, border: '1px solid var(--color-border, rgba(15,23,42,0.18))', background: 'var(--panel-bg, #fff)', color: 'inherit' }} />
                </div>
                <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: '1fr 1fr' }}>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>Kaufdatum</label>
                        <input name="purchase_date" value={form.purchase_date} onChange={onChange} type="date" placeholder="YYYY-MM-DD" style={{ width: '100%', padding: '0.5rem 0.6rem', borderRadius: 8, border: '1px solid var(--color-border, rgba(15,23,42,0.18))', background: 'var(--panel-bg, #fff)', color: 'inherit' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>Gewicht (kg)</label>
                        <input name="weight_kg" value={form.weight_kg} onChange={onChange} type="number" step="0.01" placeholder="z. B. 8.5" style={{ width: '100%', padding: '0.5rem 0.6rem', borderRadius: 8, border: '1px solid var(--color-border, rgba(15,23,42,0.18))', background: 'var(--panel-bg, #fff)', color: 'inherit' }} />
                    </div>
                </div>
                <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: '1fr 1fr' }}>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>Bremstyp</label>
                        <input name="brake_type" value={form.brake_type} onChange={onChange} placeholder="z. B. Scheibe" style={{ width: '100%', padding: '0.5rem 0.6rem', borderRadius: 8, border: '1px solid var(--color-border, rgba(15,23,42,0.18))', background: 'var(--panel-bg, #fff)', color: 'inherit' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>Reifengröße</label>
                        <input name="tire_size" value={form.tire_size} onChange={onChange} placeholder="z. B. 700x28c" style={{ width: '100%', padding: '0.5rem 0.6rem', borderRadius: 8, border: '1px solid var(--color-border, rgba(15,23,42,0.18))', background: 'var(--panel-bg, #fff)', color: 'inherit' }} />
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                    <Button type="submit" disabled={submitting}>
                        {submitting ? 'Speichern…' : 'Speichern'}
                    </Button>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <Button variant="secondary" type="button">Abbrechen</Button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default BikeFormPage