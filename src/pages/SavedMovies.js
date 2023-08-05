import Preloader from "../components/Preloader/Preloader";
import MovieSearch from "../components/MovieSearch/MovieSearch";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import Footer from "../components/Footer/Footer";

export default function SavedMovies() {
  return (
    <>
      <MovieSearch />
      <MoviesCardList />
      {/* <Preloader /> */}
    </>
  );
}
