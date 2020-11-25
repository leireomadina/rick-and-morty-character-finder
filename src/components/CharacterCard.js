import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/layout/CharacterCard.scss";

const CharacterCard = (props) => {
  const checkSpecies = () => {
    if (props.species === "Human") {
      return "🌎";
    } else {
      return "👽";
    }
  };

  return (
    <Link
      to={`/character-detail/${props.id}`}
      title={"See this character's details"}
    >
      <article className="card">
        <img
          src={props.image}
          alt={`${props.name}`}
          title={`${props.name}`}
          className="card__image"
        />
        <h2 className="card__name">{props.name}</h2>
        <p className="card__species">
          {props.species}
          <span className="card__species--icon"> {checkSpecies()}</span>
        </p>
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
