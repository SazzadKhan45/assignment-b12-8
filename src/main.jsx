import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import RootLayout from './RootLayout/RootLayout.jsx'
import router from './Routes/Routest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <RootLayout />
    </RouterProvider>
  </StrictMode>,
)
