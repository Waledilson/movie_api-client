import React from 'react'
// import Link from "react-router-dom";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export function FavoriteMovieList({ favoriteMovies, delFavorite, movie, ImagePath, Title }) {

    return (
        < Container >
            <Row>

                <Col>
                    <Col>
                        <Card>
                            <Card.Img crossOrigin="true" src={movie.ImagePath} />
                            <Card.Body>
                                <Card.Title >{movie.Title}</Card.Title>
                                <Button variant="danger" onClick={() => { delFavorite(movie) }}>remove from favorites</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Col>
            </Row>
        </Container >

    );

    // function newFunction() {
    //     return movie.props;
    // }
}


