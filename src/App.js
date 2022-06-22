
import React from "react";
import Navigation from './components/navbar/Navbar';
import About from "./components/about/About";
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Navigation />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;