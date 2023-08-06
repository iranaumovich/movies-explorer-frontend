import { ReactComponent as Icon } from "../../images/fav-button.svg";
import { ReactComponent as IconActive } from "../../images/fav-button_active.svg";
import "./style.css";
import React from "react";

function FavoriteButton() {
  const [active, setActive] = React.useState(false);

  return (
    <button
      className="favorite-button"
      type="button"
      onClick={() => {
        setActive(true);
      }}
    >
      {active ? <IconActive /> : <Icon />}
    </button>
  );
}

export default FavoriteButton;
