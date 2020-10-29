import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";
import PropTypes for (let index = 0; index < array.length; index++) {
  const element = array[index];

}


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
