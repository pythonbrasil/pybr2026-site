import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import "./i18n";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Site-PythonBrasil2026">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
