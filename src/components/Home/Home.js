import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import './Home.css'
import Projects from './Projects/Projects';
import Services from './Services/Services';
const Home = ({element}) => {
    return (
        <div id="home">
            <Header />
            <About />
            <Services />
            <Projects />
            <Contact/>
        </div>
    );
};

export default Home;