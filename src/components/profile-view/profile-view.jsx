import React from 'react';
//import React, { useState } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';

// import { UserInfo } from './user-info';
import { FavoriteMovieList } from './favorite-movie-list';
import UpdateUser from './update-user';

import './profile-view.scss';
import axios from 'axios';


export class ProfileView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            user: null,
            favoriteMovies: []
        };
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
        axios.get(`https://intense-shore-03094.herokuapp.com/users/${username}`, {
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

    handleFavorite = (movie, action) => {
        const { favoriteMovies } = this.state;
        const username = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if (!user) {
            if (action === 'add') {
                this.setState({ favoriteMovies, movie })
                axios.post(`https://intense-shore-03094.herokuapp.com/users/${username}/movies/${movie._id}`, {
                    headers: { Authroization: `Bearer ${token}` }
                })
                    .then((response) => {
                        console.log(response);
                        alert(`${movie.Name} has ben added to ${username}\'s favorite movie list!`);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            } else if (action === 'remove') {
                this.setState({ username, favoriteMovies })
                axios.delete(`https://intense-shore-03094.herokuapp.com/users/${username}/favoriteMovies`, {
                    headers: { Authroization: `Bearer ${token}` }
                })
                    .then((response) => {
                        console.log(response);
                        alert(`${movie.Name} has been removed from ${username}\'s favorite movie list!`);
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
                                <Card.Text /> name:{Username} email:{Email}
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
                        <FavoriteMovieList handleFavorite={handleFavorite} />
                    </Col>
                </Row>
            </Container >
        );
    }
};


