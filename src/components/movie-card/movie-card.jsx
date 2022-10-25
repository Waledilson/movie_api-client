import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from "react-router-dom";
import './movie-card.scss';

export const MovieCard = (props) => {
    const { movie } = props;



    const addFavorite = (movieId) => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        axios.post(`https://intense-shore-03094.herokuapp.com/users/${user}/movies/${movieId}`,
            {},
            {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then((response) => {
                console.log(response);
                alert(`${movie.Title} has been added to ${user}\'s favorite movie list!`);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <Card className="bg-dark flex-fill">
            <Card.Img crossOrigin="true" variant="top" src={movie.ImagePath} />
            <Card.Body>
                <Link to={`/movies/${movie._id}`}>
                    <Button className="text-warning" variant="link">{movie.Title}</Button>
                </Link>
                <Card.Text className="text-white">{movie.Description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button className="align-self-end" size="sm" variant="dark text-primary" onClick={() => { addFavorite(movie._id) }}>favorite this!</Button>
            </Card.Footer>

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
