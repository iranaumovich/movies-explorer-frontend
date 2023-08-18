import { MOVIES_API_URL } from "../utils/environment";

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

  getAllMovies() {
    return fetch(this._baseUrl, {
      headers: this._headers,
    })
      .then(this._checkResponse)
      .then((data) => data);
  }
}

const moviesApi = new Api({
  baseUrl: MOVIES_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;
