import React from 'react';

export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [
                { _id: 1, Title: 'Inceptection', Description: 'Descrip....', ImagePath: '....' },
                { _id: 2, Title: 'The Shawshank Redemption', Description: 'descrip....', ImagePath: '....' },
                { _id: 3, Title: 'Gladiator', Description: 'descript....', ImagePath: '....' }
            ]
        }
    }

    render() {
        const movies = this.state.movies;
        if (movies.length === 0) {
            return <div className="main-view">The list is empty!
            </div>;
        } else {
            return (
                <div className="main-view">
                    {movies.map(movie => <div key={movie._id}>{movie.Title}
                    </div>)}
                </div>
            );
        }
    }
}
export default MainView;