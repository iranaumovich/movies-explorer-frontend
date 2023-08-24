import React, { useState, useEffect, useContext } from 'react';
import FormButton from '../FormButton/FormButton';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import CurrentUserContext from '../../utils/CurrentUserContext';

import './style.css';
import useProfile from '../../hooks/useProfile';
import { EMAIL_PATTERN } from '../../utils/environment';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);
  const { changing, changeProfile, error, isSuccess, signOut } = useProfile();
  const { dirty, values, setValues, resetForm, handleChange, errors, isValid } =
    useFormAndValidation({
      name: currentUser.name,
      email: currentUser.email,
    });

  // после загрузки текущего пользователя из API
  // его данные будут записаны в инпуты.
  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) {
      return;
    }

    const { name, email } = values;

    changeProfile(name, email);

    if (!error) {
      resetForm();
      setIsEditing(false);
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>

          <form noValidate className="profile__form" onSubmit={handleSubmit}>
            <div className="profile__items">
              <div className="profile__item">
                <label htmlFor="name" className="profile__lable">
                  Имя
                </label>
                <input
                  autoComplete="off"
                  className="profile__input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder={currentUser.name}
                  disabled={!isEditing || changing}
                  minLength="2"
                  maxLength="30"
                  required
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <div className="profile__item">
                <label htmlFor="email" className="profile__lable">
                  Почта
                </label>
                <input
                  autoComplete="off"
                  className="profile__input"
                  type="text"
                  id="email"
                  name="email"
                  pattern={EMAIL_PATTERN}
                  placeholder={currentUser.email}
                  disabled={!isEditing || changing}
                  minLength="2"
                  required
                  maxLength="30"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            {isSuccess && (
              <p className="profile__confirmation">
                Изменения были успешно сохранены ✓
              </p>
            )}
            {error && (
              <span className="profile__error profile__error_visible">
                Произошла ошибка
              </span>
            )}
            {isEditing ? (
              <div className="profile__button">
                <span
                  className={`profile__error ${
                    errors ? 'profile__error_visible' : ''
                  }`}>
                  {[errors.name, errors.email]}
                </span>
                <FormButton
                  disabled={!dirty || changing}
                  buttonText="Сохранить"
                  isValid={isValid}
                />
              </div>
            ) : (
              <div className="profile__account">
                <button
                  className="profile__edit"
                  type="button"
                  disabled={changing}
                  onClick={handleEditClick}>
                  Редактировать
                </button>
                <button
                  type="button"
                  disabled={changing}
                  className="profile__log-out link"
                  onClick={signOut}>
                  Выйти из аккаунта
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Profile;
