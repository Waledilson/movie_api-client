import React from 'react';
import PropTypes from 'prop-types';

export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick } = this.props;

        return (
            <Row className="movie-view">
                <Col className="movie-poster">
                    <img src={movie.ImagePath} crossOrigin="true" />
                </Col>
                <Col className="movie-title">
                    <span className="label">Title: </span>
                    <span className="value">{movie.Title}</span>
                </Col>
                <Col className="movie-description">
                    <span className="label">Description: </span>
                    <span className="value">{movie.Description}</span>
                </Col>
                <button onClick={() => {
                    onBackClick(null);
                }}>Back</button>
            </Row>
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