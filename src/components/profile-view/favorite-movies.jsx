import React from 'react'
import Link from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

function FavoriteMovies({ movies, handleFavorite, favoriteMovies }) {


    return (
        <Container>
            <Row>
                <Col>
                    <h2>Favorite Movies</h2>
                </Col>
                <Row>
                    {favoriteMovies.map((movieId) => {
                        let movie = movie.find((m) => m.id === movieId);
                        return (
                            <Col className="fav-movie-list" xs={12} sm={6} lg={3}
                                key={movieId}
                                movie={movie}
                                handleFavorite={handleFavorite}>
                                <img src={movies.ImagePath} />
                                <Link to={`/movies/${movies._id, 'add'}`}>
                                    <h4>{movies.Title}</h4>
                                </Link>
                                <button variant="secondary" onClick={() => handleFavorite(movies._id, 'remove')}>Remove from favorites list</button>
                            </Col>
                        )
                    })
                    }
                </Row>
            </Row>
        </Container>

    )
}

export default FavoriteMovies


