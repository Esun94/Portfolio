import React from "react";
import Container from "react-bootstrap/Container";
import Project from "../data";

function Projects() {
  return (
    <Container className="p-5 bg-light my-4" id="projects">
     <Project 
      title="Job Search" 
      description="Some quick example text to build on the card title and make up the bulk of
                    the card's content."
      link="https://github.com/Esun94/Job_Portal"
     />
     <Project 
      title="Employee Track SQL" 
      description="Some quick example text to build on the card title and make up the bulk of
                    the card's content."
      link="https://github.com/Esun94/SQL_Employee_Tracker"
     />
     <Project 
      title="Project 3" 
      description="Some quick example text to build on the card title and make up the bulk of
                    the card's content."
      link="https://www.reddit.com/"
     />
    </Container>
  )

}

export default Projects;