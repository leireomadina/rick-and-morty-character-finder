import React from "react"
import logo from "../images/Rick-and-Morty-logo.png"

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="Rick and Morty tv series logo" title="Rick and Morty tv series logo"/>
      </div>
    </header>
  )
};

export default Header;
