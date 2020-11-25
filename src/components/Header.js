import React from "react"
// import logo from "../images/Rick-and-Morty-logo.png"
import logo from "../images/logo.png"
import "../stylesheets/layout/Header.scss";

const Header = () => {
  return (
    <header className="main-header">
      <div className="main-header__container">
        <img src={logo} alt="Rick and Morty tv series logo" title="Rick and Morty tv series logo" className="main-header__image"/>
      </div>
    </header>
  )
};

export default Header;
