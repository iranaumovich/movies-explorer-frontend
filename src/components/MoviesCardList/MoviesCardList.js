import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoreButton from "../MoreButton/MoreButton";
import Preloader from "../Preloader/Preloader";
import "./style.css";

function MoviesCardList() {
  return (
    <>
      <section className="movies-cardlist">
        {/*<Preloader />*/}
        <div className="movies-cardlist__grid">
          <MoviesCard />
          <MoviesCard saved />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </div>
        <MoreButton />
      </section>
    </>
  );
}

export default MoviesCardList;
