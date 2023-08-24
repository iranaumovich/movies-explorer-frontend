import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../MoreButton/MoreButton';
import Preloader from '../Preloader/Preloader';
import './style.css';
import useMoviesCardList from '../../hooks/useMoviesCardList';
import { API_BASE_URL } from '../../utils/environment';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

function MoviesCardList({
  movies,
  loading,
  searching,
  hasError,
  savedMovieIds,
  onSave,
  onDelete,
}) {
  // хук по расположению карточек на странице
  const { visibleCards, handleButtonClick } = useMoviesCardList(movies);

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
              isFavorite ? onDelete(card.id) : onSave(card);
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
