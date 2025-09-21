// src/pages/MaintenanceDetailPage.tsx
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Button } from '../components'
import { getMaintenance, deleteMaintenance, Maintenance } from '../features/maintenances/api'

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
            .catch((e) => setError(e?.message || 'Wartung nicht gefunden'))
            .finally(() => setLoading(false))
        return () => { alive = false }
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
        } catch (e: any) {
            alert(e?.message || 'Löschen fehlgeschlagen')
        }
    }

    return (
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '2rem 1rem' }}>
            <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h1 style={{ margin: 0, color: 'var(--panel-text, #0f172a)' }}>Wartung</h1>
                {maintenance?.bike_id ? (
                    <Link to={`/bikes/${maintenance.bike_id}`} style={{ textDecoration: 'none' }}>
                        <Button variant="secondary">Zum Bike</Button>
                    </Link>
                ) : (
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <Button variant="secondary">Zurück</Button>
                    </Link>
                )}
            </header>

            {loading && <p style={{ color: 'var(--muted, #445)' }}>Lade Daten…</p>}
            {error && <p style={{ color: 'var(--color-accent, #33A1E0)' }}>{error}</p>}

            {maintenance && (
                <div
                    style={{
                        background: 'var(--panel-bg, #ffffff)',
                        color: 'var(--panel-text, #0f172a)',
                        border: '1px solid var(--color-border, rgba(15, 23, 42, 0.12))',
                        borderRadius: 12,
                        padding: '1rem',
                        display: 'grid',
                        gap: '0.5rem'
                    }}
                >
                    <div><strong>Datum/Zeit:</strong> {new Date(maintenance.performed_at).toLocaleString()}</div>
                    <div><strong>Extern?</strong> {maintenance.is_external ? 'Ja' : 'Nein'}</div>
                    {maintenance.description && <div><strong>Beschreibung:</strong> {maintenance.description}</div>}
                    {maintenance.vendor && <div><strong>Werkstatt/Anbieter:</strong> {maintenance.vendor}</div>}
                    {maintenance.cost != null && <div><strong>Kosten:</strong> {maintenance.cost} €</div>}
                    {maintenance.mileage_km != null && <div><strong>Kilometerstand:</strong> {maintenance.mileage_km} km</div>}
                    {maintenance.duration_min != null && <div><strong>Dauer:</strong> {maintenance.duration_min} min</div>}
                    {maintenance.warranty != null && <div><strong>Gewährleistung:</strong> {maintenance.warranty ? 'Ja' : 'Nein'}</div>}

                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                        <Button variant="danger" onClick={handleDelete}>Löschen</Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MaintenanceDetailPage