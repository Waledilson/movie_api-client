import React from 'react';
import PropTypes from 'prop-types'
import { Card, Container, Button } from 'react-bootstrap';

export class GenreView extends React.Component {


    render() {
        const { genre, onBackClick } = this.props;


        return (
            <Container>
                <Card className="genre-view">
                    <Card.Header>Genre:</Card.Header>
                    <Card.Body>{genre.Name}</Card.Body>
                    <Card.Body>Description: {genre.description}</Card.Body>
                    <Card.Body>{ }</Card.Body>
                    <Card.Footer>
                        <Button onClick={() => {
                            onBackClick(null);
                        }}>Back</Button>
                    </Card.Footer>
                </Card>
            </Container>
        );
    }

}
GenreView.propTypes = {
    Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string
    })
};

