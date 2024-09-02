import React from 'react';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/projects';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <Blog />
        </div>
    );
};

export default HomePage;
