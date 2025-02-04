import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hook_1 from './components/Hook_1'
import Hook_2 from './components/Hook_2.jsx'
import Hook_3 from './components/Hook_3.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    < Hook_1 />

    <Hook_2 />
    < Hook_3 />
  </StrictMode>,
)
