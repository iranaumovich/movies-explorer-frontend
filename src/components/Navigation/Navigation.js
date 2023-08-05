import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

function Navigation({ isMenuOpen }) {
  const { pathname } = useLocation();

  return (
    <nav className="navigation">
      <div className="navigation__menu">
        {isMenuOpen && (
          <Link
            to="/"
            className={`navigation__link ${
              pathname === "/" ? "navigation__link_active" : ""
            } link`}
          >
            Главная
          </Link>
        )}
        <Link
          to="/movies"
          className={`navigation__link ${
            pathname === "/movies" ? "navigation__link_active" : ""
          } link`}
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className={`navigation__link ${
            pathname === "/saved-movies" ? "navigation__link_active" : ""
          } link`}
        >
          Сохранённые фильмы
        </Link>
      </div>
      <div className="navigation__account link">
        <Link to="/profile" className="navigation__account-link">
          {" "}
        </Link>
        <p className="navigation__account-text">Аккаунт</p>
        <span className="navigation__account-icon"></span>
      </div>
    </nav>
  );
}

export default Navigation;
