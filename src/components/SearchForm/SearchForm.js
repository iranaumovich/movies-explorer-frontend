import React from "react";
import "./style.css";

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__field">
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="text"
          required
        />
        <button type="submit" className="search-form__btn">
          Найти
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
