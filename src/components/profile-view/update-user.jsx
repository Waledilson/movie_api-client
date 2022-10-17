import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';


export default UpdateUser = (user) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        console.log('user', user.user)
        console.log('token', user.token)
        axios.put(`https://intense-shore-03094.herokuapp.com/users/${user}`, {
            headers: { Authorization: `Bearer ${token}` },
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        })
            .then(response => {
                const data = response.data;
                console.log(data);
            })
            .catch((e) => {
                console.log('error updating your info')
            });
    };

    const delUser = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        axios.delete(`https://intense-shore-03094.herokuapp.com/users/${user.user}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                console.log('User profile deleted', res)
                localStorage.clear();
                window.open('/');
            })
            .catch((error) => {
                console.log(error + 'error deleting user')
            });
    };

    return (
        <Form className='profile-form bg-dark text-warning' onSubmit={(e) => handleUpdate(e)}>
            <h4>Want to change some info??</h4>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control type='text' name='Username' defaultValue={username} onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control type='password' name='password' defaultValue={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' name='email' defaultValue={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Birthday</Form.Label>
                <Form.Control type='date' name='birthday' defaultValue={birthday} onChange={e => setBirthday(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Button variant='primary' type='submit' >Update</Button>
                <Button variant='primary' type='submit' onClick={(e) => delUser(e)}>Delete Profile</Button>
            </Form.Group>





        </Form>
    )
};


