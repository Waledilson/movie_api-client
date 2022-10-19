import React from 'react'
// import Link from "react-router-dom";
import { Container, Col, Row, Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

export function FavoriteMovieList({ movie, delFavorite }) {
    return (

        <Card className="flex-fill" xs={6} md={6} lg={3}>
            <Card.Body className="bg-dark text-warning">
                <Link to={`/movies/${movie._id}`}>
                    <Card.Img xs={6} md={3} crossOrigin="true" src={movie.ImagePath} />
                </Link>
                <Button text="black" variant="warning" size="sm" onClick={() => { delFavorite(movie) }}>remove from favorites</Button>
            </Card.Body>
        </Card>
    );
}


