import React from "react"

const CharacterCard = (props) => {
  // console.log(props.character);
  return (
    <div>
      {props.character.name}
    </div>
  )
};

export default CharacterCard;
