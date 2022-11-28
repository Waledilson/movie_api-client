import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { removeFav } from "../../actions/actions";

const FavoriteMovieList = (props) => {
  const { movie } = props;
  const { ImagePath, _id } = movie;
  console.log("props", props);

  delFavorite = (movieId) => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    axios
      .delete(
        `https://intense-shore-03094.herokuapp.com/users/${user}/movies/${movieId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        removeFav(...state, favMovies, response.data);
        console.log(response);

        alert(
          `${movie.Title} has been removed from ${user}\'s favorite movie list!`
        );
        this.componentDidMount();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card className="flex-fill bg-dark text-warning" xs={6} md={6} lg={3}>
      <Card.Body>
        <Link to={`/movies/${movie._id}`}>
          <Card.Img xs={6} md={3} crossOrigin="true" src={ImagePath} />
        </Link>
        <Button
          variant="dark text-primary"
          size="sm"
          onClick={() => {
            delFavorite(_id);
          }}
        >
          remove from favorites
        </Button>
      </Card.Body>
    </Card>
  );
};

let mapStateToProps = (state) => {
  console.log("state", state);

  return {
    movies: state.movies,
    user: state.user,
  };
};

export default connect(mapStateToProps, { removeFav })(FavoriteMovieList);

//nothing showing up on favorite movie cards
//props and state are fine in favmoreie component
//the whole each child key fuckin bullshit
