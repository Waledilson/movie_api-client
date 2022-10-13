import React from 'react'
// import Link from "react-router-dom";
import { Container, Col, Row, Button, Card, } from 'react-bootstrap';

export function FavoriteMovieList({ movie, delFavorite }) {
    return (
        < Container >
            <Row xs={12} md={6} lg={3}>
                <Col xs={12} md={6} lg={3} >
                    <Card>
                        <Card.Img className='movie-poster' crossOrigin="true" src={movie.ImagePath} />
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


