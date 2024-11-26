import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Example from './Components/Header'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Example />
  </StrictMode>,
)
