import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages'
import { LoginPage } from './pages' // war: { Login }
import { RegisterPage } from './pages' // neu: Register-Route hinzufügen
import './App.css'


// ... existing code ...
function App() {
    return (
        <div className="ml-app">
            <NavBar />
            <main className="ml-app__main">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} /> {/* war: <Login /> */}
                    <Route path="/register" element={<RegisterPage />} /> {/* neue Register-Route */}
                    <Route
                        path="/demo"
                        element={
                            <div style={{ padding: '6rem 1rem 2rem', maxWidth: 960, margin: '0 auto' }}>
                                <h1 style={{ marginBottom: '0.5rem' }}>Produkt-Demo</h1>
                                <p style={{ color: '#445' }}>
                                    Hier wird die interaktive Demo geladen. Dieser Platzhalter stellt sicher, dass der CTA
                                    auf der Landingpage funktioniert. Du kannst die Route später auf die echte Demo-Komponente zeigen lassen.
                                </p>
                            </div>
                        }
                    />
                </Routes>
            </main>
        </div>
    )
}
// ... existing code ...

export default App