import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';

export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick } = this.props;

        return (
            <Container className="movieViewContainer">
                <Row className="movie-view">
                    <Col className="movie-poster">
                        <img width={250} height={350} src={movie.ImagePath} crossOrigin="true" />
                    </Col>
                </Row>
                <Row>
                    <Col className="movie-title">
                        <span className="label">Title: </span>
                        <span className="value">{movie.Title}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="movie-description">
                        <span className="label">Description: </span>
                        <span className="value">{movie.Description}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="movie-genre">
                        <span className="label">Genre: </span>
                        <span className="value">{movie.Genre.Name}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="movie-director">
                        <span className="label">Diracted by: </span>
                        <span className="value">{movie.Director.Name}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="movie-featured">
                        <span className="label">Featured: </span>
                        <span className="value">{movie.Featured}</span>
                    </Col>
                </Row>
                <Button onClick={() => {
                    onBackClick(null);
                }}>Back</Button>
            </Container>
        );
    }
}
MovieView.PropTypes = {
    movie: PropTypes.shape({
        ImagePath: PropTypes.string,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string,
        Genre: PropTypes.string,
        Director: PropTypes.string,
        Featured: PropTypes.bool
    }),
    onBackClick: PropTypes.func.isRequired
};