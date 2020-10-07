import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const MovieInfo = {
  filmTitle: `The Grand Budapest Hotel`,
  filmGenre: `Drama`,
  filmYear: `2014`
};

ReactDOM.render(
    <App
      filmTitle={MovieInfo.filmTitle}
      filmGenre={MovieInfo.filmGenre}
      filmYear={MovieInfo.filmYear}
    />,
    document.querySelector(`#root`)
);
