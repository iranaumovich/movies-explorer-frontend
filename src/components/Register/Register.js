import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import TextField from '../TextField/TextField';
import FormButton from '../FormButton/FormButton';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { ROUTES } from '../../utils/environment';
import useRegister from '../../hooks/useRegister';

function Register() {
  const { register, registering, error: registerError } = useRegister();
  const { values, handleChange, errors, isValid } = useFormAndValidation({
    name: '',
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValid) {
      return;
    }

    const { name, email, password } = values;

    register(name, email, password);
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
            <h1 className="entrance__title">Добро пожаловать!</h1>
          </div>
          <form noValidate className="form" onSubmit={handleSubmit}>
            <div className="form__items">
              <TextField
                type="text"
                id="name"
                name="name"
                labelText="Имя"
                placeholder="Введите имя"
                disabled={registering}
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
                labelText="E-mail"
                placeholder="Введите email"
                disabled={registering}
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
                disabled={registering}
                minLength="2"
                maxLength="30"
                value={values.password}
                handleChange={handleChange}
                errors={errors.password}
              />
            </div>

            <p
              className={`form__error ${
                registerError.length > 0 ? 'form__error_visible' : ''
              }`}>
              {registerError}
            </p>

            <FormButton
              disabled={registering}
              isValid={isValid}
              buttonText="Зарегистрироваться"
            />
          </form>
          <p className="entrance__footer">
            Уже зарегистрированы?{' '}
            <Link to={ROUTES.SIGN_IN} className="entrance__link link">
              Войти
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Register;
