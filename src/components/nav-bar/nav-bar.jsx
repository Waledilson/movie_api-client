import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default Navbar = () => {
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="">Martini Shot</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Movie List</Nav.Link>
                    <Nav.Link href="#features">Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}