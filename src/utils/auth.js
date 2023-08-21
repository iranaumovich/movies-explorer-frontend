import { AUTH_ENDPOINTS } from './environment';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(Error(`Ошибка: ${res.status}`));
}

export const register = (name, email, password) => {
  return fetch(AUTH_ENDPOINTS.SIGN_UP, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

export const login = (email, password) => {
  return fetch(AUTH_ENDPOINTS.SIGN_IN, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(checkResponse)
    .then((data) => {
      localStorage.setItem('token', data.token);

      return data;
    });
};

export const getCurrentUser = (token) => {
  return fetch(AUTH_ENDPOINTS.CURRENT_USER, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
