import { useNavigate, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { login as loginRequest, getCurrentUser } from '../utils/auth';
import { ROUTES } from '../utils/environment';
import mainApi from '../utils/MainApi';
import CurrentUserContext from '../utils/CurrentUserContext';

export default function useLogin() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [error, setError] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  const login = (email, password) => {
    setError('');
    setLoggingIn(true);
    loginRequest(email, password)
      .then((data) => {
        if (data.token) {
          mainApi.setAuthToken(data.token);

          return data.token;
        }

        throw Error('Неправильный логин и/или пароль');
      })
      .then(getCurrentUser)
      .then((user) => {
        setCurrentUser({ ...user, loggedIn: true });
      })
      .then(() => mainApi.getSavedMovies())
      .then(({ data }) => {
        setCurrentUser((user) => ({ ...user, savedMovies: data }));
        navigate(ROUTES.MOVIES, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setError('Ошибка авторизации');
      })
      .finally(() => {
        setLoggingIn(false);
      });
  };

  const autoLogin = () => {
    const token = localStorage.getItem('token');

    if (token) {
      setLoggingIn(true);
      getCurrentUser(token)
        .then((loggedInUser) => {
          setCurrentUser((user) => ({
            ...user,
            ...loggedInUser,
            loggedIn: true,
          }));
          mainApi.setAuthToken(token);
        })
        .then(() => mainApi.getSavedMovies())
        .then(({ data }) => {
          setCurrentUser((user) => ({ ...user, savedMovies: data }));
          navigate(pathname, { replace: true });
        })
        .catch((err) => {
          console.log(err.message);
          setError('Ошибка авторизации');
        })
        .finally(() => {
          setLoggingIn(false);
        });
    }
  };

  return {
    error,
    loggingIn,
    login,
    autoLogin,
  };
}
