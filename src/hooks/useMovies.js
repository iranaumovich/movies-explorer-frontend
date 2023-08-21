import { useState, useEffect, useContext } from 'react';
import moviesApi from '../utils/MoviesApi';
import useLocalStorage from './useLocalStorage';
import { SHORT_FILM_DURATION } from '../utils/environment';
import CurrentUserContext from '../utils/CurrentUserContext';

export default function useMovies() {
  const { result, save } = useLocalStorage();
  const {
    currentUser: { movies },
    setCurrentUser,
  } = useContext(CurrentUserContext);
  const [query, setQuery] = useState(() => (result ? result.query : '')); // поисковое слово
  const [loading, setLoading] = useState(false); // переменная для отображения прелодера
  const [filteredMovies, setFilteredMovies] = useState(() =>
    result ? result.filteredMovies : [],
  ); // массив отфильтрованных фильмов
  const [error, setError] = useState(false);
  const [filterShorts, setFilterShorts] = useState(() =>
    result ? result.filterShorts : false,
  ); // чекбокс

  // получаем все карточки с сервера
  useEffect(() => {
    if (movies && movies.length > 0) {
      return;
    }

    moviesApi
      .getAllMovies()
      .then((movies) => {
        setCurrentUser((user) => ({ ...user, movies }));
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  // фильтруем карточки по введенному слову, в начале и в конце меняем loading, чтобы отображать прелодер
  useEffect(() => {
    setLoading(true);

    let filteredMovies = movies;

    if (query.length > 0) {
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(query.toLowerCase()),
      );
    }

    if (filterShorts) {
      filteredMovies = filteredMovies.filter((movie) =>
        filterShorts ? movie.duration <= SHORT_FILM_DURATION : true,
      );
    }

    if (query.length === 0 && !filterShorts) {
      filteredMovies = [];
    }

    setFilteredMovies(filteredMovies);
    save({ query, filteredMovies, filterShorts });
    setLoading(false);
  }, [query, movies, filterShorts]);

  const toggleFilterShorts = () => setFilterShorts(!filterShorts);

  return {
    error,
    filteredMovies,
    loading,
    query,
    setQuery,
    toggleFilterShorts,
    filterShorts,
  };
}
