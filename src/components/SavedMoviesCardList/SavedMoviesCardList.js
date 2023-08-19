import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./style.css";
import useMoviesCardList from "../../hooks/useMoviesCardList";
import mainApi from "../../utils/MainApi";
import DeleteButton from "../DeleteButton/DeleteButton";

function SavedMoviesCardList({ movies, loading, searching, hasError }) {
  // хук по расположению карточек на странице
  const [availableMovies, setAvailableMovies] = useState(movies);
  const { visibleCards } = useMoviesCardList(availableMovies);

  useEffect(() => setAvailableMovies(movies), [movies]);

  const deleteMovie = (id) => {
    // отправляем запрос в API на удаление сохраненного фильма из базы
    mainApi
      .deleteSavedMovie(id)
      .then(() => {
        const index = availableMovies.findIndex(
          ({ movieId }) => id === movieId
        );

        setAvailableMovies((value) => value.toSpliced(index, 1));
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
      </>
    ) : searching ? (
      <p>Ничего не найдено</p>
    ) : null;

  //если приходит ошибка от сервера, то показываем текст, иначе вставляем карточки
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

export default SavedMoviesCardList;
