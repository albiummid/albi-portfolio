import React from 'react';
import About from './About/About';
import Header from './Header/Header';
import './Home.css'
import Projects from './Projects/Projects';
import Services from './Services/Services';
const Home = () => {
    return (
        <>
            <Header />
            <About />
            <Services />
            <Projects/>
        </>
    );
};

export default Home;