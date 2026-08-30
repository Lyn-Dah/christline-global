import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ChristlineLandingPage from './ChristlineLandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChristlineLandingPage />
  </StrictMode>,
)
