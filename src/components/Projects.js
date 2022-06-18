import React from "react";
import { Container, Card } from "react-bootstrap";
import { projects } from "../assets/data";
import 'bootstrap/dist/css/bootstrap.min.css';


function Projects() {
  return (
    <Container className="main-project-container " id="projects">
      <Container className="project-section-header text-center ">
        <h1>Apps I've Built</h1>
        <p>Here are some examples of apps I have built using different technologies !</p>
      </Container>
      <Container className="projects-card-container">
        {projects.map((project) => (
          <Card.Body className="project-container" col-md-3 mx-1 my-2>
            <Card.Img className="mb-3" src={project.image}></Card.Img>
            <Card.Title className="text-center mb-4">{project.title}</Card.Title>
            <Card.Subtitle className="text-center mt-3">{project.subtitle}</Card.Subtitle>
            <Card.Text className="text-center mt-4">
              {project.description}
            </Card.Text>
            <Card.Link href={project.link}>Link</Card.Link>
            <Card.Link href={project.github}>Github</Card.Link>
          </Card.Body>
        ))}
      </Container>
    </Container>
  )
}

export default Projects;