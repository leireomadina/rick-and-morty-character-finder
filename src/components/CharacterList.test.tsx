import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import 'intersection-observer';
import CharacterList from './CharacterList';

const characters = [
  {
    id: 1,
    name: 'Rick',
    image: 'rick.jpg',
    species: 'Human',
  },
  {
    id: 2,
    name: 'Morty',
    image: 'morty.jpg',
    species: 'Human',
  },
];

const renderCharacterList = () => {
  return render(
    <BrowserRouter>
      <CharacterList characters={characters} filterName={''} />
    </BrowserRouter>
  );
};

describe('Character list component', () => {
  it('renders without errors', () => {
    renderCharacterList();
    const ulElement = screen.getByTestId('character-list');
    console.log(ulElement)
    expect(ulElement).toHaveClass('cards-container');
  });
  
});
