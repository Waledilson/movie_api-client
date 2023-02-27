import axios from "axios";
import React, { useState } from "react";
import React from "react";
import {
  Form,
  Button,
  Card,
  CardGroup,
  Container,
  Col,
  Row,
} from "react-bootstrap";
import { connect } from "react-redux";
import { MOVIE_API_URL } from "../../config";

import "./registration-view.scss";

const RegistrationView = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const [values, setValues] = useState({
    usernameErr: "",
    passwordErr: "",
    emailErr: "",
  });

  const validate = () => {
    let isReq = true;
    if (!username) {
      setValues({
        ...values,
        usernameErr: "Username must be 5 characters long",
      });
      isReq = false;
    }
    if (!password) {
      setValues({ ...values, passwordErr: "Password required" });
      isReq = false;
    } else if (password.length < 6) {
      setValues({
        ...values,
        passwordErr: "Password must be 6 characters long",
      });
      isReq = false;
    }
    if (!email) {
      setValues({ ...values, emailErr: "Email is required" });
      isReq = false;
    } else if (email.indexOf("@") === -1) {
      setValues({ ...values, emailErr: "Email is invalid" });
      isReq = false;
    }
    return isReq;
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      axios
        .post(`${MOVIE_API_URL}/users`, {
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          alert("Registration successful, please login!");
          window.open("/", "_self");
        })
        .catch((response) => {
          console.log(response);
          alert("unable to register");
        });
    }
  };
  return (
    <Container>
      <Row>
        <Col sm={12} md={10} lg={8}>
          <CardGroup>
            <Card>
              <Card.Body className="bg-dark text-white">
                <Card.Header className="text-warning">
                  Please Register
                </Card.Header>
                <Form>
                  <Form.Group>
                    <Form.Label className="text-warning">Username:</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      placeholder="enter a username"
                    />
                    {values.usernameErr && <p>(values.usernameErr</p>}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="text-warning">Password:</Form.Label>
                    <Form.Control
                      size="sm"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="your pass word must be at least 8 characters"
                    />
                    {values.passwordErr && <p>(values.passwordErr</p>}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="text-warning">Email:</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="enter your email"
                    />
                    {values.emailErr && <p>(values.emailErr</p>}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="text-warning">Birthday:</Form.Label>
                    <Form.Control
                      size="sm"
                      type="date"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      required
                      placeholder="enter your date of birth"
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleRegistration}
                  >
                    Register
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};

mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(RegistrationView);
