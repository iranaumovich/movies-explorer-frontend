import React from "react";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import TextField from "../../components/TextField/TextField";
import FormButton from "../../components/FormButton/FormButton";

function Register() {
  return (
    <div className="entrance">
      <div className="entrance__container">
        <div className="entrance__header">
          <img className="entrance__logo" alt="Логотип сайта" src={Logo} />
          <h2 className="entrance__title">Добро пожаловать!</h2>
        </div>
        <form className="form">
          <div className="form__items">
            <TextField type="text" id="name" name="name" lableText="Имя" />
            <TextField
              type="email"
              id="email"
              name="email"
              lableText="E-mail"
              isRight
            />
            <TextField
              type="password"
              id="password"
              name="password"
              lableText="Пароль"
              isError
            />
          </div>

          <FormButton buttonText="Зарегистрироваться" />
        </form>
        <p className="entrance__footer">
          Уже зарегистрированы?{" "}
          <Link to="signin" className="entrance__link link">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
