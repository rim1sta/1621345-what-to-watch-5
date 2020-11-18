import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {FilmCard} from "../film-card/film-card";
import {filmShape} from "../props-validataion";

export default class FilmList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilmId: null,
    };
    this.onCardHover = this.onCardHover.bind(this);
    this.onCardBlur = this.onCardBlur.bind(this);
  }

  onCardHover(filmId) {
    this.setState({
      activeFilmId: filmId,
      isCardActive: true,
    });
  }

  onCardBlur() {
    this.setState({
      activeFilmId: null,
      isCardActive: false,
    });
  }

  render() {
    const {films} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map((film, key) => (
          <FilmCard key={key} film={film} onCardHover={this.onCardHover} onCardBlur={this.onCardBlur} />
        ))}
      </div>
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(filmShape).isRequired,
};
