import React from "react";

export default function useMoviesCardList(movies) {
  const [perPage, setPerPage] = React.useState(); //количество подгружаемых карточек
  const [visibleCards, setVisibleCards] = React.useState([]); //видимые карточки
  // сколько должно отображаться карточек изначально в зависимости от размера экрана
  React.useEffect(() => {
    if (window.innerWidth < 480) {
      setVisibleCards(movies.slice(0, 5));
    } else if (window.innerWidth < 768) {
      setVisibleCards(movies.slice(0, 8));
    } else {
      setVisibleCards(movies.slice(0, 12));
    }
  }, [movies]);

  // сколько карточек дополнительно подгружается в зависимости от размера экрана
  // +setTimeout чтобы функция не срабатывала слишком часто при изменении ширины
  React.useEffect(() => {
    function listener() {
      setTimeout(() => {
        if (window.innerWidth < 1280) {
          setPerPage(2);
        } else {
          setPerPage(3);
        }
      }, 200);
    }

    listener();

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, []);

  // функция для подгрузки карточек по нажатию на кнопку "еще"
  function handleButtonClick() {
    const restCards = movies.length - visibleCards.length;
    if (restCards >= perPage) {
      setVisibleCards(movies.slice(0, visibleCards.length + perPage));
    } else {
      setVisibleCards(movies.slice(0, visibleCards.length + restCards));
    }
  }

  return { handleButtonClick, visibleCards };
}
