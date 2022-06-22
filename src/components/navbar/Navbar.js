import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import './navbar.css';


function Navigation() {
    return (
        <Navbar sticky="top" className="nav-bar" variant='dark'>
            <Container className="nav-text">
                <Navbar.Brand 
                className='name'
                href="#home">Eric Sun</Navbar.Brand>
                <Nav className="nav-links">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )

}

export default Navigation