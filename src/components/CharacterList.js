import React from "react"
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {

// console.log(props.characters);
const character = props.characters.map((character) => {
  // console.log(character);
  // console.log(character.id);
  return (
    <li  key={character.id} >
      <CharacterCard character={character}/>
    </li>
  );
}

);
  return (
    <section>
      <ul>
      {character}
      </ul>
    </section>
  )
};

CharacterList.propTypes = {
  character: PropTypes.array,
  id: PropTypes.number
}

export default CharacterList;
