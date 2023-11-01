import React, { useEffect, useState } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import getDataFromApi from '../service/api';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import '../stylesheets/App.scss';

interface Character {
  status: string;
  gender: string;
  id: number;
  name: string;
  image: string;
  species: string;
  origin: {
    name: string;
  };
  episode: string[];
}

interface FilterData {
  name: string;
  value: string;
  checked: boolean;
}

interface MatchParams {
  characterId: string;
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filterName, setfilterName] = useState('');
  const [filterGender, setFilterGender] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterSortedNyName, setfilterSortedNyName] = useState(false);

  // API call
  useEffect(() => {
    getDataFromApi()
      .then((data) => {
        setCharacters(data);
      })
      .catch(console.error); // TODO: add handleError functionality
  }, []);

  // Handlers
  const handleFilters = (data: FilterData) => {
    if (data.name === 'character') {
      setfilterName(data.value);
    }
    if (data.name === 'gender') {
      setFilterGender(data.value);
    }
    if (data.name === 'status') {
      setFilterStatus(data.value);
    }
    if (data.name === 'sorted') {
      setfilterSortedNyName(data.checked);
    }
  };

  // Filters
  const renderFilteredCharacters = () => {
    const filteredCharacters = characters
      .filter((character) =>
        character.name.toLowerCase().includes(filterName.toLowerCase())
      )
      .filter(
        (character) =>
          filterGender === 'all' ||
          character.gender.toLowerCase() === filterGender
      )
      .filter(
        (character) =>
          filterStatus === 'all' ||
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
  const renderDetail = (props: RouteComponentProps<MatchParams>): JSX.Element => {
    const routeCharacterId = parseInt(props.match.params.characterId, 10);
    const selectedCharacter = characters.find((character: Character) => {
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
            episode={selectedCharacter.episode}
          />
        </>
      );
    } else {
      return <p>The character you are looking for doesn&apos;t exist.</p>;
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
}

export default App;
