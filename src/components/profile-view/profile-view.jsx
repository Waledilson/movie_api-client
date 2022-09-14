import React from 'react';
import React, { useState } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';

import UserInfo from './user-info';
import FavoriteMovies from './favorite-movies';
import UpdateUser from './update-user';

import './profile-view.scss';


export function ProfileView({ movies }) {

    const [user, setUser] = useState({
        user: localStorage.getItem('data')
    });

    getUser = (token) => {
        const Username = localStorage.getItem("user");
        axios
            .get(`https://ap-myflix.herokuapp.com/users/${Username}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                this.setState({
                    Username: response.data.Username,
                    Password: response.data.Password,
                    Email: response.data.Email,
                    Birthday: response.data.Birthday,
                    FavoriteMovies: response.data.FavoriteMovies,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isReq = validate();
        if (isReq) {
            /* Send a request to the server for authentication */
            axios.put('https://intense-shore-03094.herokuapp.com/user', {
                Username: username,
                Password: password,

            })
                .then(response => {
                    const data = response.data;
                    props.onLoggedIn(data);
                })
                .catch(e => {
                    console.log('no such user')
                });
        }

        return (
            <Container>
                <Row>
                    <Col xs={12} sm={4}>
                        <Card>
                            <Card.Body>
                                <UserInfo name={user.Username} email={user.Email} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={8}>
                        <Card>
                            <Card.Body>
                                <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <FavoriteMovies favoriteMovieList={favoriteMovieList} />


            </Container>
        );
    };
}
