import { MAIN_API_URL } from "../utils/environment";
import { API_BASE_URL } from "../utils/environment";

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  setAuthToken(token) {
    this._headers["Authorization"] = "Bearer " + token;
  }

  getUserInfoFromServer() {
    return fetch(`${this._baseUrl}/users/me `, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  editUserInfo(newName, newEmail) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: newName,
        email: newEmail,
      }),
    }).then(this._checkResponse);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies `, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  createSavedMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: API_BASE_URL + movie.image.url,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: API_BASE_URL + movie.image.url,
        movieId: movie.id,
      }),
    }).then(this._checkResponse);
  }

  deleteSavedMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id} `, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: MAIN_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
