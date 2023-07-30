import React from "react";

function FilterCheckbox() {
  return (
    <label className="toggle">
      <input className="toggle__input" type="toggle__checkbox" />
      <span className="toggle__slider toggle__slider_active" />
    </label>
  );
}

export default FilterCheckbox;
