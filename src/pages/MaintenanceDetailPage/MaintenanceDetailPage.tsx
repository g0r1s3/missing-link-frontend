// src/pages/MaintenanceDetailPage.tsx
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import { Button } from '../../components'
import { getMaintenance, deleteMaintenance, Maintenance } from '../../features/maintenances/api'

import './MaintenanceDetailPage.css'

const MaintenanceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [maintenance, setMaintenance] = useState<Maintenance | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    let alive = true
    setLoading(true)
    getMaintenance(id)
      .then((m) => {
        if (!alive) return
        setMaintenance(m)
        setError(null)
      })
      .catch((e: unknown) => {
        const msg = (e as { message?: string })?.message || 'Wartung nicht gefunden'
        setError(msg)
      })
      .finally(() => setLoading(false))
    return () => {
      alive = false
    }
  }, [id])

  const handleDelete = async () => {
    if (!id) return
    if (!confirm('Diese Wartung wirklich löschen?')) return
    try {
      await deleteMaintenance(id)
      // Zurück zum zugehörigen Bike, falls bekannt
      if (maintenance?.bike_id) {
        navigate(`/bikes/${maintenance.bike_id}`, { replace: true })
      } else {
        navigate('/profile', { replace: true })
      }
    } catch (e: unknown) {
      const msg = (e as { message?: string })?.message || 'Löschen fehlgeschlagen'
      alert(msg)
    }
  }

  return (
    <div className="mdp-page">
      <header className="mdp-header">
        <h1 className="mdp-title">Wartung</h1>
        {maintenance?.bike_id ? (
          <Link to={`/bikes/${maintenance.bike_id}`} className="mdp-linkreset">
            <Button variant="secondary">Zum Bike</Button>
          </Link>
        ) : (
          <Link to="/profile" className="mdp-linkreset">
            <Button variant="secondary">Zurück</Button>
          </Link>
        )}
      </header>

      {loading && <p className="mdp-text mdp-text-muted">Lade Daten…</p>}
      {error && <p className="mdp-text mdp-text-error">{error}</p>}

      {maintenance && (
        <div className="mdp-card mdp-card-grid">
          <div><strong>Datum/Zeit:</strong> {new Date(maintenance.performed_at).toLocaleString()}</div>
          <div><strong>Extern?</strong> {maintenance.is_external ? 'Ja' : 'Nein'}</div>
          {maintenance.description && <div><strong>Beschreibung:</strong> {maintenance.description}</div>}
          {maintenance.vendor && <div><strong>Werkstatt/Anbieter:</strong> {maintenance.vendor}</div>}
          {maintenance.cost !== null && maintenance.cost !== undefined && (
            <div><strong>Kosten:</strong> {maintenance.cost} €</div>
          )}
          {maintenance.mileage_km !== null && maintenance.mileage_km !== undefined && (
            <div><strong>Kilometerstand:</strong> {maintenance.mileage_km} km</div>
          )}
          {maintenance.duration_min !== null && maintenance.duration_min !== undefined && (
            <div><strong>Dauer:</strong> {maintenance.duration_min} min</div>
          )}
          {maintenance.warranty !== null && maintenance.warranty !== undefined && (
            <div><strong>Gewährleistung:</strong> {maintenance.warranty ? 'Ja' : 'Nein'}</div>
          )}

          <div className="mdp-actions">
            <Button variant="danger" onClick={handleDelete}>Löschen</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MaintenanceDetailPage
