import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';


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
            <Navbar.Brand href={`/`} className="text-warning">
                Martini Shot</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link className="text-primary" href={`/users/${user}`}>Profile</Nav.Link>
                <Nav.Link size="sm" variant="link" className="float-right text-primary" onClick={(handleLogOut)}>Log out</Nav.Link>
            </Nav>
        </Navbar>
    );
}

let mapStateToProps = state => {

    return {
        movies: state.movies,
        user: state.user,

    };
}

export default connect(mapStateToProps)
    (Navbar);