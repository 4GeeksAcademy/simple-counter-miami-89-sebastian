import React from 'react'
import ReactDOM from 'react-dom/client'
import DigitCounter from './components/Home';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DigitCounter/>
  </React.StrictMode>,
)
