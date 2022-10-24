import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';


export default UpdateUser = (props) => {
    const { user } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');


    const handleUpdate = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const Username = localStorage.getItem('user')
        axios.put(`https://intense-shore-03094.herokuapp.com/users/${Username}`, {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        },
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )
            .then(response => {
                localStorage.setItem('user', response.data.Username);
                const data = response.data;
                console.log('data', data);
                window.open(`/users/${Username}`, '_self');


            })
            .catch((e) => {
                console.log('error updating your info')
            });

    };

    const delUser = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
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
        <Form className='profile-form bg-dark text-warning' >
            <h4>Want to change some info??</h4>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control size="sm" type='text' name='Username' placeholder="Username" defaultValue={username} onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control size="sm" type='password' name='password' placeholder="password" defaultValue={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control size="sm" type='email' name='email' placeholder="email" defaultValue={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Birthday</Form.Label>
                <Form.Control size="sm" type='date' name='birthday' defaultValue={birthday} onChange={e => setBirthday(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Button size="sm" variant='dark text-primary' type='submit' onClick={(e) => handleUpdate(e)}>Update</Button>
                <Button size="sm" variant='dark text-primary' type='submit' onClick={(e) => delUser(e)}>Delete Profile</Button>
            </Form.Group>





        </Form>
    )
};


