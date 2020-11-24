import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import api from "../service/api";
import Header from "./Header";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
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
        setCharacters(data);
      });
    },
    //Empty array so that the first useEffect parameter gets executed only once
    []
  );

  //EVENT
  const handleFilter = (inputValue) => {
    setFilterText(inputValue);
  };

  //RENDER FILTER + SORT
  const renderFilteredCharacters = () => {
    const filteredCharacters = characters.filter((character) => {
      const characterName = character.name;
      return characterName.toLowerCase().includes(filterText.toLowerCase());
    });
    // sorts the filteredCharacters array's names alphabetically
    const sortedcharactersNames = filteredCharacters.sort(function sortByName(a, b) {
      if (a.name < b.name) {
        //a will come before b
        return -1;
      } 
      if (a.name > b.name) {
        //b will come before a
        return 1;
      }
      // when a equals b:
      return 0;
    });
    return filteredCharacters;
  };

  //RENDER DETAIL
  const renderDetail = (props) => {
    const routeProductId = parseInt(props.match.params.characterId);
    const clickedCharacter = characters.find((product) => {
      const productId = product.id;
      return routeProductId === productId;
    });
    //renders the searched character if it finds it. Else, returns a not found message
    if (clickedCharacter !== undefined) {
      return (
        <>
        <Header />
        <CharacterDetail
          image={clickedCharacter.image}
          name={clickedCharacter.name}
          status={clickedCharacter.status}
          species={clickedCharacter.species}
          origin={clickedCharacter.origin.name}
          episode={clickedCharacter.episode.length}
        />
        </>
      );
    } else {
      return <p>The character you are looking for doesn't exist.</p>;
    }
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <main>
            <Filters handleFilter={handleFilter} filterText={filterText} />
            <CharacterList characters={renderFilteredCharacters()} filterText={filterText}/>
          </main>
        </Route>
        <Route path="/character-detail/:characterId" component={renderDetail} />
      </Switch>
    </div>
  );
};

App.propTypes = {
  characters: PropTypes.array,
  handleFilter: PropTypes.func,
  renderDetail: PropTypes.func,
  filterText: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.string,
  episode: PropTypes.number,
};

export default App;
