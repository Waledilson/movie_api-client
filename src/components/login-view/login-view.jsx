/*
import React from 'react';

export class LoginView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }
    onPasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit() {
        const { username, password } = this.state;
        console.log(username, password);
    }

    render() {
        return (
            <form>
                <label>
                    Username:
                    <input type="text" value={this.state.username} onChange={this.onUsernameChange} />
                </label>
                <button type="button" onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
}
*/

import React, { useState } from 'react';
<<<<<<< Updated upstream
import PropTypes from 'prop-types';
=======
>>>>>>> Stashed changes

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
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}