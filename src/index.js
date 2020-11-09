import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {films, movieInfo} from "./mocks/films";
import PropTypes from "prop-types";
import {filmShape, movieShape} from "../props-validataion";

ReactDOM.render(
    <App
      films={films}
      movieInfo={movieInfo}

    />,
    document.querySelector(`#root`)
);
App.propTypes = {
  movieInfo: PropTypes.shape(movieShape).isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired,
};
