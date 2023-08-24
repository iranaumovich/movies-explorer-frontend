import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './style.css';
import useMoviesCardList from '../../hooks/useMoviesCardList';
import DeleteButton from '../DeleteButton/DeleteButton';

function SavedMoviesCardList({ movies, loading, searching, onDelete }) {
  // хук по расположению карточек на странице
  const { visibleCards } = useMoviesCardList(movies);

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
                onDelete(card.movieId);
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
