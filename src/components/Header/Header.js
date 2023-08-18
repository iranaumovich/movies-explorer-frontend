import React from "react";
import movieLogo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../CurrentUserContext";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

function Header({ isMenuOpen, onBurgerClick }) {
  const { loggedIn } = React.useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/signin");
  };

  let container = null;

  if (loggedIn) {
    container = (
      <>
        <div className="header__logged-account header__logged-account_type_desktop">
          <Navigation />
        </div>

        <div
          className="header__logged-account header__logged-account_type_mobile link"
          onClick={onBurgerClick}
        >
          <span
            className={`header__burger ${
              isMenuOpen ? "header__burger_active" : ""
            }`}
          />
        </div>
      </>
    );
  } else {
    container = (
      <>
        <nav className="header__logged-out">
          <Link to="/signup" className="header__register-link link">
            Регистрация
          </Link>
          <button
            className="header__button"
            type="button"
            onClick={handleLogin}
          >
            Войти
          </button>
        </nav>
      </>
    );
  }

  return (
    <header className={`header ${loggedIn ? "header_light-theme" : ""}`}>
      <div className="header__container">
        <Link to="/">
          <img
            className="header__logo link"
            src={movieLogo}
            alt="Логотип сервиса по поиску фильмов"
          />
        </Link>

        {container}
      </div>
    </header>
  );
}

export default Header;
