import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import TextField from '../TextField/TextField';
import FormButton from '../FormButton/FormButton';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import CurrentUserContext from '../../utils/CurrentUserContext';
import useLogin from '../../hooks/useLogin';
import { EMAIL_PATTERN, ROUTES } from '../../utils/environment';

function Login() {
  const { login, error: loginError, loggingIn } = useLogin();
  const { currentUser } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = useFormAndValidation({
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValid) {
      return;
    }

    const { email, password } = values;

    login(email, password);
  }

  if (currentUser.loggedIn) {
    return <Navigate to={ROUTES.HOME} />;
  }

  return (
    <main className="main">
      <section className="entrance">
        <div className="entrance__container">
          <div className="entrance__header">
            <Link to={ROUTES.HOME}>
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
                type="text"
                id="email"
                name="email"
                labelText="E-mail"
                pattern={EMAIL_PATTERN}
                disabled={loggingIn}
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
                labelText="Пароль"
                placeholder="Введите пароль"
                disabled={loggingIn}
                minLength="2"
                maxLength="30"
                value={values.password}
                handleChange={handleChange}
                errors={errors.password}
              />
            </div>

            <p
              className={`form__error ${
                loginError.length > 0 ? 'form__error_visible' : ''
              }`}>
              {loginError}
            </p>
            <FormButton
              disabled={loggingIn}
              buttonText="Войти"
              isValid={isValid}
            />
          </form>
          <p className="entrance__footer">
            Ещё не зарегистрированы?{' '}
            <Link to={ROUTES.SIGN_UP} className="entrance__link link">
              Регистрация
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;
