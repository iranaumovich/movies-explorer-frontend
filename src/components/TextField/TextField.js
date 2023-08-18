import React from "react";
import "./style.css";

function TextField({
  value,
  handleChange,
  errors,
  type,
  id,
  name,
  lableText,
  placeholder,
  minLength,
  maxLength,
}) {
  return (
    <div className="text-field">
      <label className="text-field__label" htmlFor={id}>
        {lableText}
      </label>
      <input
        className={`text-field__control ${
          errors ? "text-field__control_type_error" : ""
        } ${
          !errors && value.length > 0 ? "text-field__control_type_right" : ""
        }`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        required
        value={value || ""}
        onChange={handleChange}
      />
      <span
        className={`text-field__error ${
          errors ? "text-field__error_visible" : ""
        }`}
      >
        {errors}
      </span>
    </div>
  );
}

export default TextField;
