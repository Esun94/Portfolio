import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";



function Navigation() {
    return (
        <Navbar sticky="top" className="nav-bar py-3" variant='light'>
            <Container>
                <Navbar.Brand href="#home">Eric Sun</Navbar.Brand>
                <Nav className="d-flex flex-row-reverse">
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )

}

export default Navigation