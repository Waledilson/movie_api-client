import React from 'react';
import PropTypes from 'prop-types';

export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick } = this.props;

        return (
            <div className="movie-view">
                <div className="movie-poster">
                    <img src={movie.ImagePath} crossOrigin="true" />
                </div>
                <div className="movie-title">
                    <span className="label">Title: </span>
                    <span className="value">{movie.Title}</span>
                </div>
                <div className="movie-description">
                    <span className="label">Description: </span>
                    <span className="value">{movie.Description}</span>
                </div>
                <button onClick={() => {
                    onBackClick(null);
                }}>Back</button>
            </div>
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