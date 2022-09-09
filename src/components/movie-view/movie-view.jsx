import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';

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
                        <span className="value text-white">{movie.Genre.Name}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="movie-director">
                        <span className="label text-warning">Directed by: </span>
                        <span className="value text-white">{movie.Director.Name}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="movie-featured">
                        <span className="label text-warning">Featured: </span>
                        <span className="value text-white">{movie.Featured}</span>
                    </Col>
                </Row>
                <Button onClick={() => {
                    onBackClick(null);
                }}>Back</Button>
            </Container>
        );
    }
}
MovieView.propTypes = {
    movie: PropTypes.shape({
        ImagePath: PropTypes.string,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string,
        Genre: PropTypes.object,
        Director: PropTypes.object,
        Featured: PropTypes.bool
    }),
    onBackClick: PropTypes.func.isRequired
};