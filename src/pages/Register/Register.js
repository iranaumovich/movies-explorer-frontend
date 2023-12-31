import React from "react";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import TextField from "../../components/TextField/TextField";
import FormButton from "../../components/FormButton/FormButton";

function Register() {
  return (
    <main className="main">
      <section className="entrance">
        <div className="entrance__container">
          <div className="entrance__header">
            <Link to="/">
              <img
                className="entrance__logo link"
                alt="Логотип сайта"
                src={Logo}
              />
            </Link>
            <h1 className="entrance__title">Добро пожаловать!</h1>
          </div>
          <form className="form">
            <div className="form__items">
              <TextField
                type="text"
                id="name"
                name="name"
                lableText="Имя"
                placeholder="Введите имя"
                minLength="2"
                maxLength="30"
              />
              <TextField
                type="email"
                id="email"
                name="email"
                lableText="E-mail"
                placeholder="Введите email"
                isRight
                minLength="2"
                maxLength="30"
              />
              <TextField
                type="password"
                id="password"
                name="password"
                lableText="Пароль"
                placeholder="Введите пароль"
                minLength="2"
                maxLength="30"
                isError
              />
            </div>

            <FormButton buttonText="Зарегистрироваться" />
          </form>
          <p className="entrance__footer">
            Уже зарегистрированы?{" "}
            <Link to="/signin" className="entrance__link link">
              Войти
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Register;
