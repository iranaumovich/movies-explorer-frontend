const {
  REACT_APP_API_BASE_URL = "https://api.nomoreparties.co",
  REACT_APP_MOVIES_API_URL = "https://api.nomoreparties.co/beatfilm-movies",
  REACT_APP_MAIN_API_URL = "https://api.tsupryk.movie.nomoredomains.xyz",
} = process.env;

const API_BASE_URL = REACT_APP_API_BASE_URL;
const MOVIES_API_URL = REACT_APP_MOVIES_API_URL;
const MAIN_API_URL = REACT_APP_MAIN_API_URL;

export { API_BASE_URL, MOVIES_API_URL, MAIN_API_URL };
