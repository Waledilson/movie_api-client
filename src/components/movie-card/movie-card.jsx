import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav } from "../../actions/actions";
import "./movie-card.scss";

const MovieCard = (props) => {
  const { movie, user } = props;

  const addFavorite = (movieId) => {
    const Username = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    axios
      .post(
        `https://intense-shore-03094.herokuapp.com/users/${Username}/movies/${movieId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        addFav(movieId);
        console.log(response.data);
        alert(
          `${movie.Title} has been added to ${user.Username}\'s favorite movie list!`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card className="bg-dark flex-fill">
      <Card.Img crossOrigin="true" variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Link to={`/movies/${movie._id}`}>
          <Button className="text-warning" variant="link">
            {movie.Title}
          </Button>
        </Link>
        <Card.Text className="text-white">{movie.Description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button
          className="align-self-end"
          size="sm"
          variant="dark text-primary"
          onClick={() => {
            addFavorite(movie._id);
          }}
        >
          favorite this!
        </Button>
      </Card.Footer>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  //   console.log("state", state);
  return {
    movies: state.movies,
    user: state.user,
  };
};

export default connect(mapStateToProps, addFav)(MovieCard);
