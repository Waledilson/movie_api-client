import React from 'react';

export function UpdateUser(user) {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const email = localStorage.getItem('email');
    const birthday = localStorage.getItem('birthday');

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('https://intense-shore-03094.herokuapp.com/login', {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        })
            .then(response => {
                const data = response.data;
                console.log(data);
                //window.open('/', '_self');
            })
            .catch(e => {
                console.log('error updating your info')
            });
    };

    return (
        <form className='profile-form' onSubmit={(e) => handleUpdate(e)}>
            <h2>Want to change some info??</h2>
            <label>Username:</label>
            <input type='text' name='Username' defaultValue={user.Username} onChange={e => handleUpdate(e)} />
            <label>Password</label>
            <input type='password' name='password' defaultValue={user.Password} onChange={e => handleUpdate(e)} />
            <label>Email address</label>
            <input type='email' name='email' defaultValue={user.Email} onChange={e => handleUpdate(e.target.value)} />
            <button variant='primary' type='submit'>Update</button>

        </form>
    )
}

export default UpdateUser