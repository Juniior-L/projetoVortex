import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import AuthProvider from './componentes/context/auth.jsx'
import DataProvider from './componentes/context/DATA.JSX'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
