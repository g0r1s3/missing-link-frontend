import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages'

// ... existing code ...
function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
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
        </>
    )
}
// ... existing code ...

export default App