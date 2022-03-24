import React from "react";
import Container from "react-bootstrap/Container";
import Project from "../data";
import Card from "react-bootstrap/Card"
function Projects() {
  return (
    <Container className="p-5 bg-light my-4" id="projects">
     <Project who="Eric"/>
     {/* <Card who="Eric"/> */}
       
     
    </Container>
  )

}

export default Projects;