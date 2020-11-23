import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  // console.log(props);
  return (
    <Link to={`/character-detail/${props.id}`} title={"See this character's details"}>
      <article>
        <img
          src={props.image}
          alt={`Image of ${props.name}`}
          title={`Image of ${props.name}`}
        />
        <h2>{props.name}</h2>
        <p>{props.species}</p>
      </article>
    </Link>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterCard;
