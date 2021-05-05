import React, { useEffect, useState } from 'react';
import {NavHashLink as NavLink} from 'react-router-hash-link'
import './Navbar.css'
import Logo from '../../Logo/Logo';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }
    const [scrolled,setScrolled]=React.useState(false);
const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
let navbarClasses=['navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }
   
    return (
        <>
            <nav className={scrolled? "navbar scrolled" : "navbar"}>
                <NavLink smooth to="/" className="logo-div"><span><Logo /></span><span>Albi Ummid Tanvir</span> </NavLink>

                 <div className="menu-icon" onClick={handleClick}>
                    {
                        click ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>
                    }
                </div>
                <ul onClick={closeMobileMenu} className={click ? 'nav-links active' : 'nav-links'}>
                    <li  className="nav-item">
                        <NavLink className="nav-link" activeClassName="nav-link-active" smooth to="/#about">1. About Me </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink smooth className="nav-link" activeClassName="nav-link-active" to="#services">2. Services </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="nav-link-active" smooth to="#project">3. Projects </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"activeClassName="nav-link-active"  smooth to="#contact">4. Get In Touch </NavLink>
                    </li>
                    <li className="nav-item">
                    <a className="resume-link" href="https://drive.google.com/file/d/1qvSCGTt4FP6iZj7VphOcQOL7WIyu-lke/view?usp=sharing" target="_blank" rel="noreferrer">
                    <button className="main-btn navB">
                 Resume
               </button>
                </a>
                    </li>
                   
                </ul>
            </nav>
        </>
    );
};

export default Navbar;