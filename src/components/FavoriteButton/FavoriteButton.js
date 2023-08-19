import { ReactComponent as Icon } from "../../images/fav-button.svg";
import { ReactComponent as IconActive } from "../../images/fav-button_active.svg";
import "./style.css";
import React from "react";

function FavoriteButton({ onClick, active }) {
  return (
    <button className="favorite-button" type="button" onClick={onClick}>
      {active ? <IconActive /> : <Icon />}
    </button>
  );
}

export default FavoriteButton;
