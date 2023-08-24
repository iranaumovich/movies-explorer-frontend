import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import movieLogo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import CurrentUserContext from '../../utils/CurrentUserContext';
import './style.css';
import { ROUTES } from '../../utils/environment';

function Header({ isMenuOpen, onBurgerClick }) {
  const { currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(ROUTES.SIGN_IN);
  };

  let container = null;

  if (currentUser.loggedIn) {
    container = (
      <>
        <div className="header__logged-account header__logged-account_type_desktop">
          <Navigation />
        </div>

        <div
          className="header__logged-account header__logged-account_type_mobile link"
          onClick={onBurgerClick}>
          <span
            className={`header__burger ${
              isMenuOpen ? 'header__burger_active' : ''
            }`}
          />
        </div>
      </>
    );
  } else {
    container = (
      <nav className="header__logged-out">
        <Link to={ROUTES.SIGN_UP} className="header__register-link link">
          Регистрация
        </Link>
        <button className="header__button" type="button" onClick={handleLogin}>
          Войти
        </button>
      </nav>
    );
  }

  return (
    <header
      className={`header ${currentUser.loggedIn ? 'header_light-theme' : ''}`}>
      <div className="header__container">
        <Link to={ROUTES.HOME}>
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
