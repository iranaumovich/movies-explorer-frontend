import MovieSearch from "../components/MovieSearch/MovieSearch";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";

export default function Movies() {
  return (
    <main className="main">
      <MovieSearch />
      <MoviesCardList />
    </main>
  );
}
