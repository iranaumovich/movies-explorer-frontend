import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./style.css";

function MovieSearch({ initialValue, filterShorts, onSubmit, onToggleShorts }) {
  return (
    <section>
      <form className="movie-search">
        <SearchForm initialValue={initialValue} onSubmit={onSubmit} />
        <div className="movie-search__filter-container">
          <p className="movie-search__filter-name">Короткометражки</p>
          <FilterCheckbox onChange={onToggleShorts} checked={filterShorts} />
        </div>
      </form>
    </section>
  );
}

export default MovieSearch;
