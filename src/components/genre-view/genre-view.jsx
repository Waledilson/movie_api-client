import React from 'react';
import PropTypes from 'prop-types'
import { Card, Container, Button } from 'react-bootstrap';

export class GenreView extends React.Component {


    render() {
        const { genre, onBackClick } = this.props;

        return (
            <Container>
                <Card className="genre-view bg-dark">
                    <Card.Header>
                        <Card.Title className="text-warning">Genre</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p className="text-warning">Genre Name:
                                <span className="text-white"> {genre.Name}</span></p>
                        </Card.Text>
                        <Card.Text>
                            <p className="text-warning">Description:
                                <span className="text-white"> {genre.Description}</span></p>
                        </Card.Text>
                    </Card.Body>
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



