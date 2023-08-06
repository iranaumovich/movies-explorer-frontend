import React from "react";
import { Link } from "react-router-dom";
import FormButton from "../../components/FormButton/FormButton";

import "./style.css";

function Profile({ isEditing, onEditClick }) {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, Виталий!</h1>

          <form className="profile__form">
            <div className="profile__items">
              <div className="profile__item">
                <label for="name" className="profile__lable">
                  Имя
                </label>
                <input
                  autoComplete="off"
                  className="profile__input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Виталий"
                  disabled={isEditing ? false : true}
                ></input>
              </div>
              <div className="profile__item">
                <label for="email" className="profile__lable">
                  Почта
                </label>
                <input
                  autoComplete="off"
                  className="profile__input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="pochta@yandex.ru"
                  disabled={isEditing ? false : true}
                ></input>
              </div>
            </div>

            {isEditing ? (
              <div className="profile__button">
                <span className="profile__error profile__error_visible">
                  При обновлении профиля произошла ошибка.
                </span>
                <FormButton buttonText="Сохранить" />
              </div>
            ) : (
              <div className="profile__account">
                <button className="profile__edit" onClick={onEditClick}>
                  Редактировать
                </button>
                <Link to="/signin" className="profile__log-out link">
                  Выйти из аккаунта
                </Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Profile;
