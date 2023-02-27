import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { removeFav } from "../../actions/actions";
import { MOVIE_API_URL } from "../../config";

const FavoriteMovieList = (props) => {
  const { movie, getUser } = props;

  const delFavorite = (movie) => {
    const token = localStorage.getItem("token");
    const Username = localStorage.getItem("user");
    axios
      .delete(`${MOVIE_API_URL}/users/${Username}/movies/${movie._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        props.removeFav(response.data);
        console.log(response);
        getUser(token);
        alert(
          `${movie.Title} has been removed from ${Username}\'s favorite movie list!`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card className="flex-fill bg-dark text-warning" xs={6} md={6} lg={3}>
      <Card.Body>
        <Link to={`/movies/${movie._id}`}>
          <Card.Img xs={6} md={3} crossOrigin="true" src={movie.ImagePath} />
        </Link>
        <Button
          variant="dark text-primary"
          size="sm"
          onClick={() => {
            delFavorite(movie);
          }}
        >
          remove from favorites
        </Button>
      </Card.Body>
    </Card>
  );
};

FavoriteMovieList.propTypes = {
  movie: PropTypes.shape({
    ImagePath: PropTypes.string,
  }),
};

let mapStateToProps = (state) => {
  console.log("state", state);
  return {
    movies: state.movies,
    user: state.user,
  };
};

export default connect(mapStateToProps, { removeFav })(FavoriteMovieList);
