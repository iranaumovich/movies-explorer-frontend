import React from 'react';
import { CURRENT_YEAR } from '../../utils/environment';
import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__info">
          <nav className="footer__links">
            <a
              href="https://practicum.yandex.ru"
              target="blank"
              className="footer__link link">
              Яндекс.Практикум
            </a>
            <a
              href="https://github.com"
              target="blank"
              className="footer__link link">
              Github
            </a>
          </nav>
          <p className="footer__copyright">&#169; {CURRENT_YEAR}</p>
        </div>
      </div>
    </footer>
  );
}
