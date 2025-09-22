import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { TextField, PasswordField, Button, Tickbox } from '../../components'
import Footer from '../../components/Footer/Footer'
import './Login.css'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, remember }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.message || 'Login failed')
      }

      const accessToken: string | undefined = data?.access_token
      if (!accessToken) {
        throw new Error('No token received')
      }

      // Token speichern
      localStorage.setItem('auth_token', accessToken)

      // Nutzerinfo speichern
      const apiUser = data?.user && typeof data.user === 'object' ? data.user : null
      const authUser = {
        name: apiUser?.name ?? undefined,
        email: apiUser?.email ?? email,
      }
      localStorage.setItem('auth_user', JSON.stringify(authUser))

      // Andere Tabs + gleicher Tab informieren
      window.dispatchEvent(new Event('ml-auth-changed'))

      // Weiterleitung
      navigate('/profile', { replace: true })
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Login fehlgeschlagen'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="ml-auth-page">
      <main className="ml-auth-main">
        <section className="ml-auth-card" aria-labelledby="login-title">
          <h1 id="login-title" className="ml-auth-title">Login</h1>
          {error && <div className="ml-auth-error" role="alert">{error}</div>}
          <form onSubmit={handleSubmit} className="ml-auth-form">
            <TextField
              label="Email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <PasswordField
              label="Password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Tickbox
              label="Remember me"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <Button type="submit" disabled={loading}>
              {loading ? 'Signing in…' : 'Sign in'}
            </Button>
          </form>
          <p className="ml-auth-alt">
            Don’t have an account? <Link to="/register">Create one</Link>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Login
