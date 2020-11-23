import React from "react"
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {

// console.log(props.characters);
const character = props.characters.map((character) => {
  console.log(character);
  return (
    <li>
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

export default CharacterList;
