import React from 'react';
//import React, { useState } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';

// import { UserInfo } from './user-info';
import { FavoriteMovieList } from './favorite-movie-list';
import UpdateUser from './update-user';

import './profile-view.scss';
import axios from 'axios';
// import { useState } from 'react';


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
        axios.get(`https://intense-shore-03094.herokuapp.com/users/${Username}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                this.setState({
                    Username: response.data.Username,
                    Email: response.data.Email,
                    Birthday: response.data.Birthday,
                    FavoriteMovies: response.data.FavoriteMovies
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    delFavorite(movieId) {
        const { movie } = props;
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        axios.delete(`https://intense-shore-03094.herokuapp.com/users/${user}/movies/${movieId}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => {
                console.log(response)
                alert(`${movie.Title} has been removed from ${user}\'s favorite movie list!`)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const { user, delFavorite, favoriteMovies, Username, Email, movie } = this.state;

        return (
            <Container>
                <Row>
                    <Col xs={12} sm={4}>
                        <Card>
                            <Card.Body className='bg-dark text-warning'>
                                <Card.Text /> name: {Username} email: {Email}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={8}>
                        <Card>
                            <Card.Body className='bg-dark text-warning'>
                                <UpdateUser user={user} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <FavoriteMovieList movie={movie} favoriteMovies={favoriteMovies} delFavorite={delFavorite} />
                    </Col>
                </Row>
            </Container >
        );
    }
};


