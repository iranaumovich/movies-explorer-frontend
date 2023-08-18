import React from "react";
import "./style.css";

function FormButton({ buttonText, isValid }) {
  return (
    <button className="form-button" type="submit" disabled={!isValid}>
      {buttonText}
    </button>
  );
}

export default FormButton;
