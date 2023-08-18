import React from "react";
import "./style.css";

function FilterCheckbox({ onChange, checked }) {
  return (
    <label className="toggle">
      <input
        className="toggle__input"
        checked={checked}
        type="checkbox"
        onChange={onChange}
      />
      <span
        className={`toggle__slider ${checked ? "toggle__slider_active" : ""}`}
      />
    </label>
  );
}

export default FilterCheckbox;
