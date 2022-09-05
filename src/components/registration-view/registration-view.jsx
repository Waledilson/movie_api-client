import React, { useState } from 'react';
import React from 'react';
import { Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(username, password, email, password);
        props.onRegistered(registered);
    };
    return (
        <Container>
            <Row>
                <Col sm={12} md={10} lg={8}>
                    <CardGroup>
                        <Card>
                            <Card.Body>
                                <Card.Header>Please Register</Card.Header>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} required placeholder="enter a username" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="your pass word must be at least 8 characters" />
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
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    );
}