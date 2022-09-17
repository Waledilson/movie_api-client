import React from 'react'

export function UserInfo(props) {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    return (
        <div>
            <h4>Your Information</h4>
            <p>Name: (${username})</p>
            <p>Email: (${email})</p>
        </div>

    )
}

export default UserInfo