import React, { useRef } from "react";
import "./style.css";

function SearchForm({ initialValue, onSubmit }) {
  const inputRef = useRef(null);

  //получаем значение инпута по нажатию на кнопку
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(inputRef.current.value);
  };

  return (
    <div className="search-form">
      <div className="search-form__field">
        <input
          ref={inputRef}
          className="search-form__input"
          placeholder="Фильм"
          type="text"
          required
          defaultValue={initialValue}
        />
        <button
          type="submit"
          className="search-form__btn"
          onClick={handleSubmit}
        >
          Найти
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
