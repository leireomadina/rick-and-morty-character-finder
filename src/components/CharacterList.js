import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import CharacterNotFound from "./CharacterNotFound";

const CharacterList = (props) => {
  // console.log(props.filterText);
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

  console.log(characterItems.length);

  const notFound = () => {
    // If the list of characters is 0, render the not found message
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
