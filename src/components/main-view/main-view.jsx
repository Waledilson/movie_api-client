import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null,
            registered: null
        }
    }

    componentDidMount() {
        axios.get('https://intense-shore-03094.herokuapp.com/movies')
            .then(response => {
                this.setState({
                    movies: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }


    setSelectedMovie(movie) {
        this.setState({
            selectedMovie: movie
        });
    }

    onLoggedIn(user) {
        this.setState({
            user
        });
    }

    onRegistered(registered) {
        this.setState({
            registered
        });
    }

    render() {
        const { movies, selectedMovie, user, registered } = this.state;

        if (!registered) return <RegistrationView onRegistered={registered => this.onRegistered(registered)} />;

        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

        if (movies.length === 0)
            return <div className="main-view" />;

        return (
            <Row className="main-view justify-content-md-center">
                {selectedMovie
                    ? (
                        <Col>
                            <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => {
                                this.setSelectedMovie(newSelectedMovie);
                            }} />
                        </Col>)
                    : movies.map(movie => (
                        <Col lg={3} md={4} sm={6}>
                            <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => {
                                this.setSelectedMovie(newSelectedMovie);
                            }} />
                        </Col>
                    ))
                }
            </Row>
        );
    }
}

export default MainView;



/*
run the app.nothing happens when i try to open a movie.
try the "newselectedmovie" "selectedmovie" "movie" combinations
*/