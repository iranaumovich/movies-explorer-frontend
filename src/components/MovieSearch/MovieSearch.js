import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./style.css";

function MovieSearch() {
  return (
    <div className="movie-search">
      <SearchForm />
      <div className="movie-search__filter-container">
        <p className="movie-search__filter-name">Короткометражки</p>
        <FilterCheckbox />
      </div>
    </div>
  );
}

export default MovieSearch;
