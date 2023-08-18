import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";

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
