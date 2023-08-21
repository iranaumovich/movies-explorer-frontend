import React, { useState, useEffect, useContext } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../MoreButton/MoreButton';
import Preloader from '../Preloader/Preloader';
import './style.css';
import useMoviesCardList from '../../hooks/useMoviesCardList';
import { API_BASE_URL } from '../../utils/environment';
import mainApi from '../../utils/MainApi';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import CurrentUserContext from '../../utils/CurrentUserContext';

function MoviesCardList({ movies, loading, searching, hasError }) {
  // хук по расположению карточек на странице
  const { visibleCards, handleButtonClick } = useMoviesCardList(movies);
  const {
    currentUser: { savedMovies },
    setCurrentUser,
  } = useContext(CurrentUserContext);
  const [savedMovieIds, setSavedMovieIds] = useState(() =>
    savedMovies.map(({ movieId }) => movieId),
  );

  useEffect(() => {
    setSavedMovieIds(savedMovies.map(({ movieId }) => movieId));
  }, [savedMovies]);

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
      <>
        <div className="movies-cardlist__grid">
          {visibleCards.map((card) => {
            const isFavorite = savedMovieIds.includes(card.id);
            const handleFavoriteClick = () =>
              isFavorite ? deleteMovie(card.id) : saveMovie(card);
            const button = (
              <FavoriteButton
                onClick={handleFavoriteClick}
                active={isFavorite}
              />
            );

            return (
              <MoviesCard
                key={card.id}
                image={API_BASE_URL + card.image.url}
                title={card.nameRU}
                time={card.duration}
                button={button}
              />
            );
          })}
        </div>
        {visibleCards.length < movies.length && (
          <MoreButton onClick={handleButtonClick} />
        )}
      </>
    ) : searching ? (
      <p>Ничего не найдено</p>
    ) : null;

  // если приходит ошибка от сервера, то показываем текст, иначе вставляем карточки
  const errorMarkup = hasError ? (
    <p>
      Во время запроса произошла ошибка. Возможно, проблема с соединением или
      сервер недоступен. Подождите немного и попробуйте ещё раз
    </p>
  ) : (
    <>
      {loading && <Preloader />}
      {cardsMarkup}
    </>
  );

  return <section className="movies-cardlist">{errorMarkup}</section>;
}

export default MoviesCardList;
