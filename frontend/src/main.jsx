import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserProvider } from './contexts/UserContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { App } from './App'
import { Home } from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>,
)
