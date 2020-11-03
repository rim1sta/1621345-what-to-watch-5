import React from "react";
import PropTypes from "prop-types";
import { filmShape } from "../props-validataion";
import { Link } from "react-router-dom";

export const FilmCard = (props) => {
  const {film, onCardHover, onCardBlur} = props;
  return (
    <article 
      className="small-movie-card catalog__movies-card" 
      onMouseEnter={()=>onCardHover(film.id)} 
      onMouseLeave={() => onCardBlur()}
    >
      <div className="small-movie-card__image">
        <img src={film.poster} alt="Bohemian Rhapsody" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        {/* <Link className="small-movie-card__link" to={`/films/${film.id}`}>{film.title}</Link> */}
        <a className="small-movie-card__link" href={`/films/${film.id}`}>{film.title}</a>
      </h3>
    </article>
  )
};

FilmCard.propTypes = {
  film: filmShape.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardBlur: PropTypes.func.isRequired,
};
