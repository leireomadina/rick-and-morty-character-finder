import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import CharacterNotFound from "./CharacterNotFound";

const CharacterList = (props) => {
  //MAP
  const characterItems = props.characters.map((character) => {
    return (
      <>
      <li key={character.id}>
        <CharacterCard
          id={character.id}
          name={character.name}
          image={character.image}
          species={character.species}
        />
      </li>
      </>
    );
  });

  const notFound = () => {
    // Renders the not found component if the list of characters is empty after during the user's search
    if (characterItems.length === 0) {
      return <CharacterNotFound filterText={props.filterText}/>
    }
  };
 
  return (
    <section>
      <ul>{characterItems}</ul>
      {notFound()}
    </section>
  );
};

CharacterList.propTypes = {
  character: PropTypes.array,
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  filterText: PropTypes.string,
};

export default CharacterList;
