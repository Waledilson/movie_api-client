import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(username, password);
        props.onRegistered(registered);
    };
    return (
        <Form>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} required placeholder="enter a username" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="enter a password" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" value={email} onChange={e => setEmail(e.target.value)} required placeholder="enter your email" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Birthday:</Form.Label>
                <Form.Control type="date" value={birthday} onChange={e => setBirthday(e.target.value)} required placeholder="enter your date of birth" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleRegistration}>Register</Button>
        </Form >
    );
}

RegistrationView.propTypes = {
    resgistered: PropTypes.exact({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
    }).isRequired

}

/*RegistrationView.propTypes = {
    resgistered: PropTypes.exact({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        Birthday: PropTypes.number.isRequired
    }).isRequired

}
*/