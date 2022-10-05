import React, { useState } from 'react';
import axios from 'axios';


export default UpdateUser = (user) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');



    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://intense-shore-03094.herokuapp.com/users/${user}`, {
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

    delUser = (e) => {
        e.preventDefault();
        axios.delete('https://intense-shore-03094.herokuapp.com/user', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                const data = response.data;
                console.log(data);
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                alert('User profile deleted');
                window.open('/registration-view/registration-view.jsx');
            })
            .catch(e => {
                console.log('error deleting user')
            });
    };

    return (
        <form className='profile-form bg-dark text-warning' >
            <h3>Want to change some info??</h3>
            <div>
                <label>Username:</label>
                <input type='text' name='Username' defaultValue={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type='password' name='password' defaultValue={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Email address</label>
                <input type='email' name='email' defaultValue={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Birthday</label>
                <input type='date' name='birthday' defaultValue={birthday} onChange={e => setBirthday(e.target.value)} />
            </div>
            <div>
                <button variant='primary' type='submit' onSubmit={(e) => handleUpdate(e)}>Update</button>
                <button variant='primary' type='submit' onClick={(e) => delUser(e)}>Delete Profile</button>
            </div>





        </form>
    )
};


