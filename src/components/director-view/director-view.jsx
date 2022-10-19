import React from 'react';
import PropTypes from 'prop-types'
import { Card, Container, Button } from 'react-bootstrap';

export class DirectorView extends React.Component {
    render() {
        const { director, onBackClick } = this.props;

        return (
            <Container className="bg-dark">
                <Card className="director-view bg-dark">
                    <Card.Header>
                        <Card.Title className="text-warning">Director</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <span className="text-warning">Name:</span>
                            <span className="text-white"> {director.Name}</span>
                        </Card.Text>
                        <Card.Text>
                            <span className="text-warning">Born:</span>
                            <span className="text-white"> {director.Birth}</span>
                        </Card.Text>
                        <Card.Text>
                            <span className="text-warning">Bio:</span>
                            <span className="text-white"> {director.Bio}</span>
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
DirectorView.propTypes = {
    Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string,
        Birth: PropTypes.number
    })
};