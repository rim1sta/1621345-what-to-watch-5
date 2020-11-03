import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import { films } from "./mocks/films";

const movieInfo = {
  filmTitle: `The Grand Budapest Hotel`,
  filmGenre: `Drama`,
  filmYear: `2014`
};

ReactDOM.render(
    <App
      filmTitle={movieInfo.filmTitle}
      filmGenre={movieInfo.filmGenre}
      filmYear={movieInfo.filmYear}
      films={films}
    />,
    document.querySelector(`#root`)
);
