import React from 'react';
import './Header.css'
import admin from '../../../images/user-header.jpg'
import Typewriter from 'typewriter-effect'
import Fade from 'react-reveal/Fade';
import ParticleBackground from '../../Particle/ParticleBackground';
import RubberBand from 'react-reveal/RubberBand';

const Header = () => {
    return (
        <ParticleBackground>
            <section id="home" className="header">
            <Fade left>
            <div className='intro'>
                <h1 className="intro-line">
                    <span>H</span>
                    <span>i</span>
                    <span>,</span>
                </h1>
                <h1 className="intro-line">
                    <span>I</span>
                    <span>'</span>
                    <span>m</span>
                    <b> </b>
                    <span style={{ color: "red", fontFamily: "Righteous" }}>A</span>
                    <span>l</span>
                    <span>b</span>
                    <span>i</span>
                    <span>,</span>
                </h1>
                <h1 className="intro-line">
                    <span>B</span>
                    <span>u</span>
                    <span>i</span>
                    <span>l</span>
                    <span>d</span>
                    <b> </b>
                    <span>t</span>
                    <span>h</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>
                    <span>s</span>
                    <b> </b>
                    <span>f</span>
                    <span>o</span>
                    <span>r</span>
                    <b> </b>
                    <span>t</span>
                    <span>h</span>
                    <span>e</span>
                    <b> </b>
                    <span>W</span>
                    <span>e</span>
                    <span>b</span>
                </h1>
                    <h1 className="typewriter">
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'Js Developer ', 'React Developer.'],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                            </h1>
                            <div className="social-links">
                            <a href="https://linkedin.com/in/albiummid" target="_blank" rel="noreferrer" >
                            <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/albiummid" target="_blank" rel="noreferrer" >
                    <i class="fab fa-github"></i>
                    </a>
                    <a href="mailto:albiummid@gmail.com" target="_blank" rel="noreferrer" >
                    <i class="far fa-envelope"></i>
                    </a>
                        </div>
    
                <a className="resume-link" href="https://drive.google.com/file/d/1qvSCGTt4FP6iZj7VphOcQOL7WIyu-lke/view?usp=sharing" target="_blank" rel="noreferrer">
                    <button className="main-btn">
                 Resume
               </button>
                </a>
            </div>
           </Fade>
            <Fade top>
            <div className="header-img">
                <img src={admin} alt="" />
            </div>
            </Fade>


        </section>
        </ParticleBackground>
    );
};

export default Header;