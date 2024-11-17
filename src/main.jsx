import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {router} from './routes/Route.jsx'
import { Toaster } from 'sonner'
import AuthProvider  from './Contexts/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-right" richColors />
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)