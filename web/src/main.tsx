import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeaderComponent from './components/HeaderComponent'
import App from './pages/App/App'
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router'
import LoginComponent from './pages/login/Login.page'
import { router } from './router/main.router'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
