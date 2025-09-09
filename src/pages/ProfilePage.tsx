import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMyBikes } from '../features/bikes/api'
import { Button } from '../components'

const ProfilePage: React.FC = () => {
  const [bikes, setBikes] = useState<Array<any>>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    getMyBikes()
      .then((data) => {
        if (!isMounted) return
        setBikes(Array.isArray(data) ? data : [])
        setError(null)
      })
      .catch((e) => {
        if (!isMounted) return
        setError(e?.message || 'Fehler beim Laden der Fahrzeuge')
      })
      .finally(() => {
        if (!isMounted) return
        setLoading(false)
      })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '2rem 1rem' }}>
      {/* ... bestehender Profil-Inhalt ... */}

      <section style={{ marginTop: '2rem' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <h2 style={{ margin: 0, color: 'var(--panel-text, #0f172a)' }}>Meine Fahrzeuge</h2>
          <Link to="/bikes/new" style={{ textDecoration: 'none' }}>
            <Button variant="primary">Fahrzeug hinzufügen</Button>
          </Link>
        </header>

        {loading && <p style={{ color: 'var(--muted, #445)' }}>Lade Fahrzeuge…</p>}
        {error && (
          <p style={{ color: 'var(--color-accent, #33A1E0)' }}>
            {error}
          </p>
        )}
        {!loading && !error && (
          <>
            {bikes.length === 0 ? (
              <div style={{
                background: 'var(--panel-bg, #ffffff)',
                color: 'var(--panel-text, #0f172a)',
                border: '1px solid var(--color-border, rgba(15, 23, 42, 0.12))',
                borderRadius: 12,
                padding: '1rem'
              }}>
                <p style={{ margin: 0, color: 'var(--muted, #445)' }}>Noch keine Fahrzeuge vorhanden.</p>
              </div>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
                {bikes.map((b: any) => (
                  <li key={b.id}>
                    <Link
                      to={`/bikes/${b.id}`}
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
                          <div style={{ fontWeight: 600 }}>{b.brand} {b.model ? `• ${b.model}` : ''}</div>
                          <div style={{ fontSize: '0.9rem', color: 'var(--muted, #445)' }}>
                            {b.color ? `${b.color} ` : ''}{b.year ? `• ${b.year}` : ''}
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
      </section>
    </div>
  )
}

export default ProfilePage
