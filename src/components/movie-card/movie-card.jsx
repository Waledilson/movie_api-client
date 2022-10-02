import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import React, { useState } from 'react';



import { Link } from "react-router-dom";

import './movie-card.scss';

export const MovieCard = (props) => {

    const { movie, user } = props;
    const token = localStorage.getItem('token');
    const { favoriteMovies } = useState([]);
    const addFavorite = (movieId) => {
        axios.post(`https://intense-shore-03094.herokuapp.com/users/${user}/movies/${movieId}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => {
                this.setState({ favoriteMovies, movie });
                console.log(response);
                // alert(`${movie.Title} has been added to ${Username}\'s favorite movie list!`);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <Card className="bg-dark">
            <Card.Img crossOrigin="true" variant="top" src={movie.ImagePath} />
            <Card.Body>
                <Card.Title className="text-warning">{movie.Title}</Card.Title>
                <Card.Text className="text-white">{movie.Description}</Card.Text>
                <Link to={`/movies/${movie._id}`}>
                    <Button variant="link">Open</Button>
                </Link>
                <Button variant="danger" onClick={() => { addFavorite(movie._id) }}>add to favorites</Button>
            </Card.Body>
        </Card>
    );
}


MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired
    }).isRequired

};
