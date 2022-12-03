import React from "react";
import PropTypes from "prop-types";
import { Card, Container, Col, Row } from "react-bootstrap";
import FavoriteMovieList from "./favorite-movie-list";
import UpdateUser from "./update-user";
import "./profile-view.scss";
import { connect } from "react-redux";

const ProfileView = (props) => {
  const { user, movies, getUser } = props;

  return (
    <Container>
      <Row>
        <Col xs={12} sm={5} lg={5}>
          <Card className="bg-dark text-warning">
            <Card.Body>
              <h4>User Information</h4>
              <Card.Text /> name:{" "}
              <span className="text-white">{user.Username}</span>
              <Card.Text /> email:{" "}
              <span className="text-white"> {user.Email}</span>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={7} lg={7}>
          <Card className="bg-dark text-warning">
            <Card.Body>
              <UpdateUser user={user} />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Col className="bg-dark text-warning">
            <h2>Favorite Movies</h2>
          </Col>
          <Container>
            <Row xl={3} lg={6} md={12}>
              {user.FavoriteMovies &&
                movies
                  .filter((movie) => user.FavoriteMovies.includes(movie._id))
                  .map((movie) => (
                    <Col key={movie._id} xs={12} sm={4} lg={3}>
                      <FavoriteMovieList getUser={getUser} movie={movie} />
                    </Col>
                  ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

ProfileView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    Username: PropTypes.string,
    Email: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(ProfileView);
