import React from "react";
import SearchForm from "../components/SearchForm";
import FilterCheckbox from "../components/FilterCheckbox";

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
