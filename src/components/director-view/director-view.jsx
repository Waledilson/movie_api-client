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
                            <p className="text-warning">Name:
                                <span className="text-white"> {director.Name}</span></p>
                        </Card.Text>
                        <Card.Text>
                            <p className="text-warning">Born:
                                <span className="text-white"> {director.Birth}</span></p>
                        </Card.Text>
                        <Card.Text>
                            <p className="text-warning">Bio:
                                <span className="text-white"> {director.Bio}</span></p>
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