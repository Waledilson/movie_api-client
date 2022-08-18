import React from 'react';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [
                { _id: 1, Title: 'Inceptection', Description: 'Descrip....', ImagePath: '....' },
                { _id: 2, Title: 'The Shawshank Redemption', Description: 'descrip....', ImagePath: '....' },
                { _id: 3, Title: 'Gladiator', Description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', ImagePath: 'https://www.lavanguardia.com/peliculas-series/images/movie/poster/2000/5/w1280/90QFOG5zSN4cbrIVs4DL4ePAuA5.jpg' }
            ],
            selectedMovie: null
        };
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;

        if (movies.length === 0)
            return <div className="main-view">The list is empty!
            </div>;

        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => {
                        this.setSelectedMovie(newSelectedMovie);
                    }} />
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => {
                            this.setSelectedMovie(movie)
                        }} />
                    ))
                }
            </div>
        );
    }
}
export default MainView;