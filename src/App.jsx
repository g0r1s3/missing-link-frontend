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
            </Routes>
        </>
    )
}
// ... existing code ...

export default App