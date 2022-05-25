import React from "react";
// import { projects } from '../assets/data'
import { Container, Card, Stack } from "react-bootstrap";
import { projects } from "../assets/data";


function Projects() {
  return (
    <Container className="main-project-container p-5 my-4" id="projects">
      <Container>
        <Container className="project-section-header">
          <h1>Apps I've Built</h1>
          <p>Here are some examples of apps I have built using different technologies !</p>
        </Container>
        <Container className="card-container">
          {projects.map((project) => (
            <Card className=" card-body-container p-5 my-4">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Img src={project.image}></Card.Img>
                <Card.Subtitle>{project.subtitle}</Card.Subtitle>
                <Card.Text>
                  {project.description}
                </Card.Text>
                <Card.Link href={project.link}>Link</Card.Link>
                <Card.Link href={project.github}>Github</Card.Link>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </Container>
    </Container>
  )
}

export default Projects;