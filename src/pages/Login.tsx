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

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: call your auth API
        console.log({ email, password, remember })
    }

    return (
        <div className="ml-auth-page">
            <main className="ml-auth-main">
                <section className="ml-auth-card" aria-labelledby="login-title">
                    <h1 id="login-title" className="ml-auth-title">Login</h1>
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
                        <Button type="submit">Sign in</Button>
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