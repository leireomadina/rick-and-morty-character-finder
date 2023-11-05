import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/neon-logo.png';
import '../stylesheets/layout/Header.scss';

function Header() {
  return (
    <header className="main-header">
      <div className="main-header__container">
        <Link to="/" title="Go to the main page">
          <img
            src={logo}
            alt="Rick and Morty logo"
            title="Rick and Morty logo"
            className="main-header__image"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
