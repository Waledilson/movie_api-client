import React, { useState } from 'react';

export function LoginView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        props.onLoggedIn(username);
    };

    return (
        <form>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setPassword(e.target.value)} />
            </label>
            <label>
                Passwork:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
    LoginView.propTypes = {
        user: PropTypes.exact({
            Username: PropTypes.string.isRequired,
            Password: PropTypes.string.isRequired
        }).isRequired,
        onClick: PropTypes.func.isRequired

    }
}