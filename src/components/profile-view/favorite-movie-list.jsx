import React from 'react'
// import Link from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';

export function FavoriteMovieList({ favoriteMovies, handleFavorite }) {
    return (

        <Container>
            <Row>
                <Col>
                    <h2>Favorite Movies</h2>
                </Col>
                <Col>
                    {favoriteMovies.map((movie) => {
                        return (
                            <Col key={props.movie._id}>
                                <img crossOrigin="true" src={props.movie.ImagePath} />
                                <Col>{props.movie.Title}</Col>
                                <Button variant="danger" onClick={() => { handleFavorite(_id, 'remove') }}>remove from favorites</Button>
                            </Col>
                        )
                    })
                    }

                </Col>
            </Row>
        </Container>

    );
}


