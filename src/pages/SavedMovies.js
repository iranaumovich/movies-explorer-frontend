import MovieSearch from "../components/MovieSearch/MovieSearch";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import useSavedMovies from "../hooks/useSavedMovies";

export default function SavedMovies() {
  const {
    error,
    filteredMovies,
    loading,
    query,
    setQuery,
    toggleFilterShorts,
    filterShorts,
  } = useSavedMovies();

  return (
    <main className="main">
      <MovieSearch
        onSubmit={setQuery}
        onToggleShorts={toggleFilterShorts}
        filterShorts={filterShorts}
      />
      <MoviesCardList
        hasError={error}
        movies={filteredMovies}
        loading={loading}
        searching={query.length > 0}
      />
    </main>
  );
}
