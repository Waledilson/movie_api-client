import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
// import { addFav, setUser } from '../../actions/actions'
import './movie-card.scss';

export const MovieCard = (props) => {
    const { movie, movieId } = props;




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
                <Button className="align-self-end" size="sm" variant="dark text-primary" onClick={() => { addFavorite(movieId) }}>favorite this!</Button>
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

const mapStateToProps = state => {
    return {
        movies: state.movies,
        user: state.user
    };
}

const mapDispatchToProps = (dispatch) => ({
    addFavorite: (event) =>
        dispatch(addFav(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

