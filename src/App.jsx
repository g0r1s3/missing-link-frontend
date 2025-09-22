import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import {
  LandingPage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  BikeDetailPage,
  BikeFormPage,
  MaintenanceDetailPage,
} from './pages'

import './App.css'


// Simple Auth-Guard basierend auf vorhandenen Token in localStorage
function RequireAuth({ children }) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null
    if (!token) return <Navigate to="/login" replace />
    return children
}

function App() {
    return (
      <div className="ml-app">
        <NavBar />
        <main className="ml-app-main">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} /> {/* war: <Login /> */}
            <Route path="/register" element={<RegisterPage />} /> {/* neue Register-Route */}
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <ProfilePage />
                </RequireAuth>
              }
            />
            <Route
              path="/bikes/new"
              element={
                <RequireAuth>
                  <BikeFormPage />
                </RequireAuth>
              }
            />
            <Route
              path="/bikes/:id"
              element={
                <RequireAuth>
                  <BikeDetailPage />
                </RequireAuth>
              }
            />
            <Route
              path="/maintenances/:id"
              element={
                <RequireAuth>
                  <MaintenanceDetailPage />
                </RequireAuth>
              }
            />
            <Route
              path="/demo"
              element={
                <div className="demo">
                  <h1 className="demo-title">Produkt-Demo</h1>
                  <p className="demo-lead">
                    Hier wird die interaktive Demo geladen. Dieser Platzhalter stellt sicher, dass
                    der CTA auf der Landingpage funktioniert. Du kannst die Route später auf die
                    echte Demo-Komponente zeigen lassen.
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