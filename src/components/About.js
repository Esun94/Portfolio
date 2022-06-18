import React from "react";
import Container from "react-bootstrap/Container";

function About() {
    return (
        <Container className="about-me" id="about">
            <h1 className="about-me-greeting"> Hello, I'm Eric !</h1>
            <p className="about-me-body">Aspiring software engineer, lover of all things tech, I have a facination with AI, Machine Learning, and Automation.</p>
            <Container className="tail">
            </Container>
        </Container>
    )

}

export default About;