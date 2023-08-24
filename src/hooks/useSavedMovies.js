import { useState, useEffect, useContext } from 'react';
import { SHORT_FILM_DURATION } from '../utils/environment';
import CurrentUserContext from '../utils/CurrentUserContext';
import mainApi from '../utils/MainApi';

export default function useSavedMovies() {
  const {
    currentUser: { savedMovies },
    setCurrentUser,
  } = useContext(CurrentUserContext);
  const [query, setQuery] = useState(''); // поисковое слово
  const [loading, setLoading] = useState(false); // переменная для отображения прелодера
  const [filteredMovies, setFilteredMovies] = useState([]); // массив отфильтрованных фильмов
  const [filterShorts, setFilterShorts] = useState(false); // чекбокс
  const [availableMovies, setAvailableMovies] = useState(filteredMovies);

  useEffect(() => setAvailableMovies(filteredMovies), [filteredMovies]);

  // фильтруем карточки по введенному слову, в начале и в конце меняем loading, чтобы отображать прелодер
  useEffect(() => {
    setLoading(true);

    let filteredMovies = savedMovies;

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

    setFilteredMovies(filteredMovies);
    setLoading(false);
  }, [query, savedMovies, filterShorts]);

  const toggleFilterShorts = () => setFilterShorts(!filterShorts);

  const deleteMovie = (id) => {
    // отправляем запрос в API на удаление сохраненного фильма из базы
    mainApi
      .deleteSavedMovie(id)
      .then(() => {
        const index = availableMovies.findIndex(
          ({ movieId }) => id === movieId,
        );

        setAvailableMovies((value) => value.toSpliced(index, 1));

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
    filteredMovies,
    loading,
    query,
    deleteMovie,
    setQuery,
    toggleFilterShorts,
    filterShorts,
  };
}
