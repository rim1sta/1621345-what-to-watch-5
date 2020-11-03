import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import { FilmCard } from "../film-card/film-card";


class FilmsList extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
export default class FilmList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilmId: null,
    };
    this.onCardHover = this.onCardHover.bind(this);
    this.onCardBlur = this.onCardBlur.bind(this);
  }

  onCardHover (filmId) {
    console.log('hover', filmId);
    this.setState({
      activeFilmId: filmId,
    })
  }

  onCardBlur () {
    console.log('blur');
    this.setState({
      activeFilmId: null,
    })
  }

  render () {
    const {films} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map((film, key) => (
          <FilmCard key={key} film={film} onCardHover={this.onCardHover} onCardBlur={this.onCardBlur} />
        ))}
      </div>
      )
  };
};


    }
  }
}
