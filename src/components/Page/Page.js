import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

function Page({ children, hasFooter }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        onBurgerClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      {children}
      {isMenuOpen && <SideBar />}
      {hasFooter && <Footer />}
    </>
  );
}

export default Page;
