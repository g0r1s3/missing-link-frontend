import { useState } from 'react'
import { TextField, PasswordField, Button, Tickbox } from '../components'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import './Login.css'

// ... existing code ...
export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    // ... existing code ...
    const handleSubmit = async (e) => {
        e.preventDefault()
        const trimmedEmail = (email || '').trim() // <-- hier definieren
        if (!trimmedEmail) {
            setError('Bitte E‑Mail angeben.')
            return
        }
        if ((password || '').length < 8) {
            setError('Passwort muss mindestens 8 Zeichen lang sein.')
            return
        }
        setError(null)
        setLoading(true)
        try {
            const { loginApi } = await import('../features/auth/api')
            const res = await loginApi({ email: trimmedEmail, password })
            localStorage.setItem('auth_token', res.token)
            const user = res.user ?? { email: trimmedEmail }
            localStorage.setItem('auth_user', JSON.stringify(user))
            window.dispatchEvent(new Event('ml-auth-changed'))
            window.location.assign('/') // oder useNavigate('/')
        } catch (err: any) {
            setError(err?.message ?? 'Login fehlgeschlagen')
        } finally {
            setLoading(false)
        }
    }
    // ... existing code ...
    return (
        <div className="ml-auth-page">
            <main className="ml-auth-main">
                <section className="ml-auth-card" aria-labelledby="login-title">
                    <h1 id="login-title" className="ml-auth-title">Login</h1>
                    {error && <div style={{ color: 'crimson', marginBottom: '0.5rem' }}>{error}</div>}
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
                        <Button type="submit" disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</Button>
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