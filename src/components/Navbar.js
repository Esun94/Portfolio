import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";



function Navigation() {
    return (
        <Container>
            <Navbar className="sticky-top" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="d-flex flex-row-reverse">
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </Container>
    )

}

export default Navigation