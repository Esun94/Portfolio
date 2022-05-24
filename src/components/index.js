import React from 'react';
import Navigation from './Navbar';
import About from "./About";
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
  return (
    <div className='component-container'>
        <Navigation />
        <About />
        <Projects />
        <Skills />
        <Contact />
    </div>
  )
}

export default Home