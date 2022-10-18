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
                    Birthday: response.data.Birthday
                });
                const favMovies = response.data.FavoriteMovies.map(movieId => {
                    const movie = this.props.movies.filter(movie => movie._id === movieId);
                    return movie[0];
                })
                this.setState({
                    favoriteMovies: favMovies
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    delFavorite = (movie) => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        axios.delete(`https://intense-shore-03094.herokuapp.com/users/${user}/movies/${movie._id}`, {

            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => {
                console.log(response)
                alert(`${movie.Title} has been removed from ${user}\'s favorite movie list!`)
                this.componentDidMount();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { user, favoriteMovies, Username, Email, token } = this.state;

        return (
            <Container>
                <Row>
                    <Col xs={12} sm={5} lg={3}>
                        <Card>
                            <Card.Body className='bg-dark text-warning'>
                                <Card.Text /> name: {Username}
                                <Card.Text /> email: {Email}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={7} lg={9}>
                        <Card>
                            <Card.Body className='bg-dark text-warning'>
                                <UpdateUser user={user} token={this.token} Username={Username} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Col>
                            <h2>Favorite Movies</h2>
                        </Col>
                        {favoriteMovies.map(movie => (
                            <Col key={movie._id} xs={6} md={6} lg={3}>
                                <FavoriteMovieList movie={movie} delFavorite={this.delFavorite} />
                            </Col>
                        )
                        )};
                    </Col>
                </Row>
            </Container >
        );
    }
};


