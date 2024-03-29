import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/CharacterCard.scss';

interface CharacterCardProps {
  id: number;
  name: string;
  image: string;
  species: string;
}

function CharacterCard({ id, image, name, species }: CharacterCardProps) {
  const checkSpecies = () => {
    return species === 'Human' ? '🌎' : '👽';
  };

  return (
    <Link to={`/character-detail/${id}`} title={"See this character's details"}>
      <article className="card">
        <img
          src={image}
          alt={`${name}`}
          title={`${name}`}
          className="card__image"
        />
        <div className="card__inner">
          <h2 className="card__name">{name}</h2>
          <p className="card__species">
            {species}
            <span className="card__species--icon">{checkSpecies()}</span>
          </p>
          <svg
            className="card__icon"
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M26 12.0404L13.4469 0H7.84063L18.525 10.0606H0V13.9798H18.4031L7.88125 24H13.4469L26 12.0404Z" />
          </svg>
        </div>
      </article>
    </Link>
  );
}

export default CharacterCard;
