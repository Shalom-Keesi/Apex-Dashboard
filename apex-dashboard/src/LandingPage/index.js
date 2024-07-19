import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function LandingPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='landingPage'>
            <div className='background-image'></div>
            <div className='navigation'>
            <img src='/Images/logo.png' alt='' className='logo'></img>
            

                <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                
                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {/* <ul>
                        <li><b>Home</b></li>
                        <li>Our Products</li>
                        <li>About Us</li>
                        <li>Our Team</li>
                        <li>Contact</li>
                    </ul> */}
                </nav>
            </div>

            <div className='landing-page-texts'>
                <p>ELEVATE YOUR TEACHING, <br /> ELEVATE THEIR POTENTIAL</p>
            </div>

            <div className='explore-button'>
                {/* <button>EXPLORE</button> */}
                <button><Link to="/Overview" className='button-link'>EXPLORE</Link></button>
            </div>
        </div>
    )
}

export default LandingPage;