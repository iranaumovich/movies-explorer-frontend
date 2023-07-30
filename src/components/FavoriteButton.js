import { ReactComponent as Icon } from "../images/fav-button.svg";
import { ReactComponent as IconActive } from "../images/fav-button_active.svg";

function FavoriteButton({ active, onClick }) {
  return (
    <button className="favorite-button" onClick={onClick}>
      {active ? <IconActive /> : <Icon />}
    </button>
  );
}

export default FavoriteButton;
