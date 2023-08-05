import React from "react";
import "./style.css";

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__field">
        <input className="search-form__input" placeholder="Фильм" />
      </div>
      <button type="submit" className="search-form__btn">
        Найти
      </button>
    </div>
  );
}

export default SearchForm;
