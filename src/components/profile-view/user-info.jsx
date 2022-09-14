import React from 'react'

export function UserInfo({ email, name, }) {

    return (
        <div>
            <h4>Your Information</h4>
            <p>Name: (users.Name)</p>
            <p>Email: (users.Email)</p>
        </div>

    )
}

export default UserInfo