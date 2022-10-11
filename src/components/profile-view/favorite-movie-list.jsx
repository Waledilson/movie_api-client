import React from 'react'
// import Link from "react-router-dom";
import { Container, Col, Row, Button, Card } from 'react-bootstrap';

export function FavoriteMovieList({ movie, delFavorite }) {
    return (
        < Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Img crossOrigin="true" src={movie.ImagePath} />
                        <Card.Body>
                            <Card.Title >{movie.Title}</Card.Title>
                            <Button variant="danger" onClick={() => { delFavorite(movie) }}>remove from favorites</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >

    );
}


