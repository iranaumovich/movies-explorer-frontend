import React from 'react';
import { ReactComponent as DeleteIcon } from '../../images/delete-button.svg';
import './style.css';

function DeleteButton({ onClick }) {
  return (
    <button className="delete-button" type="button" onClick={onClick}>
      <DeleteIcon />
    </button>
  );
}

export default DeleteButton;
