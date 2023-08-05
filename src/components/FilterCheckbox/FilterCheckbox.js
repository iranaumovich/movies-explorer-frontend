import React, { useState } from "react";
import "./style.css";

function FilterCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="toggle">
      <input
        className="toggle__input"
        checked={checked}
        type="checkbox"
        onChange={() => setChecked(!checked)}
      />
      <span
        className={`toggle__slider ${checked ? "toggle__slider_active" : ""}`}
      />
    </label>
  );
}

export default FilterCheckbox;
