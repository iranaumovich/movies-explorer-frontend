import React from 'react';
import './style.css';

function FormButton({ buttonText, disabled, isValid }) {
  return (
    <button
      className="form-button"
      type="submit"
      disabled={!isValid || disabled}>
      {buttonText}
    </button>
  );
}

export default FormButton;
