import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import getDataFromApi from "../service/api";
import Header from "./Header";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import "../stylesheets/App.scss";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setfilterName] = useState("");
  const [filterGender, setFilterGender] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterSortedNyName, setfilterSortedNyName] = useState(false);

  // API call
  useEffect(
    () => {
      getDataFromApi()
        .then((data) => {
          setCharacters(data);
        })
        .catch(console.error);
    },
    //Empty array so that the first useEffect parameter gets executed only once
    []
  );

  // Handlers
  const handleFilters = (data) => {
    if (data.name === "character") {
      setfilterName(data.value);
    }
    if (data.name === "gender") {
      setFilterGender(data.value);
    }
    if (data.name === "status") {
      setFilterStatus(data.value);
    }
    if (data.name === "sorted") {
      setfilterSortedNyName(data.checked);
    }
  };

  // Filters
  const renderFilteredCharacters = () => {
    let filteredCharacters = characters
      .filter((character) =>
        character.name.toLowerCase().includes(filterName.toLowerCase())
      )
      .filter(
        (character) =>
          filterGender === "all" ||
          character.gender.toLowerCase() === filterGender
      )
      .filter(
        (character) =>
          filterStatus === "all" ||
          character.status.toLowerCase() === filterStatus
      );

    if (filterSortedNyName) {
      // sorts the characters alphabetically
      filteredCharacters.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }

    return filteredCharacters;
  };

  // Render character detail page
  const renderDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.characterId);
    const selectedCharacter = characters.find((character) => {
      const characterId = character.id;
      return routeCharacterId === characterId;
    });

    if (selectedCharacter !== undefined) {
      return (
        <>
          <Header />
          <CharacterDetail
            image={selectedCharacter.image}
            name={selectedCharacter.name}
            status={selectedCharacter.status}
            species={selectedCharacter.species}
            origin={selectedCharacter.origin.name}
            episode={selectedCharacter.episode.length}
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
          <main className="main">
            <Filters
              handleFilters={handleFilters}
              filterName={filterName}
              filterGender={filterGender}
              filterStatus={filterStatus}
              filterSortedNyName={filterSortedNyName}
            />
            <CharacterList
              characters={renderFilteredCharacters()}
              filterName={filterName}
            />
          </main>
        </Route>
        <Route path="/character-detail/:characterId" component={renderDetail} />
      </Switch>
    </div>
  );
};

App.propTypes = {
  characters: PropTypes.array,
  handleFilters: PropTypes.func,
  renderDetail: PropTypes.func,
  filterName: PropTypes.string,
  filterGender: PropTypes.string,
  filterStatus: PropTypes.string,
  filterSortedNyName: PropTypes.bool,
  image: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.string,
  episode: PropTypes.number,
};

export default App;
