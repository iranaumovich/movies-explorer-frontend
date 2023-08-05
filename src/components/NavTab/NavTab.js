import React from "react";
import "./style.css";

function NavTab() {
  return (
    <nav className="navbar">
      <ul className="navbar__container">
        <li className="navbar__link link">О проекте</li>
        <li className="navbar__link link">Технологии</li>
        <li className="navbar__link link">Студент</li>
      </ul>
    </nav>
  );
}

export default NavTab;
