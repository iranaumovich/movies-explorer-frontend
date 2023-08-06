import React from "react";
import "./style.css";

function FormButton({ buttonText }) {
  return (
    <button className="form-button" type="submit">
      {buttonText}
    </button>
  );
}

export default FormButton;
