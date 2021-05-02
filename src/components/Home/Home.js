import React from 'react';
import ParticleBackground from '../Particle/ParticleBackground';
import About from './About/About';
import Header from './Header/Header';
import './Home.css'
import Services from './Services/Services';
const Home = () => {
    return (
        <>
            <Header />
            <About />
            <Services/>
        </>
    );
};

export default Home;