import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer>
             <p className="footer-end">Copyright @
            albi - {(new Date()).getFullYear()} All Rights Reserved</p>
        </footer>
    );
};

export default Footer;