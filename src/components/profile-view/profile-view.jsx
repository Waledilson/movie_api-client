import React from 'react';
//import React, { useState } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';

import UserInfo from './user-info';
import FavoriteMovies from './favorite-movies';
import UpdateUser from './update-user';

import './profile-view.scss';
import axios from 'axios';


export class ProfileView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            Username: null,
            Password: null,
            Email: null,
            Birthday: null,
            FavoriteMovies: []
        }
    }
    componentDidMount() {
        let accessToken = localStorage.getItem('token');
        if (accessToken !== null) {
            this.setState({
                user: localStorage.getItem('user')
            });
            this.getUser(accessToken);
        }
    }
    getUser = (token) => {
        const Username = localStorage.getItem('user')
        axios.get('https://intense-shore-03094.herokuapp.com/users/${username}', {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                this.setState({
                    Username: response.data.username,
                    Password: response.data.password,
                    Email: response.data.email,
                    Birthday: response.data.birthday,
                    FavoriteMovies: response.data.favoriteMovies
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleFavorite = (movieId, action) => {
        const { Username, favoriteMovies } = this.state;
        const username = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if (!user) {
            if (action === 'add') {
                this.setState({ favoriteMovies, movieId })
                axios.post('https://intense-shore-03094.herokuapp.com/users/${username}/favoriteMovies', {
                    headers: { Authroization: `Bearer ${token}` }
                })
                    .then((response) => {
                        console.log(response);
                        alert('${movie.Name} has ben added to ${Username}\'s favorite movie list!');
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            } else if (action === 'remove') {
                this.setState({ username, favoriteMovies })
                axios.delete('https://intense-shore-03094.herokuapp.com/users/${username}/favoriteMovies', {
                    headers: { Authroization: `Bearer ${token}` }
                })
                    .then((response) => {
                        console.log(response);
                        alert('${movie.Name} has been removed from ${Username}\'s favorite movie list!');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        };
    }




    render() {
        const { handleUpdate, handleFavorite, Username, Email } = this.state;

        return (
            <Container>
                <Row>
                    <Col xs={12} sm={4}>
                        <Card>
                            <Card.Body>
                                <UserInfo name={Username} email={Email} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={8}>
                        <Card>
                            <Card.Body>
                                <UpdateUser handleUpdate={handleUpdate} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <FavoriteMovies handleFavorite={handleFavorite} />
                    </Col>
                </Row>
            </Container >
        );
    }
};


