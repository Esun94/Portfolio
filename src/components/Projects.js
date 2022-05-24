import React from "react";
// import { projects } from '../assets/data'
import { Container, Card, Stack } from "react-bootstrap";
import { projects } from "../assets/data";


function Projects() {
  return (
    <Container className="project-container p-5 my-4" id="projects">
      <Container>
        <h1>Apps I've Built</h1>
        <p>Here are some examples of apps I have built using different technologies !</p>
      </Container>
      <Container >
        {projects.map((project) => (
          <Card className="card-container p-5 my-4">
            <Card.Body className="flex">
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
  )
}

export default Projects;