// src/pages/BikeDetailPage.tsx
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { getBike, deleteBike, Bike } from '../features/bikes/api'
import { Button } from '../components'
import { createMaintenance, getMaintenancesForBike, Maintenance } from '../features/maintenances/api'

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
    }>({ performed_at: '', is_external: false, description: '', vendor: '', cost: '', mileage_km: '', duration_min: '', warranty: false })

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
            .catch((e) => {
                if (!alive) return
                setMError(e?.message || 'Fehler beim Laden der Wartungen')
            })
            .finally(() => {
                if (!alive) return
                setMLoading(false)
            })
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
            // Reset Form
            setForm({ performed_at: '', is_external: false, description: '', vendor: '', cost: '', mileage_km: '', duration_min: '', warranty: false })
        } catch (e: any) {
            alert(e?.message || 'Anlegen der Wartung fehlgeschlagen')
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

            <section style={{ marginTop: '2rem' }}>
                <h2 style={{ margin: '0 0 0.5rem 0', color: 'var(--panel-text, #0f172a)' }}>Wartungen</h2>
                {mLoading && <p style={{ color: 'var(--muted, #445)' }}>Lade Wartungen…</p>}
                {mError && <p style={{ color: 'var(--color-accent, #33A1E0)' }}>{mError}</p>}

                {!mLoading && !mError && (
                    <>
                        {maintenances.length === 0 ? (
                            <div style={{
                                background: 'var(--panel-bg, #ffffff)',
                                color: 'var(--panel-text, #0f172a)',
                                border: '1px solid var(--color-border, rgba(15, 23, 42, 0.12))',
                                borderRadius: 12,
                                padding: '1rem',
                                marginBottom: '1rem'
                            }}>
                                <p style={{ margin: 0, color: 'var(--muted, #445)' }}>Noch keine Wartungen vorhanden.</p>
                            </div>
                        ) : (
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
                                {maintenances.map(m => (
                                    <li key={m.id}>
                                        <Link
                                            to={`/maintenances/${m.id}`}
                                            style={{
                                                display: 'block',
                                                textDecoration: 'none',
                                                background: 'var(--panel-bg, #ffffff)',
                                                color: 'var(--panel-text, #0f172a)',
                                                border: '1px solid var(--color-border, rgba(15, 23, 42, 0.12))',
                                                borderRadius: 12,
                                                padding: '0.75rem 1rem'
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                                                <div>
                                                    <div style={{ fontWeight: 600 }}>
                                                        {new Date(m.performed_at).toLocaleString()} {m.is_external ? '• extern' : '• intern'}
                                                    </div>
                                                    <div style={{ fontSize: '0.9rem', color: 'var(--muted, #445)' }}>
                                                        {m.description || 'Keine Beschreibung'}{m.cost != null ? ` • ${m.cost} €` : ''}
                                                    </div>
                                                </div>
                                                <span style={{ color: 'var(--muted, #445)' }}>Details ›</span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                )}

                <div style={{ marginTop: '1.25rem' }}>
                    <h3 style={{ margin: '0 0 0.5rem 0' }}>Wartung hinzufügen</h3>
                    <form onSubmit={handleAddMaintenance}
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
                        <label style={{ display: 'grid', gap: 4 }}>
                            <span>Datum/Zeit</span>
                            <input
                                type="datetime-local"
                                value={form.performed_at}
                                onChange={(e) => setForm(f => ({ ...f, performed_at: e.target.value }))}
                                required
                                style={{ padding: '0.5rem', borderRadius: 8, border: '1px solid var(--color-border, rgba(15, 23, 42, 0.12))' }}
                            />
                        </label>

                        <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <input
                                type="checkbox"
                                checked={form.is_external}
                                onChange={(e) => setForm(f => ({ ...f, is_external: e.target.checked }))}
                            />
                            Extern (Werkstatt)
                        </label>

                        <label style={{ display: 'grid', gap: 4 }}>
                            <span>Beschreibung</span>
                            <textarea
                                value={form.description}
                                onChange={(e) => setForm(f => ({ ...f, description: e.target.value }))}
                                rows={3}
                                placeholder="z. B. Kette gereinigt, Bremse eingestellt"
                                style={{ padding: '0.5rem', borderRadius: 8, border: '1px solid var(--color-border, rgba(15, 23, 42, 0.12))' }}
                            />
                        </label>

                        <label style={{ display: 'grid', gap: 4 }}>
                            <span>Werkstatt/Anbieter</span>
                            <input
                                type="text"
                                value={form.vendor}
                                onChange={(e) => setForm(f => ({ ...f, vendor: e.target.value }))}
                                placeholder="Name"
                                style={{ padding: '0.5rem', borderRadius: 8, border: '1px solid var(--color-border, rgba(15, 23, 42, 0.12))' }}
                            />
                        </label>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                            <label style={{ display: 'grid', gap: 4 }}>
                                <span>Kosten (€)</span>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={form.cost}
                                    onChange={(e) => setForm(f => ({ ...f, cost: e.target.value }))}
                                    placeholder="0.00"
                                    style={{ padding: '0.5rem', borderRadius: 8, border: '1px solid var(--color-border, rgba(15, 23, 42, 0.12))' }}
                                />
                            </label>
                            <label style={{ display: 'grid', gap: 4 }}>
                                <span>Kilometerstand (km)</span>
                                <input
                                    type="number"
                                    value={form.mileage_km}
                                    onChange={(e) => setForm(f => ({ ...f, mileage_km: e.target.value }))}
                                    placeholder="z. B. 1200"
                                    style={{ padding: '0.5rem', borderRadius: 8, border: '1px solid var(--color-border, rgba(15, 23, 42, 0.12))' }}
                                />
                            </label>
                            <label style={{ display: 'grid', gap: 4 }}>
                                <span>Dauer (min)</span>
                                <input
                                    type="number"
                                    value={form.duration_min}
                                    onChange={(e) => setForm(f => ({ ...f, duration_min: e.target.value }))}
                                    placeholder="z. B. 30"
                                    style={{ padding: '0.5rem', borderRadius: 8, border: '1px solid var(--color-border, rgba(15, 23, 42, 0.12))' }}
                                />
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <input
                                    type="checkbox"
                                    checked={!!form.warranty}
                                    onChange={(e) => setForm(f => ({ ...f, warranty: e.target.checked }))}
                                />
                                Gewährleistung
                            </label>
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                            <Button type="submit" variant="primary">Wartung speichern</Button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default BikeDetailPage