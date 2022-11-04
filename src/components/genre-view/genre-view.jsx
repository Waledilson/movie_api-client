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
                            <span className="text-warning">Genre Name:</span>
                            <span className="text-white"> {genre.Name}</span>
                        </Card.Text>
                        <Card.Text>
                            <span className="text-warning">Description:</span>
                            <span className="text-white"> {genre.Description}</span>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="dark text-primary" onClick={() => {
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



