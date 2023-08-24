import React from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../utils/environment';

function Navigation({ isMenuOpen }) {
  const { pathname } = useLocation();

  return (
    <nav className="navigation">
      <div className="navigation__menu">
        {isMenuOpen && (
          <Link
            to={ROUTES.HOME}
            className={`navigation__link ${
              pathname === ROUTES.HOME ? 'navigation__link_active' : ''
            } link`}>
            Главная
          </Link>
        )}
        <Link
          to={ROUTES.MOVIES}
          className={`navigation__link ${
            pathname === ROUTES.MOVIES ? 'navigation__link_active' : ''
          } link`}>
          Фильмы
        </Link>
        <Link
          to={ROUTES.SAVED_MOVIES}
          className={`navigation__link ${
            pathname === ROUTES.SAVED_MOVIES ? 'navigation__link_active' : ''
          } link`}>
          Сохранённые фильмы
        </Link>
      </div>
      <div className="navigation__account">
        <Link to={ROUTES.PROFILE} className="navigation__account-link link">
          <p className="navigation__account-text">Аккаунт</p>
          <span className="navigation__account-icon" />
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
