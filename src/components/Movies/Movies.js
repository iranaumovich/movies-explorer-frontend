import React from 'react';
import MovieSearch from '../MovieSearch/MovieSearch';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import useMovies from '../../hooks/useMovies';

export default function Movies() {
  // хук по получению и фильтрации карточек
  const {
    error,
    filteredMovies,
    loading,
    query,
    savedMovieIds,
    saveMovie,
    deleteMovie,
    setQuery,
    toggleFilterShorts,
    filterShorts,
  } = useMovies();

  return (
    <main className="main">
      <MovieSearch
        initialValue={query}
        onSubmit={setQuery}
        onToggleShorts={toggleFilterShorts}
        filterShorts={filterShorts}
      />
      <MoviesCardList
        hasError={error}
        movies={filteredMovies}
        savedMovieIds={savedMovieIds}
        loading={loading}
        searching={query.length > 0}
        onSave={saveMovie}
        onDelete={deleteMovie}
      />
    </main>
  );
}
