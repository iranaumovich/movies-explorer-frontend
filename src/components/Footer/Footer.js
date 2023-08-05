import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__info">
          <div className="footer__links">
            <a
              href="https://practicum.yandex.ru"
              target="blank"
              className="footer__link link"
            >
              Яндекс.Практикум
            </a>
            <a
              href="https://github.com"
              target="blank"
              className="footer__link link"
            >
              Github
            </a>
          </div>
          <p className="footer__copyright">&#169; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
