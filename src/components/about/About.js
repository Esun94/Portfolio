import React from "react";
import Container from "react-bootstrap/Container";

import './about.css'

function About() {
    return (
        <>
        <div className=" bg-image" id="about">
        </div>
            <Container className="about-me">
                <h1 className="about-me-greeting"> Hello, I'm Eric !</h1>
                <p className="about-me-body">Aspiring Full-Stack Web Developer, constantly eager to learn and level up my skills! Take a look below at some of my work and skills I have aquired through-out my coding journey!</p>

            </Container>
            <Container className="tail">
            </Container>
        </>
    )

}

export default About;