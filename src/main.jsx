// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/theme.css' // global variables
import './index.css'        // your existing global styles

ReactDOM.createRoot(document.getElementById('root')).render(<App />)