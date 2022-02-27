import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import { Button, TextField } from "@mui/material";


function App() {
  return (
  <div className="App">
   <Navbar />
   <About />
   <Projects />
   <Skills />
   <Contact />
  </div>
    
  );
}

export default App;
