import React, { useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Movies from "./pages/Movies";
import SavedMovies from "./pages/SavedMovies";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Page from "./components/Page/Page";
import Error from "./components/Error/Error";

import * as auth from "./utils/auth";
import mainApi from "./utils/MainApi";
import moviesApi from "./utils/MoviesApi";
import { useNavigate } from "react-router-dom";
import ProtectedRouteElement from "./components/ProtectedRoute";
import ScrollToHashElement from "./ScrollToHashElement";
import { CurrentUserContext } from "./components/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    id: "",
    name: "",
    email: "",
  });
  const [savedMovies, setSavedMovies] = React.useState([]);
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = React.useState(false);

  //проверяем токен при загрузке страницы, чтобы узнать авторизован ли пользователь
  React.useEffect(() => {
    function checkToken() {
      if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token");

        if (token) {
          auth
            .getContentByToken(token)
            .then((res) => {
              if (res) {
                mainApi.setAuthToken(token);
                setLoggedIn(true);
                setCurrentUser({
                  id: res._id,
                  name: res.name,
                  email: res.email,
                });
                mainApi
                  .getSavedMovies()
                  .then((res) => setSavedMovies(res.data));
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    }

    !loggedIn && checkToken();
  }, [loggedIn, navigate]);

  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then((res) => {
        setLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin(email, password) {
    auth
      .login(email, password)
      .then((data) => {
        if (data.token) {
          mainApi.setAuthToken(data.token);
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleProfileChange(name, email) {
    mainApi
      .editUserInfo(name, email)
      .then((userData) => {
        setCurrentUser({
          id: userData.id,
          name: userData.name,
          email: userData.email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
    setLoggedIn(false);
  }

  return (
    //подключаем контекст userData, оборачиваем в него все содержимое компонента App,
    //контекст возвращает то, что записано в value
    <CurrentUserContext.Provider value={{ currentUser, loggedIn, savedMovies }}>
      <div className="page">
        <ScrollToHashElement />
        <Routes>
          <Route
            path="/"
            element={
              <Page hasFooter>
                <Main />
              </Page>
            }
          />
          <Route
            path="/movies"
            element={
              <Page hasFooter>
                <ProtectedRouteElement element={Movies} loggedIn={loggedIn} />
              </Page>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <Page hasFooter>
                <ProtectedRouteElement
                  element={SavedMovies}
                  loggedIn={loggedIn}
                />
              </Page>
            }
          />
          <Route
            path="/profile"
            element={
              <Page>
                <ProtectedRouteElement
                  element={Profile}
                  loggedIn={loggedIn}
                  onLogout={handleLogout}
                  onUpdateUser={handleProfileChange}
                />
              </Page>
            }
          />
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/signup"
            element={<Register handleRegister={handleRegister} />}
          />
          <Route path="/404" element={<Error />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
