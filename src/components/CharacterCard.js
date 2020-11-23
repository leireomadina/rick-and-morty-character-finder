import React from "react";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  // console.log(props);
  return (
    <article>
      <img
        src={props.image}
        alt={`Imagen de ${props.name}`}
        title={`Imagen de ${props.name}`}
      />
      <h2>{props.name}</h2>
      <p>{props.species}</p>
    </article>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterCard;
