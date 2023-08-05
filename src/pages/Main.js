import React from "react";
import Promo from "../components/Promo/Promo";
import NavTab from "../components/NavTab/NavTab";
import AboutProject from "../components/AboutProject/AboutProject";
import Techs from "../components/Techs/Techs";
import AboutMe from "../components/AboutMe/AboutMe";

export default function Main() {
  return (
    <div className="main">
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
    </div>
  );
}
