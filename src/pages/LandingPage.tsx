// import React from 'react'
import Footer from '../components/Footer/Footer'

export default function LandingPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100vw', alignSelf: 'stretch' }}>
            <main style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem 1rem 2rem', flex: 1 }}>
                <h1>Welcome to Missing-Link</h1>
                <p>Your landing content goes here.</p>
            </main>
            <Footer />
        </div>
    )
}