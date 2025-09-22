// src/pages/BikeDetailPage.tsx
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

import { Button } from '../../components'
import { getBike, deleteBike, Bike } from '../../features/bikes/api'
import { createMaintenance, getMaintenancesForBike, Maintenance } from '../../features/maintenances/api'

import './BikeDetailPage.css'

const BikeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [bike, setBike] = useState<Bike | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [maintenances, setMaintenances] = useState<Maintenance[]>([])
  const [mLoading, setMLoading] = useState<boolean>(false)
  const [mError, setMError] = useState<string | null>(null)

  const [form, setForm] = useState<{
    performed_at: string
    is_external: boolean
    description?: string
    vendor?: string
    cost?: string
    mileage_km?: string
    duration_min?: string
    warranty?: boolean
  }>({
    performed_at: '',
    is_external: false,
    description: '',
    vendor: '',
    cost: '',
    mileage_km: '',
    duration_min: '',
    warranty: false,
  })

  useEffect(() => {
    if (!id) return
    let alive = true
    setLoading(true)
    getBike(id)
      .then((b) => {
        if (!alive) return
        setBike(b)
        setError(null)
      })
      .catch((e: unknown) => {
        const msg = (e as { message?: string })?.message || 'Fahrzeug nicht gefunden'
        setError(msg)
      })
      .finally(() => setLoading(false))
    return () => {
      alive = false
    }
  }, [id])

  useEffect(() => {
    if (!id) return
    let alive = true
    setMLoading(true)
    getMaintenancesForBike(id)
      .then((list) => {
        if (!alive) return
        setMaintenances(Array.isArray(list) ? list : [])
        setMError(null)
      })
      .catch((e: unknown) => {
        const msg = (e as { message?: string })?.message || 'Fehler beim Laden der Wartungen'
        setMError(msg)
      })
      .finally(() => {
        if (!alive) return
        setMLoading(false)
      })
    return () => {
      alive = false
    }
  }, [id])

  const handleDelete = async () => {
    if (!id) return
    if (!confirm('Fahrzeug wirklich löschen?')) return
    try {
      await deleteBike(id)
      navigate('/profile', { replace: true })
    } catch (e: unknown) {
      const msg = (e as { message?: string })?.message || 'Löschen fehlgeschlagen'
      alert(msg)
    }
  }

  async function handleAddMaintenance(e: React.FormEvent) {
    e.preventDefault()
    if (!id) return
    try {
      const isoString = form.performed_at
        ? new Date(form.performed_at).toISOString()
        : new Date().toISOString()
      const payload = {
        bike_id: id,
        performed_at: isoString,
        is_external: !!form.is_external,
        description: form.description?.trim() || undefined,
        vendor: form.vendor?.trim() || undefined,
        cost: form.cost ? Number(form.cost) : undefined,
        mileage_km: form.mileage_km ? Number(form.mileage_km) : undefined,
        duration_min: form.duration_min ? Number(form.duration_min) : undefined,
        warranty: form.warranty ?? false,
      }
      const created = await createMaintenance(payload)
      setMaintenances((prev) => [created, ...prev])
      setForm({
        performed_at: '',
        is_external: false,
        description: '',
        vendor: '',
        cost: '',
        mileage_km: '',
        duration_min: '',
        warranty: false,
      })
    } catch (e: unknown) {
      const msg = (e as { message?: string })?.message || 'Anlegen der Wartung fehlgeschlagen'
      alert(msg)
    }
  }

  return (
    <div className="bdp-page">
      <header className="bdp-header">
        <h1 className="bdp-title">
          {bike ? `${bike.brand}${bike.model ? ' • ' + bike.model : ''}` : 'Fahrzeug'}
        </h1>
        <Link to="/profile" className="bdp-linkreset">
          <Button variant="secondary">Zurück</Button>
        </Link>
      </header>

      {loading && <p className="bdp-text bdp-text-muted">Lade Daten…</p>}
      {error && <p className="bdp-text bdp-text-error">{error}</p>}

      {bike && (
        <div className="bdp-card bdp-card-grid">
          <div><strong>Marke:</strong> {bike.brand}</div>
          {bike.model && <div><strong>Modell:</strong> {bike.model}</div>}
          {bike.color && <div><strong>Farbe:</strong> {bike.color}</div>}
          {bike.year && <div><strong>Baujahr:</strong> {bike.year}</div>}
          {bike.frame_number && <div><strong>Rahmennummer:</strong> {bike.frame_number}</div>}
          {bike.purchase_date && <div><strong>Kaufdatum:</strong> {bike.purchase_date}</div>}
          {bike.weight_kg !== null && bike.weight_kg !== undefined && (
            <div><strong>Gewicht (kg):</strong> {bike.weight_kg}</div>
          )}
          {bike.brake_type && <div><strong>Bremse:</strong> {bike.brake_type}</div>}
          {bike.tire_size && <div><strong>Reifengröße:</strong> {bike.tire_size}</div>}

          <div className="bdp-actions">
            <Button variant="danger" onClick={handleDelete}>Löschen</Button>
          </div>
        </div>
      )}

      <section className="bdp-section">
        <h2 className="bdp-section-title">Wartungen</h2>
        {mLoading && <p className="bdp-text bdp-text-muted">Lade Wartungen…</p>}
        {mError && <p className="bdp-text bdp-text-error">{mError}</p>}

        {!mLoading && !mError && (
          <>
            {maintenances.length === 0 ? (
              <div className="bdp-empty">
                <p className="bdp-empty-text">Noch keine Wartungen vorhanden.</p>
              </div>
            ) : (
              <ul className="bdp-list">
                {maintenances.map((m) => (
                  <li key={m.id}>
                    <Link to={`/maintenances/${m.id}`} className="bdp-listitem">
                      <div className="bdp-listitem-row">
                        <div>
                          <div className="bdp-listitem-title">
                            {new Date(m.performed_at).toLocaleString()} {m.is_external ? '• extern' : '• intern'}
                          </div>
                          <div className="bdp-listitem-meta">
                            {m.description || 'Keine Beschreibung'}
                            {m.cost !== null && m.cost !== undefined ? ` • ${m.cost} €` : ''}
                          </div>
                        </div>
                        <span className="bdp-listitem-cta">Details ›</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        <div className="bdp-formwrap">
          <h3 className="bdp-form-title">Wartung hinzufügen</h3>
          <form onSubmit={handleAddMaintenance} className="bdp-form bdp-card">
            <label className="bdp-label">
              <span>Datum/Zeit</span>
              <input
                className="bdp-input"
                type="datetime-local"
                value={form.performed_at}
                onChange={(e) => setForm((f) => ({ ...f, performed_at: e.target.value }))}
                required
              />
            </label>

            <label className="bdp-checkrow">
              <input
                className="bdp-checkbox"
                type="checkbox"
                checked={form.is_external}
                onChange={(e) => setForm((f) => ({ ...f, is_external: e.target.checked }))}
              />
              Extern (Werkstatt)
            </label>

            <label className="bdp-label">
              <span>Beschreibung</span>
              <textarea
                className="bdp-textarea"
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                rows={3}
                placeholder="z. B. Kette gereinigt, Bremse eingestellt"
              />
            </label>

            <label className="bdp-label">
              <span>Werkstatt/Anbieter</span>
              <input
                className="bdp-input"
                type="text"
                value={form.vendor}
                onChange={(e) => setForm((f) => ({ ...f, vendor: e.target.value }))}
                placeholder="Name"
              />
            </label>

            <div className="bdp-grid-autofit">
              <label className="bdp-label">
                <span>Kosten (€)</span>
                <input
                  className="bdp-input"
                  type="number"
                  step="0.01"
                  value={form.cost}
                  onChange={(e) => setForm((f) => ({ ...f, cost: e.target.value }))}
                  placeholder="0.00"
                />
              </label>

              <label className="bdp-label">
                <span>Kilometerstand (km)</span>
                <input
                  className="bdp-input"
                  type="number"
                  value={form.mileage_km}
                  onChange={(e) => setForm((f) => ({ ...f, mileage_km: e.target.value }))}
                  placeholder="z. B. 1200"
                />
              </label>

              <label className="bdp-label">
                <span>Dauer (min)</span>
                <input
                  className="bdp-input"
                  type="number"
                  value={form.duration_min}
                  onChange={(e) => setForm((f) => ({ ...f, duration_min: e.target.value }))}
                  placeholder="z. B. 30"
                />
              </label>

              <label className="bdp-checkrow">
                <input
                  className="bdp-checkbox"
                  type="checkbox"
                  checked={!!form.warranty}
                  onChange={(e) => setForm((f) => ({ ...f, warranty: e.target.checked }))}
                />
                Gewährleistung
              </label>
            </div>

            <div className="bdp-actions bdp-actions-right">
              <Button type="submit" variant="primary">Wartung speichern</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default BikeDetailPage
