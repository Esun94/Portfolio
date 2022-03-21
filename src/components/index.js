import React from 'react';
import Navigation from './Navbar';
import About from "./About";
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
  return (
    <>
        <Navigation />
        <About />
        <Projects />
        <Skills />
        <Contact />
    </>
  )
}

export default Home