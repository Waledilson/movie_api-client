import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import { FavoriteMovieList } from './favorite-movie-list';
import UpdateUser from './update-user';
import './profile-view.scss';
import axios from 'axios';


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
        const { favoriteMovies, Username, Email } = this.state;
        const user = localStorage.getItem('user');
        return (
            <Container>
                <Row>
                    <Col xs={12} sm={5} lg={5}>
                        <Card className='bg-dark text-warning'>
                            <Card.Body >
                                <h4>User Information</h4>
                                <Card.Text /> name: <span className="text-white">{Username}</span>
                                <Card.Text /> email: <span className="text-white"> {Email}</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={7} lg={7}>
                        <Card className='bg-dark text-warning'>
                            <Card.Body>
                                <UpdateUser user={user} Username={Username} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Col className='bg-dark text-warning'>
                            <h2>Favorite Movies</h2>
                        </Col>
                        <Container>
                            <Row xl={3} lg={6} md={12}>
                                {favoriteMovies.map(movie => (
                                    <Col key={movie._id} xs={12} sm={4} lg={3} >
                                        <FavoriteMovieList movie={movie} delFavorite={this.delFavorite} />
                                    </Col>
                                ))};
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container >
        );
    }
};


