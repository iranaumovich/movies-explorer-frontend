import { React, useRef } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function NavTab() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <ul className="navbar__container">
        <li className="navbar__link link" onClick={handleClick}>
          <Link to="#about-project">О проекте</Link>
        </li>
        <li className="navbar__link link" onClick={handleClick}>
          <Link to="#techs">Технологии</Link>
        </li>
        <li className="navbar__link link" onClick={handleClick}>
          <Link to="#about-me">Студент</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
