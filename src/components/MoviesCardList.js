import React from "react";
import MoviesCard from "../components/MoviesCard";
import MoreButton from "../components/MoreButton";

function MoviesCardList() {
  return (
    <>
      <section className="movies-cardlist">
        <div className="movies-cardlist__grid">
          <MoviesCard />
          <MoviesCard />
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
