import React from "react";
import { Container, Card } from "react-bootstrap";
import { projects } from "../../assets/data";
import 'bootstrap/dist/css/bootstrap.min.css';
import './projects.css'

function Projects() {
  return (
    <Container className="main-project-container " id="projects">
      <Container className="project-section-header">
        <h1 className="projects-intro">Apps I've Built</h1>
        <p className="projects-desc">Here are some examples of apps I have built using different technologies !</p>
      </Container>
      <Container className="projects-card-container">
        {projects.map((project) => (
          <Card.Body className="project-container" >
            <Card.Img className="mb-3" src={project.image}></Card.Img>
            <Card.Title className="text-center mb-4">{project.title}</Card.Title>
            <Card.Subtitle className="text-center mt-3">{project.subtitle}</Card.Subtitle>
            <Card.Text className="text-center mt-4">
              {project.description}
            </Card.Text>
            <Card.Link  className="m-0" href={project.link}>Link</Card.Link>
            <Card.Link className="m-0" href={project.github}>Github</Card.Link>
          </Card.Body>
        ))}
      </Container>
      {/* <Container className="projects-tail">
      </Container>  */}
    </Container>
  )
}

export default Projects;