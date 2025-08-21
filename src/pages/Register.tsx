import { useState } from 'react'
import { TextField, PasswordField, Button, Tickbox } from '../components'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [agree, setAgree] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!agree) {
            alert('Please accept the terms to continue.')
            return
        }
        // TODO: call your registration API
        console.log({ name, email, password, agree })
    }

    return (
        <div style={{ maxWidth: 480, margin: '2rem auto' }}>
            <h1 style={{ marginBottom: '1rem' }}>Create account</h1>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.75rem' }}>
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
                <Button type="submit">Create account</Button>
            </form>
            <p style={{ marginTop: '0.75rem' }}>
                Already have an account?{' '}
                <Link to="/login">Sign in</Link>
            </p>
        </div>
    )
}