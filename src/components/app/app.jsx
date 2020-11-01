import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import {BrowserRouter, Switch, Route, Link, Redirect} from "react-router-dom";
import Login from "../login/login";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddRewiew from "../add-rewiew/add-rewiew";
import Player from "../player/player";
import { filmShape } from "../props-validataion";

const App = (props) => { 
  const {filmTitle, filmGenre, filmYear, films} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            filmTitle={filmTitle}
            filmGenre={filmGenre}
            filmYear={filmYear} 
            films={films}          
          />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id"
          render={(routerProps) => {
            const filmId = routerProps.match.params.id;
            const film = films.find(film => film.id === filmId);
        
            if(!film) return (<Redirect to='/404' />);
            return (
              <Film film={film} />
            )
          }}      
        />
        <Route exact path="/films/:id/review">
          <AddRewiew/>
        </Route>
        <Route exact path="/player/:id">
          <Player/>
        </Route>
        <Route exact path="/404">
          <>
            <h1>404.</h1>
            <p>Page not found</p>
            <Link to='/'>Go to main page</Link>
          </>
        </Route>
        <Route>
          <Redirect to='/404' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmYear: PropTypes.string.isRequired,
  film: filmShape,
};

export default App;
