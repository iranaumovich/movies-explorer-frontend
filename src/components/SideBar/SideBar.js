import React, { useEffect } from 'react';
import Navigation from '../Navigation/Navigation';

import './style.css';

function SideBar() {
  useEffect(() => {
    document.body.classList.add('body_noscroll');

    return () => {
      document.body.classList.remove('body_noscroll');
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <Navigation isMenuOpen />
      </div>
    </div>
  );
}

export default SideBar;
