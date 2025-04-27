import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css' // Import the CSS file for styling

export default function Navbar() {
    return (
        <div className='background'>
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/">Marble Polishing</Link>
                </div>
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Tile Polishing</Link></li>
                    <li><Link to="/about">Ceramic Polishing</Link></li>
                    <li><Link to="/about">Marble Polishing</Link></li>
                    <li><Link to="/about">Procelain Polishing</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
                <hr />
        </div>
            
    )
}
