import React from 'react';
import './About.css'
import Fade from 'react-reveal/Fade';
import aboutImg from '../../../images/about-img.jpg'
const About = () => {
    return (
        <section className="section-container">
            <div className="section-header">
            <h2><span>1.</span> About Me</h2>
            </div>
            <div className="article-container">
                <Fade left>
                <article>
                <p>
                    Hello!
                    My name is <span style={{color:"#64ffda"}}>Albi Ummid Tanvir</span> and I enjoy to creating webpages that can be live on internet.My interest in web development started back in 2020 when i decided to create my own portfolio .Thats bring me to this positon.
                </p>
                <p>
                    Fast-forwarding to that day, I am a <span style={{color:"#64ffda"}}>Fron-end web developer</span> ,can make fancy,responsive ,user friendly attractive website by using Modern HTML5,CSS3,JS,React.js etc.
                </p>

                <p>
                    Here are a few technologies that I am working with recently:
                     
                </p>
                
                <div className="skill-section">
                    <h3>  <i style={{color:"#64ffda"}} className="fas fa-angle-double-right"></i> <i className="fab fa-js" style={{color:"yellow"}}></i> JavaScript (ES6)</h3>
                    <h3>  <i style={{color:"#64ffda"}} className="fas fa-angle-double-right"></i> <i className="fab fa-react" style={{color:"cyan"}}></i> React Js</h3>
                    <h3 > <i  style={{color:"#64ffda"}} className="fas fa-angle-double-right"></i> <i className="fab fa-bootstrap" style={{color:"blue"}}></i> Bootstrap</h3>
                    <h3> <i style={{color:"#64ffda"}} className="fas fa-angle-double-right"></i> <i className="fab fa-node" style={{color:"green"}}></i> Node Js</h3>
                    <h3> <i style={{color:"#64ffda"}}  className="fas fa-angle-double-right"></i> <i className="fas fa-file-excel" style={{color:"yellow"}}></i> Express js</h3>
                    <h3> <i style={{color:"#64ffda"}} className="fas fa-angle-double-right"></i> <i className="fab fa-envira" style={{color:"green"}}></i> MongoDB</h3>
                    
                </div>
                </article>
            </Fade>
                <Fade top>
                <div className="about-img">
                    <img src={aboutImg} alt=""/>
                </div>
                </Fade>
            </div>
        </section>
    );
};

export default About;