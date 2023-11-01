import React from 'react';
import '../stylesheets/layout/CharacterNotFound.scss';
import gif from '../images/morty-gif.gif';

function CharacterNotFound() {
  return (
    <div className="not-found-container">
      <p className="not-found-container__text">
        There isn&apos;t any character that matches your search!
      </p>
      <img
        src={gif}
        className="not-found-container__gif"
        alt="Surprised Morty gif"
        title="Surprised Morty gif"
      />
    </div>
  );
}

export default CharacterNotFound;
