import React from 'react';
import './Header.css'
import admin from '../../../images/user-header.jpg'
import Typewriter from 'typewriter-effect'
const Header = () => {
    return (
        <section className="header">
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
                    <span style={{color:"red",fontFamily:"Righteous"}}>A</span>
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
                <div>
                <h1 className="typewriter">
                        <Typewriter
                          options={{
                            strings: ['Web Developer', 'Js Developer ','React Developer.'],
                            autoStart: true,
                            loop: true,
                          }}
                    />

                </h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, rem eveniet. Ea mollitia, ipsa cupiditate nobis laudantium ut sed quidem praesentium distinctio! Soluta expedita assumenda qui maxime officiis enim earum neque suscipit veritatis perspiciatis dicta perferendis, fuga ullam, ratione aspernatur nemo quisquam nam atque magni? Laudantium iure repellat maxime asperiores?</p>
                
                <a href ="mailto:albi.ummid@gmail.com">
                <button className="main-btn">
                Get In Touch
               </button>
            </a>
            </div>
            <div className="header-img">
                <img src={admin} alt=""/>
               
            </div>
            
            
        </section>
    );
};

export default Header;