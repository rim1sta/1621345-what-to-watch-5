import React from "react";
import PropTypes from "prop-types";
import {filmShape} from "../props-validataion";
import {Link} from "react-router-dom";
import {VideoPlayerFunc} from "../video-player/video-player-functional";


export const FilmCard = (props) => {
  const {film, onCardHover, onCardBlur, isActive} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={()=>onCardHover(film.id)}
      onMouseLeave={()=> onCardBlur()}
    >
      <div className="small-movie-card__image">
        {isActive
          ? <VideoPlayerFunc poster={film.poster} src={film.previewVideo} />
          : <img src={film.poster} alt="Bohemian Rhapsody" width="280" height="175" />
        }

      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${film.id}`}>{film.title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  isActive: PropTypes.bool.isRequired,
  film: filmShape.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardBlur: PropTypes.func.isRequired,
};
