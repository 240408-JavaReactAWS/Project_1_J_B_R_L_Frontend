import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
            <ul>
                <li><Link to="register">UseContext</Link></li>
            </ul>
        </nav>
  )
}

export default Nav