import React from "react";
import { Container, Card } from "react-bootstrap";
import { projects } from "../assets/data";
import 'bootstrap/dist/css/bootstrap.min.css';


function Projects() {
  return (
    <Container className="main-project-container ">
      <Container className="project-section-header text-center ">
        <h1>Apps I've Built</h1>
        <p>Here are some examples of apps I have built using different technologies !</p>
      </Container>
      <Container className="card-container row">
        {projects.map((project) => (
          <Container className="col flex flex-wrap d-flex justify-content-between">
          <Card className=" card-body-container  ">
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
          </Container>
        ))}
      </Container>
    </Container>
  )
}

export default Projects;