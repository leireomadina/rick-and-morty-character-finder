import React, { useEffect, useState } from "react";
import api from "../service/api";
import Header from "./Header";
import CharacterList from "./CharacterList";
import "../stylesheets/App.scss";

const App = () => {
  //State
  const [characters, setCharacters] = useState([]);
  // console.log(characters);

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

  return (
    <div className="App">
      <Header />
      <main>
        <CharacterList characters={characters}/>
      </main>
    </div>
  );
};

export default App;
