import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
            <ul>
                <li><Link to="register">Register</Link></li>
                <li><Link to="movies">All Movies</Link></li>
            </ul>
        </nav>
  )
}

export default Nav