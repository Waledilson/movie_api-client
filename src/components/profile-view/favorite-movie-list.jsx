import React from 'react'
// import Link from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';

export function FavoriteMovieList({ favoriteMovies, delFavorite }) {
    return (

        <Container>
            <Row>
                <Col>
                    <h2>Favorite Movies</h2>
                </Col>
                <Col>
                    {favoriteMovies.map((movie) => {
                        return (
                            <Col key={movie._id}>
                                <img crossOrigin="true" src={movie.ImagePath} />
                                <Col>{movie.Title}</Col>
                                <Button variant="danger" onClick={() => { delFavorite(movie) }}>remove from favorites</Button>
                            </Col>
                        )
                    })
                    }

                </Col>
            </Row>
        </Container>

    );
}


