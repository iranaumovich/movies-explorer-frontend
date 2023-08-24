/* eslint-disable no-useless-escape */

const {
  REACT_APP_API_BASE_URL = 'https://api.nomoreparties.co',
  REACT_APP_MOVIES_API_URL = 'https://api.nomoreparties.co/beatfilm-movies',
  REACT_APP_MAIN_API_URL = 'https://api.tsupryk.movie.nomoredomains.xyz',
} = process.env;

export const ROUTES = {
  HOME: '/',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  NOT_FOUND: '/404',
  MOVIES: '/movies',
  SAVED_MOVIES: '/saved-movies',
  PROFILE: '/profile',
};

export const API_BASE_URL = REACT_APP_API_BASE_URL;
export const MOVIES_API_URL = REACT_APP_MOVIES_API_URL;
export const MAIN_API_URL = REACT_APP_MAIN_API_URL;

export const CURRENT_YEAR = new Date().getFullYear();
export const SHORT_FILM_DURATION = 40;

export const MEDIA_QUERY_SM = 480;
export const MEDIA_QUERY_MD = 768;
export const MEDIA_QUERY_LG = 1280;

export const VISIBLE_CARDS_SM = 5;
export const VISIBLE_CARDS_MD = 8;
export const VISIBLE_CARDS_LG = 12;

export const CARDS_PER_PAGE_MD = 2;
export const CARDS_PER_PAGE_LG = 3;

export const AUTH_ENDPOINTS = {
  SIGN_UP: `${MAIN_API_URL}/signup`,
  SIGN_IN: `${MAIN_API_URL}/signin`,
  CURRENT_USER: `${MAIN_API_URL}/users/me`,
};

export const EMAIL_PATTERN =
  '[A-Za-z0-9\\._+\\-]+@[A-Za-z0-9\\.\\-]+\\.[A-Za-z]{2,}';
