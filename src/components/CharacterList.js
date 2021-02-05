import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import CharacterNotFound from "./CharacterNotFound";
import "../stylesheets/layout/CharacterList.scss";


const CharacterList = (props) => {
  //MAP
  const characterItems = props.characters.map((character) => {
    return (
      <>
      <li key={character.id} className="cards-container__item">
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
      return <CharacterNotFound filterName={props.filterName}/>
    }
  };
 
  return (
    <section className="cards-section">
      <ul className="cards-container">{characterItems}</ul>
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
  filterName: PropTypes.string,
};

export default CharacterList;
