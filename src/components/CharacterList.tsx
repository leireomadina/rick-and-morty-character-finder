import React from 'react';
import CharacterCard from './CharacterCard';
import CharacterNotFound from './CharacterNotFound';
import '../stylesheets/layout/CharacterList.scss';

interface CharacterListProps {
  characters: Array<CharacterProps>;
  filterName: string;
}

interface CharacterProps {
  id: number;
  name: string;
  image: string;
  species: string;
}

function CharacterList({ characters }: CharacterListProps): JSX.Element {
  const characterItems: React.ReactNode[] = characters.map((character) => {
    const { id, name, image, species } = character;
    return (
      <li key={id} className="cards-container__item">
        <CharacterCard id={id} name={name} image={image} species={species} />
      </li>
    );
  });

  const notFound = () => {
    return <CharacterNotFound />;
  };

  if (characterItems.length === 0) {
    return notFound();
  }

  return (
    <section className="cards-section">
      <ul className="cards-container">{characterItems}</ul>
    </section>
  );
}

export default CharacterList;
