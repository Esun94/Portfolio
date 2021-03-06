import React from "react";
import Container from "react-bootstrap/Container";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid"
import { skills } from "../../assets/data";
import './skills.css';


function Skills() {
    return (
        <Container className="skills-main-container" id="skills">
                <Container className="skills-header">
                    <ChipIcon className='chip-icon' />
                    <h1 className="skills-title">
                        Skills &amp; Technologies
                    </h1>
                    <p className="skills-body">
                        Here is a list of skills and technologies I learned along my coding journey !
                    </p>
                </Container>
                <Container className="skills-icon-container">
                    {skills.map((skill) => (
                        <Container key={skill} className="skills-badge-container">
                            <BadgeCheckIcon className="badge-icon" />
                            <span className="skill">{skill}</span>
                        </Container>
                    ))}
                </Container>
                <Container className="skills-tail">
                </Container>
        </Container>

    )

}

export default Skills;