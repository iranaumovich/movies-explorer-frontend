import MovieSearch from "../components/MovieSearch/MovieSearch";
import SavedMoviesCardList from "../components/SavedMoviesCardList/SavedMoviesCardList";
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
      <SavedMoviesCardList
        hasError={error}
        movies={filteredMovies}
        loading={loading}
        searching={query.length > 0}
      />
    </main>
  );
}
