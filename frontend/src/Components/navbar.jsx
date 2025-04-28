import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file for styling

export default function Navbar() {
    return (
        <div className='background'>
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/">تلميع الرخام</Link>
                </div>
                <ul className="navbar-links">
                    <li><Link to="/">الرئيسية</Link></li>
                    <li><Link to="/services">تلميع البلاط</Link></li>
                    <li><Link to="/about">تلميع السيراميك</Link></li>
                    <li><Link to="/about">تلميع الرخام</Link></li>
                    <li><Link to="/about">تلميع البورسلين</Link></li>
                    <li><Link to="/contact">اتصل بنا</Link></li>
                </ul>
            </nav>
            <hr />
        </div>
    );
}