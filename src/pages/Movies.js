import Preloader from "../components/Preloader";
import MovieSearch from "../components/MovieSearch";
import MoviesCardList from "../components/MoviesCardList";

export default function Movies() {
  return (
    <>
      <MovieSearch />
      <MoviesCardList />
      {/* <Preloader /> */}
    </>
  );
}
