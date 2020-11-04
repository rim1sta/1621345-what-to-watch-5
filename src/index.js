import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {films, movieInfo} from "./mocks/films";


ReactDOM.render(
    <App
      films={films}
      movieInfo={movieInfo}

    />,
    document.querySelector(`#root`)
);
