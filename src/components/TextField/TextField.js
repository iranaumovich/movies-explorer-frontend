import React from "react";
import "./style.css";

function TextField({ type, id, name, lableText, isError, isRight }) {
  return (
    <div className="text-field">
      <label className="text-field__label" for={id}>
        {lableText}
      </label>
      <input
        className={`text-field__control ${
          isRight && "text-field__control_type_right"
        } ${isError && "text-field__control_type_error"}`}
        type={type}
        id={id}
        name={name}
        required
      />
      <span
        className={`text-field__error ${
          isError && "text-field__error_visible"
        }`}
      >
        Что-то пошло не так...
      </span>
    </div>
  );
}

export default TextField;
