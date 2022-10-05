import React from 'react'
// import Link from "react-router-dom";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export function FavoriteMovieList({ favoriteMovies, delFavorite }) {
    const { movie } = movie.props;
    return (

        <Container>
            <Row>
                <Col>
                    <h2>Favorite Movies</h2>
                </Col>
                <Col>
                    {favoriteMovies.map((movie) => {
                        return (
                            <Card key={movie._id}>
                                <Card.Img crossOrigin="true" src={movie.ImagePath} />
                                <Card.Body>
                                    <Card.Title>{movie.Title}</Card.Title>
                                    <Button variant="danger" onClick={() => { delFavorite(movie) }}><Card.Text>remove from favorites</Card.Text></Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                    }

                </Col>
            </Row>
        </Container>

    );
}


