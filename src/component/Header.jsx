import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 80) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener('scroll', changeColor);

    const closeMenu = () => setClick(false);

    return (
        <>
            <header className={color ? 'header header-bg' : 'header'}>
                <nav className="navbar">
                    <a href="/" className="logo">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className="hamburger" onClick={handleClick}>
                        {click ? (
                            <i class="bi bi-x"></i>
                        ) : (
                            <i class="bi bi-list"></i>
                        )}
                    </div>
                </nav>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link  onClick={closeMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  onClick={closeMenu}>
                            WHO WE ARE
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  onClick={closeMenu}>
                            WHAT WE DO
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  onClick={closeMenu}>
                            NEWS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  onClick={closeMenu}>
                            CONTACT US
                            </Link>
                        </li>
                    </ul>
            </header>
        </>
    );
}

export default Header;
