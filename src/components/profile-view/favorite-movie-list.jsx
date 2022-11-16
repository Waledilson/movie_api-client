import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


export function FavoriteMovieList({ movie, delFavorite }) {
    return (

        <Card className="flex-fill bg-dark text-warning" xs={6} md={6} lg={3}>
            <Card.Body>
                <Link to={`/movies/${movie._id}`}>
                    <Card.Img xs={6} md={3} crossOrigin="true" src={movie.ImagePath} />
                </Link>
                <Button variant="dark text-primary" size="sm" onClick={() => { delFavorite(movie) }}>remove from favorites</Button>
            </Card.Body>
        </Card>
    );
}

let mapStateToProps = state => {

    return {
        movies: state.movies,
        user: state.user,
        favoriteMovies: state.favoriteMovies
    };
}

export default connect(mapStateToProps)
    (FavoriteMovieList);

