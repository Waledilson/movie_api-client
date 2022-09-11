import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import './login-view.scss';

export function LoginView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        /* Send a request to the server for authentication */
        axios.post('https://intense-shore-03094.herokuapp.com/login', {
            Username: username,
            Password: password,
        })
            .then(response => {
                const data = response.data;
                props.onLoggedIn(data);
            })
            .catch(e => {
                console.log('no such user')
            });
    };

    return (
        <Form className="bg-dark text-white">
            <Form.Group controlId="formUsername">
                <Form.Label className="text-warning">Username:</Form.Label>
                <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label className="text-warning">Password:</Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
}
LoginView.propTypes = {
    user: PropTypes.shape({
        Username: PropTypes.string,
        Password: PropTypes.string
    }),
    onLoggedIn: PropTypes.func.isRequired
}
