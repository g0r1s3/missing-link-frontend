// pages/ProfilePage.tsx
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components'
import BikeListItem, { type Bike } from '../../components/BikeListItem'
import { getMyBikes } from '../../features/bikes/api'
import './ProfilePage.css'

const ProfilePage: React.FC = () => {
  const [bikes, setBikes] = React.useState<Bike[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string | null>(null)
  const navigate = useNavigate()

  React.useEffect(() => {
    let alive = true
    ;(async () => {
      setLoading(true)
      try {
        const data = await getMyBikes()
        if (!alive) return
        setBikes(Array.isArray(data) ? (data as Bike[]) : [])
        setError(null)
      } catch (e: unknown) {
        if (!alive) return
        const msg = (e as { message?: string })?.message || 'Fehler beim Laden der Fahrzeuge'
        setError(msg)
      }
      // kein "return" im finally → vermeidet no-unsafe-finally
      if (alive) setLoading(false)
    })()
    return () => {
      alive = false
    }
  }, [])

  return (
    <div className="ml-profile">
      {/* ... bestehender Profil-Inhalt ... */}

      <section className="ml-section">
        <header className="ml-section-header">
          <h2 className="ml-section-title">Meine Fahrzeuge</h2>
          <Button
            variant="primary"
            className="ml-addlink"
            aria-label="Neues Fahrzeug hinzufügen"
            onClick={() => navigate('/bikes/new')}
          >
            Fahrzeug hinzufügen
          </Button>
        </header>

        {loading && <p className="ml-text-muted">Lade Fahrzeuge…</p>}
        {error && <p className="ml-text-error">{error}</p>}

        {!loading && !error && (
          <>
            {bikes.length === 0 ? (
              <div className="ml-empty">
                <p className="ml-empty-text">Noch keine Fahrzeuge vorhanden.</p>
              </div>
            ) : (
              <ul className="ml-list">
                {bikes.map((b) => (
                  <li key={String(b.id)}>
                    <BikeListItem bike={b} />
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
