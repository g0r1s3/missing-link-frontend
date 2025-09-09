// src/pages/BikeDetailPage.tsx
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { getBike, deleteBike, Bike } from '../features/bikes/api'
import { Button } from '../components'

const BikeDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [bike, setBike] = useState<Bike | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

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
            .catch((e) => setError(e?.message || 'Fahrzeug nicht gefunden'))
            .finally(() => setLoading(false))
        return () => { alive = false }
    }, [id])

    const handleDelete = async () => {
        if (!id) return
        if (!confirm('Fahrzeug wirklich löschen?')) return
        try {
            await deleteBike(id)
            navigate('/profile', { replace: true })
        } catch (e: any) {
            alert(e?.message || 'Löschen fehlgeschlagen')
        }
    }

    return (
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '2rem 1rem' }}>
            <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h1 style={{ margin: 0, color: 'var(--panel-text, #0f172a)' }}>
                    {bike ? `${bike.brand}${bike.model ? ' • ' + bike.model : ''}` : 'Fahrzeug'}
                </h1>
                <Link to="/profile" style={{ textDecoration: 'none' }}>
                    <Button variant="secondary">Zurück</Button>
                </Link>
            </header>

            {loading && <p style={{ color: 'var(--muted, #445)' }}>Lade Daten…</p>}
            {error && <p style={{ color: 'var(--color-accent, #33A1E0)' }}>{error}</p>}

            {bike && (
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
                    <div><strong>Marke:</strong> {bike.brand}</div>
                    {bike.model && <div><strong>Modell:</strong> {bike.model}</div>}
                    {bike.color && <div><strong>Farbe:</strong> {bike.color}</div>}
                    {bike.year && <div><strong>Baujahr:</strong> {bike.year}</div>}
                    {bike.frame_number && <div><strong>Rahmennummer:</strong> {bike.frame_number}</div>}
                    {bike.purchase_date && <div><strong>Kaufdatum:</strong> {bike.purchase_date}</div>}
                    {bike.weight_kg != null && <div><strong>Gewicht (kg):</strong> {bike.weight_kg}</div>}
                    {bike.brake_type && <div><strong>Bremse:</strong> {bike.brake_type}</div>}
                    {bike.tire_size && <div><strong>Reifengröße:</strong> {bike.tire_size}</div>}

                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                        {/* Optional: Route zu Edit-Form später */}
                        <Button variant="danger" onClick={handleDelete}>Löschen</Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BikeDetailPage