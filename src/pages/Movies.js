import MovieSearch from "../components/MovieSearch/MovieSearch";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import React from "react";
import useMovies from "../hooks/useMovies";

export default function Movies() {
  // хук по получению и фильтрации карточек
  const {
    error,
    filteredMovies,
    loading,
    query,
    setQuery,
    toggleFilterShorts,
    filterShorts,
  } = useMovies();

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
