import { useState, useEffect, useContext } from 'react';
import moviesApi from '../utils/MoviesApi';
import useLocalStorage from './useLocalStorage';
import { SHORT_FILM_DURATION } from '../utils/environment';
import CurrentUserContext from '../utils/CurrentUserContext';
import mainApi from '../utils/MainApi';

export default function useMovies() {
  const { result, save } = useLocalStorage();
  const {
    currentUser: { movies, savedMovies },
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
  const [savedMovieIds, setSavedMovieIds] = useState(() =>
    savedMovies.map(({ movieId }) => movieId),
  );

  useEffect(() => {
    setSavedMovieIds(savedMovies.map(({ movieId }) => movieId));
  }, [savedMovies]);

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

  const saveMovie = (movie) => {
    // отправляем запрос в API и создаем дубликат фильма со своим id, записанным в owner
    mainApi
      .createSavedMovie(movie)
      .then((res) => {
        setCurrentUser((user) => ({
          ...user,
          savedMovies: [...user.savedMovies, res],
        }));
        setSavedMovieIds((value) => [...value, res.movieId]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteMovie = (id) => {
    // отправляем запрос в API на удаление сохраненного фильма из базы
    mainApi
      .deleteSavedMovie(id)
      .then(() => {
        const index = savedMovieIds.findIndex((movieId) => id === movieId);

        setSavedMovieIds((value) => value.toSpliced(index, 1));

        setCurrentUser((user) => {
          const index = user.savedMovies.findIndex(
            ({ movieId }) => id === movieId,
          );

          return { ...user, savedMovies: user.savedMovies.toSpliced(index, 1) };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    error,
    filteredMovies,
    saveMovie,
    deleteMovie,
    savedMovieIds,
    loading,
    query,
    setQuery,
    toggleFilterShorts,
    filterShorts,
  };
}
