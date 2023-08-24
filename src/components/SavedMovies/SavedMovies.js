import React from 'react';
import MovieSearch from '../MovieSearch/MovieSearch';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import useSavedMovies from '../../hooks/useSavedMovies';

export default function SavedMovies() {
  const {
    filteredMovies,
    loading,
    query,
    setQuery,
    deleteMovie,
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
        movies={filteredMovies}
        loading={loading}
        searching={query.length > 0}
        onDelete={deleteMovie}
      />
    </main>
  );
}
