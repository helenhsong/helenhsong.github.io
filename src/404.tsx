import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@helenhsong/ui/style.css'
import './index.css'
import { NotFound } from './components/NotFound'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotFound />
  </StrictMode>,
)
