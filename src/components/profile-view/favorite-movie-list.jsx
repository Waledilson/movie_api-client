import React from 'react'
// import Link from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';

export function FavoriteMovieList() {
    const favoriteMovies = [];

    return (

        <Container>
            <Row>
                <Col>
                    <h2>Favorite Movies</h2>
                </Col>
                <Col>
                    {favoriteMovies.map((movie) => {
                        return (
                            <Col key={movie.props._id}>
                                <img crossOrigin="true" src={movie.props.ImagePath} />
                                <Col>{movie.props.Title}</Col>
                                <Button variant="danger" onClick={() => handleFavorite(_id, 'remove')}>remove from favorites</Button>
                            </Col>
                        )
                    }
                    )};
                </Col>
            </Row>
        </Container>

    );
}


