import React, { useEffect, useState, useContext } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './style.css';
import useMoviesCardList from '../../hooks/useMoviesCardList';
import mainApi from '../../utils/MainApi';
import DeleteButton from '../DeleteButton/DeleteButton';
import CurrentUserContext from '../../utils/CurrentUserContext';

function SavedMoviesCardList({ movies, loading, searching }) {
  // хук по расположению карточек на странице
  const [availableMovies, setAvailableMovies] = useState(movies);
  const { visibleCards } = useMoviesCardList(availableMovies);
  const { setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => setAvailableMovies(movies), [movies]);

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

  // если фильмы в отфильтрованном массиве есть, то рендерим карточки
  // если массив пустой, то проверяем был ли поиск
  // и возвращаем пустой блок либо "ничего не найдено"
  const cardsMarkup =
    visibleCards.length > 0 ? (
      <div className="movies-cardlist__grid">
        {visibleCards.map((card) => {
          const button = (
            <DeleteButton
              onClick={() => {
                deleteMovie(card.movieId);
              }}
            />
          );

          return (
            <MoviesCard
              key={card.movieId}
              image={card.image}
              title={card.nameRU}
              time={card.duration}
              button={button}
            />
          );
        })}
      </div>
    ) : searching ? (
      <p>Ничего не найдено</p>
    ) : null;

  return (
    <section className="movies-cardlist">
      {loading && <Preloader />}
      {cardsMarkup}
    </section>
  );
}

export default SavedMoviesCardList;
