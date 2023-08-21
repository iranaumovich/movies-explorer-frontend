import { useState, useEffect } from 'react';
import {
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  VISIBLE_CARDS_SM,
  VISIBLE_CARDS_MD,
  VISIBLE_CARDS_LG,
  CARDS_PER_PAGE_MD,
  CARDS_PER_PAGE_LG,
} from '../utils/environment';

export default function useMoviesCardList(movies) {
  const [perPage, setPerPage] = useState(); // количество подгружаемых карточек
  const [visibleCards, setVisibleCards] = useState([]); // видимые карточки
  //  сколько должно отображаться карточек изначально в зависимости от размера экрана
  useEffect(() => {
    if (window.innerWidth < MEDIA_QUERY_SM) {
      setVisibleCards(movies.slice(0, VISIBLE_CARDS_SM));
    } else if (window.innerWidth < MEDIA_QUERY_MD) {
      setVisibleCards(movies.slice(0, VISIBLE_CARDS_MD));
    } else {
      setVisibleCards(movies.slice(0, VISIBLE_CARDS_LG));
    }
  }, []);

  useEffect(() => setVisibleCards(movies), [movies]);

  //  сколько карточек дополнительно подгружается в зависимости от размера экрана
  //  +setTimeout чтобы функция не срабатывала слишком часто при изменении ширины
  useEffect(() => {
    function listener() {
      setTimeout(() => {
        if (window.innerWidth < MEDIA_QUERY_LG) {
          setPerPage(CARDS_PER_PAGE_MD);
        } else {
          setPerPage(CARDS_PER_PAGE_LG);
        }
      }, 200);
    }

    listener();

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, []);

  //  функция для подгрузки карточек по нажатию на кнопку "еще"
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
