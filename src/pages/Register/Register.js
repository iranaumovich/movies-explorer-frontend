import React from "react";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import TextField from "../../components/TextField/TextField";
import FormButton from "../../components/FormButton/FormButton";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Register({ handleRegister }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) {
      return;
    }
    const { name, email, password } = values;
    handleRegister(name, email, password);
  }

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
          <form noValidate className="form" onSubmit={handleSubmit}>
            <div className="form__items">
              <TextField
                type="text"
                id="name"
                name="name"
                lableText="Имя"
                placeholder="Введите имя"
                minLength="2"
                maxLength="30"
                value={values.name}
                handleChange={handleChange}
                errors={errors.name}
              />
              <TextField
                type="email"
                id="email"
                name="email"
                lableText="E-mail"
                placeholder="Введите email"
                minLength="2"
                maxLength="30"
                value={values.email}
                handleChange={handleChange}
                errors={errors.email}
              />
              <TextField
                type="password"
                id="password"
                name="password"
                lableText="Пароль"
                placeholder="Введите пароль"
                minLength="2"
                maxLength="30"
                value={values.password}
                handleChange={handleChange}
                errors={errors.password}
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
