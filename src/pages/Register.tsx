import { useState } from 'react'
import { TextField, PasswordField, Button, Tickbox } from '../components'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import './Register.css'

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
        <div className="ml-auth-page">
            <main className="ml-auth-main">
                <section className="ml-auth-card" aria-labelledby="register-title">
                    <h1 id="register-title" className="ml-auth-title">Create account</h1>
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
                        <Button type="submit">Create account</Button>
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