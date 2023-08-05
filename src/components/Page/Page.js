import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import { useNavigate } from "react-router-dom";

function Page({ children, hasFooter }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/movies");
  };

  return (
    <>
      <Header
        loggedIn={isLoggedIn}
        isMenuOpen={isMenuOpen}
        onBurgerClick={() => setIsMenuOpen(!isMenuOpen)}
        onLogin={handleLogin}
      />
      {children}
      {isMenuOpen && <SideBar />}
      {hasFooter && <Footer />}
    </>
  );
}

export default Page;
