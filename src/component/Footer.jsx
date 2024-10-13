import React from 'react';
import logo from '../assets/logo_black.png';

function Footer() {
    return (
        <>
            <footer className='footerSection section sectionPaddingTop'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="menuLink">
                    <div className="menu">
                        <h5 className="title">Menu</h5>
                        <a className="link">Home</a>
                        <a className="link">Who We Are</a>
                        <a className="link">What We Do</a>
                        <a className="link">News</a>
                        <a className="link">Contact Us</a>
                    </div>
                    <div className="menu">
                        <h5 className="title">Services</h5>
                        <a className="link">Petro-chemicals</a>
                        <a className="link">Minerals</a>
                        <a className="link">Fertilizers</a>
                        <a className="link">Metals</a>
                    </div>
                </div>
                <div className="menuLink">
                    <p className="address">
                        Dubai UAE <br />
                        2904, 29th Flr, Burj Al Salam,<br />
                        Trade Center 1, #2 Shk. Zayed Rd. <br />
                        P.O.Box 43947
                    </p>

                    <div className="menu">
                        <h5 className="title" style={{ 'marginBottom': '.5rem' }}>Phone</h5>
                        <a className="link">+9714 329847</a>
                    </div>
                    <div className="menu">
                        <h5 className="title" style={{ 'marginBottom': '.5rem' }}>Email</h5>
                        <a className="link">info@wst-me.com</a>
                    </div>
                    <div className="menu">
                        <h5 className="title" style={{ 'marginBottom': '.5rem' }}>Fax</h5>
                        <a className="link">info@wst-me.com</a>
                    </div>
                </div>
            </footer>

            <div className="bottomSection section">
                <div className="bottom">
                    <p>© 2024   WONDER STAR Trading LLC® </p>
                    <a>Privacy Policy</a>
                </div>
            </div>
        </>
    )
}

export default Footer
