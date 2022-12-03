import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

import "./login-view.scss";
import { MOVIE_API_URL } from "../config";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr("Username Required");
      isReq = false;
    } else if (username.length < 5) {
      setUsernameErr("Username must be 5 characters long");
      isReq = false;
    }
    if (!password) {
      setPasswordErr("Password Required");
      isReq = false;
    } else if (password.length < 6) {
      setPassword("Password must be 6 characters long");
      isReq = false;
    }
    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      /* Send a request to the server for authentication */
      axios
        .post(`${MOVIE_API_URL}/login`, {
          Username: username,
          Password: password,
        })
        .then((response) => {
          const data = response.data;
          props.onLoggedIn(data);
        })
        .catch((e) => {
          console.log("no such user");
          alert("no such user");
        });
    }
  };

  return (
    <Form className="bg-dark text-white">
      <Form.Group controlId="formUsername">
        <Form.Label className="text-warning">Username:</Form.Label>
        <Form.Control
          size="sm"
          placeholder="Enter username"
          value={username}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        {/*  */}
        {usernameErr && <p>{usernameErr}</p>}
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label className="text-warning">Password:</Form.Label>
        <Form.Control
          size="sm"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/*  */}
        {passwordErr && <p>{passwordErr}</p>}
      </Form.Group>
      <Button
        className="text-primary"
        variant="dark"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <Button
        className="float-right text-primary"
        variant="dark"
        type="button"
        href="/register"
      >
        Register
      </Button>
    </Form>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string,
    Password: PropTypes.string,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};
