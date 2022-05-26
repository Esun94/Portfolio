import React from "react";
import Container from "react-bootstrap/Container";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid"
import { skills } from "../assets/data";

function Skills() {
    return (
        <Container className="skills-main-container mt-auto" id="skills">
            <Container className="skill-tech-body">
                <Container className="skills-section-header">
                    <ChipIcon className='chip-icon' />
                    <h1 className="skills-title">
                        Skills &amp; Technologies
                    </h1>
                    <p className="skills-body">
                        Here is a list of skills and technologies I learned along my coding journey !
                    </p>
                </Container>
                <Container className="row">
                    {skills.map((skill) => (
                        <Container key={skill} className="col-md-2">
                            <Container className="skills-info-container">
                                <BadgeCheckIcon className="badge-icon"/>
                                <span className="">{skill}</span>
                            </Container>
                        </Container>
                    ))}
                </Container>
            </Container>
        </Container>

    )

}

export default Skills;