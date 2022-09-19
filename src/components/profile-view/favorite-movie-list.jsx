import React from 'react'
// import Link from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';

export class FavoriteMovieList extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null,
            favoriteMovies: []
        };
    }

    render() {
        const { movie, handleFavorite, favoriteMovies } = this.props;

        return (
            <Container>
                <Row>
                    <Col>
                        <h2>Favorite Movies</h2>
                    </Col>
                    <Col>
                        {favoriteMovies.map((movie) => {
                            return (
                                <Col key={_id}>
                                    <img src={ImagePath} />
                                    <Col>{Title}</Col>
                                    <Button variant="danger" onClick={() => handleFavorite(_id, 'remove')}>remove from favorites</Button>
                                </Col>
                            )
                        }
                        )};
                    </Col>
                </Row>
            </Container>

        )
    };
}

