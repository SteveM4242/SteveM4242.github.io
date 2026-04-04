import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EasterMama from "./pages/easter/EasterMama.jsx";
import EasterPapa from "./pages/easter/EasterPapa.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/easter">
          <Route path="mama/:id" element={<EasterMama />} />
          <Route path="papa/:id" element={<EasterPapa />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
)