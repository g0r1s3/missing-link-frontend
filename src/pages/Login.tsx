import { useState } from 'react'
import { TextField, PasswordField, Button, Tickbox } from '../components'
import { Link } from 'react-router-dom'

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
        <div style={{ maxWidth: 420, margin: '2rem auto' }}>
            <h1 style={{ marginBottom: '1rem' }}>Login</h1>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.75rem' }}>
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
            <p style={{ marginTop: '0.75rem' }}>
                Don’t have an account?{' '}
                <Link to="/register">Create one</Link>
            </p>
        </div>
    )
}