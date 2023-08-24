import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  return (
    <main className="main">
      <section className="page-error">
        <div className="page-error__container">
          <h1 className="page-error__number">404</h1>
          <p className="page-error__text">Страница не найдена</p>
        </div>
        <button
          type="button"
          className="page-error__link link"
          onClick={() => navigate(-1)}>
          Назад
        </button>
      </section>
    </main>
  );
}

export default Error;
