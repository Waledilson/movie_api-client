import { connect } from "react-redux";

const Lauchie = (props) => {
  console.log("props", props);
  return <input type="text" value={""} onChange={() => {}} />;
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    movies: state.movies,
  };
};

export const ConnectedLauchie = connect(mapStateToProps)(Lauchie);
