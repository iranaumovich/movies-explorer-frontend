import React from "react";
import Promo from "../components/Promo";
import NavTab from "../components/NavTab";
import AboutProject from "../components/AboutProject";
import Techs from "../components/Techs";
import AboutMe from "../components/AboutMe";

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
