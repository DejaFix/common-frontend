import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import { App } from './App'
import { ToastProvider } from '../src'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </StrictMode>,
)
