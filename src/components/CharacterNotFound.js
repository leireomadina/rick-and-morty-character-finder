import React from "react"
import PropTypes from "prop-types";

const CharacterNotFound = (props) => {
  return (
    <div>
      <p>There isn't any character that matches the word {props.filterText}.</p>
    </div>
  )
};

CharacterNotFound.propTypes = {
  filterText: PropTypes.string,
};

export default CharacterNotFound;

