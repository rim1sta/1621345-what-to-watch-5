import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "../login/login";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddRewiew from "../add-rewiew/add-rewiew";
import Player from "../player/player";

const App = (props) => {
  const {filmTitle, filmGenre, filmYear} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            filmTitle={filmTitle}
            filmGenre={filmGenre}
            filmYear={filmYear} />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/mylist">
          <MyList/>
        </Route>
        <Route exact path="/films/:id">
          <Film/>
        </Route>
        <Route exact path="/films/:id/review">
          <AddRewiew/>
        </Route>
        <Route exact path="/player/:id">
          <Player/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmYear: PropTypes.string.isRequired,
};

export default App;

