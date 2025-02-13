import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ExpenseContextProvider from './context/ExpenseContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExpenseContextProvider>
      <App />
    </ExpenseContextProvider>
  </StrictMode>,
)
