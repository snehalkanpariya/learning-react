import React from 'react'
import { createRoot } from 'react-dom/client' // 👈 Crucial! This is the tool that renders your app
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
