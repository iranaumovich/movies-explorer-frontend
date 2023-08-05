import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="page-error">
      <div className="page-error__container">
        <p className="page-error__number">404</p>
        <p className="page-error__text">Страница не найдена</p>
      </div>
      <Link
        to="/signin"
        className="page-error__link link"
        onClick={() => navigate(-1)}
      >
        Назад
      </Link>
    </div>
  );
}

export default Error;
