import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/layout/CharacterNotFound.scss";
import gif from "../images/morty-gif.gif";

const CharacterNotFound = (props) => {
  return (
    <div className="not-found-container">
      <p className="not-found-container__text">
        There isn't any character that matches the word {props.filterText} !
      </p>
      <img
        src={gif}
        className="not-found-container__gif"
        alt="Surprised Morty gif"
        title="Surprised Morty gif"
      />
    </div>
  );
};

CharacterNotFound.propTypes = {
  filterText: PropTypes.string,
};

export default CharacterNotFound;
