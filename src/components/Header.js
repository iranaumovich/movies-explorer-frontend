import React from "react";
import movieLogo from "../images/logo.svg";
import MobileMenu from "./MobileMenu.js";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      {/* <MobileMenu /> */}
      <div className="header__container">
        <img
          className="header__logo"
          src={movieLogo}
          alt="Логотип сервиса по поиску фильмов"
        />
        <div className="header__account">
          <Link to="/sign-up" className="header__link">
            Регистрация
          </Link>
          <button className="header__button">Войти</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
