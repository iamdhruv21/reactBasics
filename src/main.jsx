import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Dhruv from './Dhruv.jsx'
// import BgChanger from './bgChanger.jsx'
// import PasswordGenerator from './passwordGenerator.jsx'
import CurrencyConverter from "./currencyConverter.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrencyConverter/>
  </StrictMode>,
)
