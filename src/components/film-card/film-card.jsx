import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
const {film} = props;
return (
  <React.Fragment>
    <div className="small-movie-card__image">
              <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
<a className="small-movie-card__link" href="movie-page.html">{film}</a>
            </h3>
  </React.Fragment>
)
}
