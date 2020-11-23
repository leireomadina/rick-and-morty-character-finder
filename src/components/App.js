import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../service/api";
import Header from "./Header";
import CharacterList from "./CharacterList";
import "../stylesheets/App.scss";
import Filters from "./Filters";

const App = () => {
  // STATE
  const [characters, setCharacters] = useState([]);
  //Defines a new state for the text written in the input
  const [filterText, setFilterText] = useState("");

  //API
  useEffect(
    () => {
      api.getDataFromApi().then((data) => {
        // console.log(data);
        setCharacters(data);
      });
    },
    //Empty array so that the first useEffect parameter gets executed only once
    []
  );

  //EVENT
  const handleFilter = (filterText) => {
    // console.log("Estoy en App y he hecho lifting");
    setFilterText(filterText);
  };

  //FILTER
  const filteredCharacters = characters.filter(
    (character) => {
      const characterName = character.name;
      return characterName.toLowerCase().includes(filterText.toLowerCase());
    }
  );
  
  return (
    <div className="App">
      <Header />
      <main>
        <Filters handleFilter={handleFilter}/>
        <CharacterList characters={filteredCharacters}/>
      </main>
    </div>
  );
};

App.propTypes = {
  characters: PropTypes.array,
  handleFilter: PropTypes.func
};

export default App;
