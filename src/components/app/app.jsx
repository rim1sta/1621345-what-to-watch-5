import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import {BrowserRouter, Switch, Route, Link, Redirect} from "react-router-dom";
import Login from "../login/login";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddRewiew from "../add-rewiew/add-rewiew";
import Player from "../player/player";
import {filmShape, movieShape} from "../props-validataion";
import AddComment from "../add-comment/add-comment";


const App = (props) => {
  const {films, movieInfo} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"

        >
          <MainPage
            movieInfo={movieInfo}
            films={films}

          />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/mylist">
          <MyList films={films}/>
        </Route>
        <Route exact path="/films/:id"
          render={(routerProps) => {
            const filmId = routerProps.match.params.id;
            const movie = films.find((film) => film.id === filmId);

            if (!movie) {
              return (<Redirect to='/404' />);
            }
            return (
              <Film film={movie}
                films={films} />
            );
          }}
        />
        <Route exact path="/films/:id/review"
          render={(routerProps) => {
            const filmId = routerProps.match.params.id;
            const movie = films.find((film) => film.id === filmId);

            if (!movie) {
              return (<Redirect to='/404' />);
            }
            return (
              <AddRewiew films={films}
                film={movie}/>
            );
          }}/>
        <Route exact path="/player/:id"
          render={(routerProps) => {
            const filmId = routerProps.match.params.id;
            const movie = films.find((film) => film.id === filmId);

            if (!movie) {
              return (<Redirect to='/404' />);
            }
            return (
              <Player film={movie} />
            );
          }}/>
        <Route exact path="/films/:id/addreview"
          render={(routerProps) => {
            const filmId = routerProps.match.params.id;
            const movie = films.find((film) => film.id === filmId);

            if (!movie) {
              return (<Redirect to='/404' />);
            }
            return (
              <AddComment film={movie} />
            );
          }}/>


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
  movieInfo: PropTypes.shape(movieShape).isRequired,
  film: filmShape,
  films: PropTypes.arrayOf(filmShape).isRequired,
};

export default App;
