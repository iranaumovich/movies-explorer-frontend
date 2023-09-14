import React from 'react';
import aboutMePhoto from '../../images/photo.jpg';
import Portfolio from '../Portfolio/Portfolio';
import './style.css';

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <h2 className="title">Студент</h2>
      <article className="about-me__container">
        <img
          className="about-me__photo"
          src={aboutMePhoto}
          alt="Фотография студента"
        />
        <div className="about-me__info">
          <h2 className="about-me__name">Ирина</h2>
          <p className="about-me__description">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__text">
            Я хочу стать Frontend-разработчиком в продуктовой компании. Это
            может быть небольшая компания, которая появилась не так давно, или
            крупный игрок на рынке. Мне важно, чтобы в коллективе была тёплая
            атмосфера. Я ищу работу активно, в своём городе или удаленно.
          </p>
          <a
            href="https://github.com/iranaumovich"
            target="blank"
            className="about-me__link link">
            Github
          </a>
        </div>
      </article>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
