import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  filmTitle: `The Grand Budapest Hotel`,
  filmGenre: `Drama`,
  filmYear: `2014`
};

ReactDOM.render(
    <App
      filmTitle={Settings.filmTitle}
      filmGenre={Settings.filmGenre}
      filmYear={Settings.filmYear}
    />,
    document.querySelector(`#root`)
);
