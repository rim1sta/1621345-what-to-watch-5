import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";

const App = (props) => {
  const {filmTitle} = props;
  const {filmGenre} = props;
  const {filmYear} = props;
  return (
    <MainPage
    filmTitle={filmTitle}
    filmGenre={filmGenre}
    filmYear={filmYear} />
  );
};

App.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmYear: PropTypes.string.isRequired,
}

export default App;

