import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// const ele1 = <div>
//     <h1 >Dikshit Nath</h1>
//     <h2>INT-252: ReactJS</h2>
// </div>

// createRoot(document.getElementById('root')).render(ele1)

