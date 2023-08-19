import React from "react";
import "./style.css";
import getTimeFromMins from "../../utils/utils.js";

function MoviesCard({ title, time, image, button }) {
  return (
    <div className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__description">
          <h2 className="movies-card__title">{title}</h2>
          <p className="movies-card__time">{getTimeFromMins(time)}</p>
        </div>
        {button}
      </div>
      <div className="movies-card__image-container">
        <img className="movies-card__image" src={image} alt={title} />
      </div>
    </div>
  );
}

export default MoviesCard;
