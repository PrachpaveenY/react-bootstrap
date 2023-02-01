import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default function NavBar() {
  return (
    <nav>
      <a className='navbar-expand-sm dark'>
        <img src='' height='30' alt=''/>
      </a>
      <span className='navbar-brand text-info'>React.js</span>
      <ul>
        <li></li>
      </ul>
    </nav>
  )
}