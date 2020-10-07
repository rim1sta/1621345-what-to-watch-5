import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
FIlM_TITLE: 'The Grand Budapest Hotel',
FILM_GENRE: 'Drama',
FILM_YEAR: '2014'
};

ReactDOM.render(
  <App
  filmTitle={Settings.FIlM_TITLE}
  filmGenre={Settings.FILM_GENRE}
  filmYear={Settings.FILM_YEAR}
  />,
  document.querySelector(`#root`)
);
