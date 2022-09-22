import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


import { Link } from "react-router-dom";

import './movie-card.scss';

export const MovieCard = (props) => {
    const { movie, token } = props;

    addFavorite = (user, movie) => {
        axios.post(`https://intense-shore-03094.herokuapp.com/users/:Username/movies/`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => {
                this.setState({ user, movie });
                console.log(response);
                alert(`${movie} has been added to ${user}\'s favorite movie list!`);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <Card className="bg-dark">
            <Card.Img crossOrigin="true" variant="top" src={props.movie.ImagePath} />
            <Card.Body>
                <Card.Title className="text-warning">{props.movie.Title}</Card.Title>
                <Card.Text className="text-white">{props.movie.Description}</Card.Text>
                <Link to={`/movies/${movie._id}`}>
                    <Button variant="link">Open</Button>
                </Link>
                <Button variant="danger" onClick={() => { addFavorite(movie) }}>add to favorites</Button>
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
