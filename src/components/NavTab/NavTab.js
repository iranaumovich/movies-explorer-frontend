import React, { useRef } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function NavTab() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link
          to="#about-project"
          className="navbar__link link"
          onClick={handleClick}>
          О проекте
        </Link>
        <Link to="#techs" className="navbar__link link" onClick={handleClick}>
          Технологии
        </Link>
        <Link
          to="#about-me"
          className="navbar__link link"
          onClick={handleClick}>
          Студент
        </Link>
      </div>
    </nav>
  );
}

export default NavTab;
