import React from 'react'
import Link from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

function FavoriteMovies({ favoriteMovieList, removeFav }) {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Favorite Movies</h2>
                </Col>
                <Row>
                    {favoriteMovieList.map((movies) => {
                        return (
                            <Col className="fav-movie-list" xs={12} sm={6} lg={3} key={movies._id}>
                                <img src={movies.ImagePath} />
                                <Link to={`/movies/${movies._id}`}>
                                    <h4>{movies.Title}</h4>
                                </Link>
                                <button variant="secondary" onClick={() => removeFav(movies._id)}>Remove from favorites list</button>
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
