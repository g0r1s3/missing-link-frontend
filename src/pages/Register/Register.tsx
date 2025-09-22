import { useState } from 'react'
import type React from 'react'
import { Link } from 'react-router-dom'

import { TextField, PasswordField, Button, Tickbox } from '../../components'
import Footer from '../../components/Footer/Footer'
import './Register.css'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agree, setAgree] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!agree) {
      alert('Please accept the terms to continue.')
      return
    }
    const trimmedEmail = email.trim()
    if (!trimmedEmail) {
      setError('Bitte E-Mail angeben.')
      return
    }
    if (password.length < 8) {
      setError('Passwort muss mindestens 8 Zeichen lang sein.')
      return
    }
    setError(null)
    setLoading(true)
    try {
      const { registerApi } = await import('../../features/auth/api')
      // Nur die erwarteten Felder senden:
      const res = await registerApi({ email: trimmedEmail, password })
      if (res.token) {
        localStorage.setItem('auth_token', res.token)
        // Falls kein user im Response: E-Mail speichern, Name wenn vorhanden
        const user = res.user ?? { email: trimmedEmail, name: name?.trim() || undefined }
        localStorage.setItem('auth_user', JSON.stringify(user))
        window.dispatchEvent(new Event('ml-auth-changed'))
        window.location.assign('/')
      } else {
        window.location.assign('/login')
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Registrierung fehlgeschlagen'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="ml-auth-page">
      <main className="ml-auth-main">
        <section className="ml-auth-card" aria-labelledby="register-title">
          <h1 id="register-title" className="ml-auth-title">Create account</h1>
          {error && <div className="ml-auth-error">{error}</div>}
          <form onSubmit={handleSubmit} className="ml-auth-form">
            <TextField
              label="Full name"
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
            <TextField
              label="Email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <PasswordField
              label="Password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <Tickbox
              label="I agree to the Terms and Privacy Policy"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <Button type="submit" disabled={loading}>
              {loading ? 'Creating…' : 'Create account'}
            </Button>
          </form>
          <p className="ml-auth-alt">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
