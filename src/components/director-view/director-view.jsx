import React from 'react';
import PropTypes from 'prop-types'
import { Card, Container, Button } from 'react-bootstrap';

export class DirectorView extends React.Component {
    render() {
        const { director, onBackClick } = this.props;

        return (
            <Container>
                <Card className="director-view">
                    <Card.Header>Director</Card.Header>
                    <Card.Body>{director.Name}</Card.Body>
                    <Card.Body>Born: {director.Birth}</Card.Body>
                    <Card.Body>{director.Bio}</Card.Body>
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
DirectorView.propTypes = {
    Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string,
        Birth: PropTypes.number
    })
};