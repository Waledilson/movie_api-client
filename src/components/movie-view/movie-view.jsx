import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './movie-view.scss';

export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick } = this.props;

        return (
            <Container>
                <Row className="movie-view">
                    <Col className="movie-poster">
                        <img width={250} height={350} src={movie.ImagePath} crossOrigin="true" />
                    </Col>
                </Row>
                <Row>
                    <Col className="movie-title">
                        <span className="label text-warning">Title: </span>
                        <span className="value text-white">{movie.Title}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="movie-description">
                        <span className="label text-warning">Description: </span>
                        <span className="value text-white">{movie.Description}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="movie-genre">
                        <span className="label text-warning">Genre: </span>
                        <Link to={`/genres/${movie.Genre.Name}`}>
                            <span className="director-link link text-light">{movie.Genre.Name}</span>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col className="movie-director">
                        <span className="label text-warning">Directed by: </span>
                        <Link to={`/directors/${movie.Director.Name}`}>
                            <span className="director-link link text-light">{movie.Director.Name}</span>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col className="movie-featured">
                        <span className="label text-warning">Featured: </span>
                        <span className="value text-white">{movie.Featured.bool}</span>
                    </Col>
                </Row>
                <Button onClick={() => {
                    onBackClick();
                }}>Back</Button>
            </Container>
        );
    }
}
MovieView.propTypes = {
    movie: PropTypes.shape({
        ImagePath: PropTypes.string,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string
        // Genre: PropTypes.object,
        // Director: PropTypes.object,
        // Featured: PropTypes.bool
    }).isRequired
};