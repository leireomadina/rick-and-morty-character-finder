import React from "react"
import PropTypes from "prop-types";

const CharacterNotFound = (props) => {
  return (
    <div>
      <p>No hay ningún personaje que coincide con la búsqueda {props.filterText}</p>
    </div>
  )
};

CharacterNotFound.propTypes = {
  filterText: PropTypes.string,
};

export default CharacterNotFound;

