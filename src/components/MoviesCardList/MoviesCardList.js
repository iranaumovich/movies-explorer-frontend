import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoreButton from "../MoreButton/MoreButton";
import Preloader from "../Preloader/Preloader";
import "./style.css";
import useMoviesCardList from "../../hooks/useMoviesCardList";
import { API_BASE_URL } from "../../utils/environment";
import mainApi from "../../utils/MainApi";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";
import DeleteButton from "../DeleteButton/DeleteButton";
import { CurrentUserContext } from "../CurrentUserContext";

function MoviesCardList({ movies, loading, searching, hasError }) {
  // хук по расположению карточек на странице
  const { visibleCards, handleButtonClick } = useMoviesCardList(movies);
  const { savedMovies } = React.useContext(CurrentUserContext);
  const savedMovieIds = savedMovies.map(({ movieId }) => movieId);
  console.log(savedMovieIds);
  const saveMovie = (movie) => {
    // отправляем запрос в API и создаем дубликат фильма со своим id, записанным в owner
    mainApi
      .createSavedMovie(movie)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteMovie = (id) => {
    // отправляем запрос в API на удаление сохраненного фильма из базы
    mainApi
      .deleteSavedMovie(id)
      .then((res) => {
        console.log(res);
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
            const isSaved = card.owner !== undefined;
            const id = isSaved ? card.movieId : card.id;
            const image = isSaved ? card.image : API_BASE_URL + card.image.url;
            const button = isSaved ? (
              <DeleteButton onClick={() => deleteMovie(id)} />
            ) : (
              <FavoriteButton
                onClick={() =>
                  savedMovieIds.includes(id) ? deleteMovie(id) : saveMovie(card)
                }
                isSaved={savedMovieIds.includes(id)}
              />
            );

            return (
              <MoviesCard
                key={id}
                id={id}
                image={image}
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

  //если приходит ошибка от сервера, то показываем текст, иначе вставляем карточки
  const pageMarkup = hasError ? (
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

  return <section className="movies-cardlist">{pageMarkup}</section>;
}

export default MoviesCardList;
