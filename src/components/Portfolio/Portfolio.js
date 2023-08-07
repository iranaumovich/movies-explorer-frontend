import React from "react";
import "./style.css";

function Portfolio() {
  return (
    <article className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            className="portfolio__link link"
            href="https://iranaumovich.github.io/how-to-learn"
            target="blank"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <span className="portfolio__link-arrow"></span>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link link"
            href="https://iranaumovich.github.io/russian-travel"
            target="blank"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <span className="portfolio__link-arrow"></span>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link link"
            href="https://tsupryk.mesto.nomoreparties.sbs"
            target="blank"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <span className="portfolio__link-arrow"></span>
          </a>
        </li>
      </ul>
    </article>
  );
}

export default Portfolio;
