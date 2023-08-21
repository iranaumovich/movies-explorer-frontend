import { useState, useEffect, useContext } from 'react';
import { SHORT_FILM_DURATION } from '../utils/environment';
import CurrentUserContext from '../utils/CurrentUserContext';

export default function useSavedMovies() {
  const {
    currentUser: { savedMovies },
  } = useContext(CurrentUserContext);
  const [query, setQuery] = useState(''); // поисковое слово
  const [loading, setLoading] = useState(false); // переменная для отображения прелодера
  const [filteredMovies, setFilteredMovies] = useState([]); // массив отфильтрованных фильмов
  const [filterShorts, setFilterShorts] = useState(false); // чекбокс

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

  return {
    filteredMovies,
    loading,
    query,
    setQuery,
    toggleFilterShorts,
    filterShorts,
  };
}
