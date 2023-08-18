import { ReactComponent as Icon } from "../../images/fav-button.svg";
import { ReactComponent as IconActive } from "../../images/fav-button_active.svg";
import "./style.css";
import React from "react";

function FavoriteButton({ onClick, isSaved }) {
  return (
    <button className="favorite-button" type="button" onClick={onClick}>
      {isSaved ? <IconActive /> : <Icon />}
    </button>
  );
}

export default FavoriteButton;
