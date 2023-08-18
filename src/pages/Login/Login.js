import React from "react";
import Logo from "../../images/logo.svg";
import { Link, useNavigate, Navigate } from "react-router-dom";
import TextField from "../../components/TextField/TextField";
import FormButton from "../../components/FormButton/FormButton";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { CurrentUserContext } from "../../components/CurrentUserContext";

function Login({ handleLogin }) {
  const { loggedIn } = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = useFormAndValidation({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValid) {
      return;
    }

    const { email, password } = values;
    handleLogin(email, password);
  }

  if (loggedIn) {
    return <Navigate to="/" />;
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
            <h1 className="entrance__title">Рады видеть!</h1>
          </div>
          <form noValidate className="form" onSubmit={handleSubmit}>
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
                isError
                minLength="2"
                maxLength="30"
                value={values.password}
                handleChange={handleChange}
                errors={errors.password}
              />
            </div>

            <FormButton buttonText="Войти" isValid={isValid} />
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
