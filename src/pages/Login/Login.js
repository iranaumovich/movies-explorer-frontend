import React from "react";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import TextField from "../../components/TextField/TextField";
import FormButton from "../../components/FormButton/FormButton";

function Login() {
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
            <h1 className="entrance__title">Рады видеть!</h1>
          </div>
          <form className="form">
            <div className="form__items">
              <TextField
                type="email"
                id="email"
                name="email"
                lableText="E-mail"
                isRight
                placeholder="Введите email"
                minLength="2"
                maxLength="30"
              />
              <TextField
                type="password"
                id="password"
                name="password"
                lableText="Пароль"
                placeholder="Введите пароль"
                isError
                minLength="2"
                maxLength="30"
              />
            </div>

            <FormButton buttonText="Войти" />
          </form>
          <p className="entrance__footer">
            Ещё не зарегистрированы?{" "}
            <Link to="/signup" className="entrance__link link">
              Регистрация
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;
