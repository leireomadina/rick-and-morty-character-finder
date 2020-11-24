import React from "react"
import PropTypes from "prop-types";

const CharacterNotFound = (props) => {
  return (
    <div>
      <p>No hay ningún personaje que coincida con la palabra {props.filterText}</p>
    </div>
  )
};

CharacterNotFound.propTypes = {
  filterText: PropTypes.string,
};

export default CharacterNotFound;

