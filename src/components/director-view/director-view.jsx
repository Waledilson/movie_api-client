import React from 'react';
import { Card, Container } from 'react-bootstrap';

export class DirectorView extends React.Component {
    render() {
        const { director, onBackClick } = this.props;

        return (
            <Card>
                <Card.Title>{movie.director.name}</Card.Title>
            </Card>
        )
    }

}