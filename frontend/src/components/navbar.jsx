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
                    <li><Link to="/tile-polishing">تلميع البلاط</Link></li>
                    <li><Link to="/ceramic-polishing">تلميع السيراميك</Link></li>
                    <li><Link to="/marble-polishing">تلميع الرخام</Link></li>
                    <li><Link to="/porcelain-polishing">تلميع البورسلين</Link></li>
                    <li><Link to="/contact-us">اتصل بنا</Link></li>
                </ul>
            </nav>
            <hr />
        </div>
    );
}