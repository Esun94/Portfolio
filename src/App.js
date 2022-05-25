
import React from "react";
import Navigation from './components/Navbar';
import About from "./components/About";
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
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