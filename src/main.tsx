import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './styles/globals.css'
import './i18n/config'

ReactDOM.createRoot(document.getElementById('ipulse-widget') as HTMLElement).render(<App />)
