import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  //MAP
  const characterItems = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard
          id={character.id}
          name={character.name}
          image={character.image}
          species={character.species}
        />
      </li>
    );
  });

  return (
    <section>
      <ul>{characterItems}</ul>
    </section>
  );
};

CharacterList.propTypes = {
  character: PropTypes.array,
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterList;
