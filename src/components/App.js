import React, { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import Register from './Register/Register';
import Page from './Page/Page';
import Error from './Error/Error';
import ScrollToHashElement from './ScrollToHashElement/ScrollToHashElement';
import ProtectedRouteElement from './ProtectedRoute/ProtectedRoute';

import CurrentUserContext from '../utils/CurrentUserContext';
import { ROUTES } from '../utils/environment';
import useLogin from '../hooks/useLogin';

function App() {
  const { currentUser } = useContext(CurrentUserContext);
  const { autoLogin, loggingIn } = useLogin();
  // проверяем токен при загрузке страницы, чтобы узнать авторизован ли пользователь
  useEffect(() => {
    !currentUser.loggedIn && autoLogin();
  }, [currentUser]);

  if (loggingIn) {
    return null;
  }

  return (
    // подключаем контекст userData, оборачиваем в него все содержимое компонента App,
    // контекст возвращает то, что записано в value
    <div className="page">
      <ScrollToHashElement />
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <Page hasFooter>
              <Main />
            </Page>
          }
        />
        <Route
          path={ROUTES.MOVIES}
          element={
            <Page hasFooter>
              <ProtectedRouteElement
                element={Movies}
                loggedIn={currentUser.loggedIn}
              />
            </Page>
          }
        />
        <Route
          path={ROUTES.SAVED_MOVIES}
          element={
            <Page hasFooter>
              <ProtectedRouteElement
                element={SavedMovies}
                loggedIn={currentUser.loggedIn}
              />
            </Page>
          }
        />
        <Route
          path={ROUTES.PROFILE}
          element={
            <Page>
              <ProtectedRouteElement
                element={Profile}
                loggedIn={currentUser.loggedIn}
              />
            </Page>
          }
        />
        <Route path={ROUTES.SIGN_IN} element={<Login />} />
        <Route path={ROUTES.SIGN_UP} element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
