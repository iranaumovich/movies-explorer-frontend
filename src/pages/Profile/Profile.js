import React from "react";
import { Link } from "react-router-dom";
import FormButton from "../../components/FormButton/FormButton";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { CurrentUserContext } from "../../components/CurrentUserContext";
import { useNavigate } from "react-router-dom";

import "./style.css";

function Profile({ onLogout, onUpdateUser }) {
  const { currentUser } = React.useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = React.useState(false);
  const { values, setValues, handleChange, errors, isValid, setIsValid } =
    useFormAndValidation({
      name: "",
      email: "",
    });
  const navigate = useNavigate();
  const [confirmation, setConfirmation] = React.useState("");

  // после загрузки текущего пользователя из API
  // его данные будут записаны в инпуты.
  React.useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser, setValues]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValid) {
      return;
    }

    const { name, email } = values;
    onUpdateUser(name, email);
    setIsEditing(false);
    setConfirmation("изменения были успешно добавлены ✓");
  }

  function signOut() {
    localStorage.removeItem("token");
    onLogout();
    navigate("/signin", { replace: true });
  }

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
                  disabled={isEditing ? false : true}
                  minLength="2"
                  maxLength="30"
                  value={values.name || ""}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="profile__item">
                <label htmlFor="email" className="profile__lable">
                  Почта
                </label>
                <input
                  autoComplete="off"
                  className="profile__input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder={currentUser.email}
                  disabled={isEditing ? false : true}
                  minLength="2"
                  maxLength="30"
                  value={values.email || ""}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <p className="profile__confirmation">{confirmation}</p>

            {isEditing ? (
              <div className="profile__button">
                <span
                  className={`profile__error ${
                    errors ? "profile__error_visible" : ""
                  }`}
                >
                  {[errors.name, errors.email]}
                </span>
                <FormButton buttonText="Сохранить" isValid={isValid} />
              </div>
            ) : (
              <div className="profile__account">
                <button
                  className="profile__edit"
                  type="button"
                  onClick={() => {
                    setIsEditing(!isEditing);
                    setConfirmation("");
                  }}
                >
                  Редактировать
                </button>
                <Link
                  to="/signin"
                  className="profile__log-out link"
                  onClick={signOut}
                >
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
