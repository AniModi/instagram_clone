import React from 'react';
import "./navbar.css"
import Logo from "./../images/logo-ig-png-32469.png";

const Navbar = () => {
    return(
        <>
        <nav id="navbar">
            <div id="nav-logo">
            <img src={Logo} alt="instagram" id="instagram_logo"></img>
            </div>
            <div id="links"></div>
        </nav>
        </>
    );
}

export default Navbar;