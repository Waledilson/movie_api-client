import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import {
  setMovies,
  setUser,
  userFav,
  removeFav,
  addFav,
} from "../../actions/actions";
import MoviesList from "../movies-list/movies-list";
import { MovieCard } from "../movie-card/movie-card";
import MovieView from "../movie-view/movie-view";
import LoginView from "../login-view/login-view";
import RegistrationView from "../registration-view/registration-view";
import ProfileView from "../profile-view/profile-view";
import { GenreView } from "../genre-view/genre-view";
import { DirectorView } from "../director-view/director-view";
import { Navbar } from "../nav-bar/nav-bar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main-view.scss";

class MainView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.getMovies(accessToken);
      this.getUser(accessToken);
    }
  }

  getMovies(token) {
    axios
      .get(`https://intense-shore-03094.herokuapp.com/movies`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        //assign the result to the state
        this.props.setMovies(response.data);
        // console.log("this.props", this.props);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getUser = (token) => {
    const Username = localStorage.getItem("user");
    axios
      .get(`https://intense-shore-03094.herokuapp.com/users/${Username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.props.setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onLoggedIn(authData) {
    console.log(authData);
    this.props.setUser(authData.user);
    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
    window.open("/", "_self");
  }

  //   delFavorite = (movieId) => {
  //     // console.log("props", props);

  //     const token = localStorage.getItem("token");
  //     const user = localStorage.getItem("user");
  //     axios
  //       .delete(
  //         `https://intense-shore-03094.herokuapp.com/users/${user}/movies/${movieId}`,
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
    const { movies } = this.props;
    const user = localStorage.getItem("user");
    // console.log("this.props", this.props);
    return (
      <Router>
        <Navbar user={user} />
        <Row className="main-view justify-content-md-center bg-dark">
          <Route
            exact
            path="/"
            render={() => {
              if (movies.length === 0 && localStorage.getItem("user"))
                return <div className="main-view" />;
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;

              return <MoviesList movies={movies} />;
            }}
          />
          <Route
            path="/register"
            render={() => {
              if (!user) return <Redirect to="/" />;
              return (
                <Col>
                  <RegistrationView />
                </Col>
              );
            }}
          />
          <Route
            path="/movies/:movieId"
            render={({ match, history }) => {
              if (movies.length === 0 && localStorage.getItem("user"))
                return <div className="main-view" />;
              return (
                <Col sm={6} md={4} lg={3}>
                  <MovieView
                    movie={movies.find((m) => m._id === match.params.movieId)}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />
          <Route
            path="/directors/:name"
            render={({ match, history }) => {
              if (movies.length === 0 && localStorage.getItem("user"))
                return <div className="main-view" />;
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col md={8}>
                  <DirectorView
                    director={
                      movies.find((m) => m.Director.Name === match.params.name)
                        .Director
                    }
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />
          <Route
            path="/genres/:name"
            render={({ match, history }) => {
              if (movies.length === 0 && localStorage.getItem("user"))
                return <div className="main-view" />;
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col md={8}>
                  <GenreView
                    genre={
                      movies.find((m) => m.Genre.Name === match.params.name)
                        .Genre
                    }
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />
          <Route
            path={`/users/${user}`}
            render={({ history }) => {
              if (movies.length === 0 && localStorage.getItem("user"))
                return <div className="main-view" />;
              if (!user) return <Redirect to="/" />;
              return (
                <Col>
                  <ProfileView onBackClick={() => history.goBack()} />
                </Col>
              );
            }}
          />
        </Row>
      </Router>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    movies: state.movies,
    user: state.user,
  };
};

const ConnectedMainView = connect(mapStateToProps, {
  setUser,
  setMovies,
  userFav,
  addFav,
  removeFav,
})(MainView);

export default ConnectedMainView;
