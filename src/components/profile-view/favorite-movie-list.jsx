import React from 'react'
// import Link from "react-router-dom";
import { Container, Col, Row, Button, Card } from 'react-bootstrap';

export function FavoriteMovieList({ movie, delFavorite }) {
    return (

        <Card xs={6} md={6} lg={3}>
            <Card.Img xs={6} md={3} className='movie-poster' crossOrigin="true" src={movie.ImagePath} />
            <Card.Body className="bg-dark text-warning">
                <Card.Title >{movie.Title}</Card.Title>
                <Button variant="danger" size="sm" onClick={() => { delFavorite(movie) }}>remove from favorites</Button>
            </Card.Body>
        </Card>
    );
}


