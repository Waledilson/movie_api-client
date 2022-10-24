import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Button } from 'react-bootstrap';


export function Navbar(props) {
    const { user } = props;

    handleLogOut = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.open(`/`, '_self');
        onLoggedOut(user);
    };


    return (

        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Navbar.Brand href={`/`} className="text-warning float-left">Martini Shot</Navbar.Brand>
                    <Nav.Link className="text-primary" href={`/users/${user}`}>Profile</Nav.Link>
                    <Nav.Link size="sm" variant="link" className="float-right text-primary" onClick={(handleLogOut)}>Log out</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}