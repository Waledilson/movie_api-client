import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import { FavoriteMovieList } from "./favorite-movie-list";
import UpdateUser from "./update-user";
import "./profile-view.scss";
import axios from "axios";
import { connect } from "react-redux";
import { removeFav, userFav, setUser } from "../../actions/actions";

class ProfileView extends React.Component {
  constructor() {
    super();
  }

  //   delFavorite = (movie) => {
  //     const token = localStorage.getItem("token");
  //     const user = localStorage.getItem("user");
  //     axios
  //       .delete(
  //         `https://intense-shore-03094.herokuapp.com/users/${user}/movies/${movie._id}`,
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }
  //       )
  //       .then((response) => {
  //         this.props.removeFav(...state, favMovies, response.data);
  //         console.log(response);

  //         alert(
  //           `${movie.Title} has been removed from ${user}\'s favorite movie list!`
  //         );
  //         this.componentDidMount();
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  render() {
    const { user, FavoriteMovies, movie } = this.props;
    // const movie = this.props;
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
                {FavoriteMovies.map((movie) => (
                  <Col key={movie._id} xs={12} sm={4} lg={3}>
                    <FavoriteMovieList
                      movie={movie}
                      //   delFavorite={delFavorite}
                    />
                  </Col>
                ))}
                ;
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("props", props);
  return {
    user: state.user,
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(ProfileView);
