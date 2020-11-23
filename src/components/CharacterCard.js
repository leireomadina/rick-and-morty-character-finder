import React from "react";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  // console.log(props.character);
  return (
    <article>
      <img
        src={props.character.image}
        alt={`Imagen de ${props.character.name}`}
        title={`Imagen de ${props.character.name}`}
      />
      <h2>{props.character.name}</h2>
      <p>{props.character.species}</p>
    </article>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterCard;
