import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const AppNavBar = () => {
    return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">CRUD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                            <Nav.Link href="#link">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

console.log("=============>>>>>>>>>>>>>>>",AppNavBar)
// export default AppNavBar;
