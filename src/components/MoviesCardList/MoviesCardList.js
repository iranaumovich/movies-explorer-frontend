import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoreButton from "../MoreButton/MoreButton";
import moviePoster1 from "../../images/movie-pic-1.jpg";
import moviePoster2 from "../../images/movie-pic-2.jpg";
import moviePoster3 from "../../images/movie-pic-3.jpg";
import moviePoster4 from "../../images/movie-pic-4.jpg";
import moviePoster5 from "../../images/movie-pic-5.jpg";
import moviePoster6 from "../../images/movie-pic-6.jpg";
import moviePoster7 from "../../images/movie-pic-7.jpg";
import moviePoster8 from "../../images/movie-pic-8.jpg";
import moviePoster9 from "../../images/movie-pic-9.jpg";
import Preloader from "../Preloader/Preloader";
import "./style.css";

function MoviesCardList() {
  return (
    <>
      <section className="movies-cardlist">
        {/*<Preloader />*/}
        <div className="movies-cardlist__grid">
          <MoviesCard src={moviePoster1} alt="постер к фильму 1" />
          <MoviesCard src={moviePoster2} alt="постер к фильму 2" saved />
          <MoviesCard src={moviePoster3} alt="постер к фильму 3" />
          <MoviesCard src={moviePoster4} alt="постер к фильму 4" />
          <MoviesCard src={moviePoster5} alt="постер к фильму 5" />
          <MoviesCard src={moviePoster6} alt="постер к фильму 6" />
          <MoviesCard src={moviePoster7} alt="постер к фильму 7" />
          <MoviesCard src={moviePoster8} alt="постер к фильму 8" />
          <MoviesCard src={moviePoster9} alt="постер к фильму 9" />
        </div>
        <MoreButton />
      </section>
    </>
  );
}

export default MoviesCardList;
