import React from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";
import DeleteButton from "../DeleteButton/DeleteButton.js";
import moviePoster from "../../images/movi-pic-1.jpg";
import "./style.css";

function MoviesCard({ saved }) {
  return (
    <div className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__description">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <p className="movies-card__time">1ч 47мин</p>
        </div>
        {saved ? <DeleteButton /> : <FavoriteButton />}
      </div>

      <div className="movies-card__image-container">
        <img
          className="movies-card__image"
          src={moviePoster}
          alt="постер к фильму"
        />
      </div>
    </div>
  );
}

export default MoviesCard;
