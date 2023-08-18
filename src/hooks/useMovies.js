import React from "react";
import moviesApi from "../utils/MoviesApi";

export default function useMovies() {
  const [movies, setMovies] = React.useState([]); //массив всех фильмов, полученных с сервера
  const [query, setQuery] = React.useState(""); //поисковое слово
  const [loading, setLoading] = React.useState(false); //переменная для отображения прелодера
  const [filteredMovies, setFilteredMovies] = React.useState([]); //массив отфильтрованных фильмов
  const [error, setError] = React.useState(false);
  const [filterShorts, setFilterShorts] = React.useState(false); //чекбокс

  //получаем все карточки с сервера
  React.useEffect(() => {
    moviesApi
      .getAllMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  //фильтруем карточки по введенному слову, в начале и в конце меняем loading, чтобы отображать прелодер
  React.useEffect(() => {
    setLoading(true);
    setFilteredMovies(
      query.length > 0
        ? movies
            .filter(
              (movie) =>
                movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
                movie.nameEN.toLowerCase().includes(query.toLowerCase())
            )
            .filter((movie) => (filterShorts ? movie.duration <= 40 : true))
        : []
    );
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
