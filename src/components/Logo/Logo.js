import React from 'react';
import logo from '../../images/a-logo.svg'
import './Logo.css'
const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
    );
};

export default Logo;