import React from 'react';
import { Link } from 'react-router-dom';
import { motion as m } from "framer-motion"
import '../stylesheets/layout/CharacterDetail.scss';

interface CharacterDetailProps {
  status: string;
  name: string;
  image: string;
  species: string;
  origin: string;
  episode: string[];
}

function CharacterDetail({
  status,
  species,
  image,
  name,
  origin,
  episode,
}: CharacterDetailProps) {
  const checkStatus = () => {
    if (status === 'Dead') {
      return '💀';
    }
    return true;
  };
  const checkSpecies = () => {
    return species === 'Human' ? '🌎' : '👽';
  };

  return (
    <m.main
      className="detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <article className="detail-card">
        <div className="detail-card__image-container">
          <img
            src={image}
            alt={`${name}`}
            title={`${name}`}
            className="detail-card__image"
          />
        </div>
        <div className="detail-card__content">
          <h2 className="detail-card__name">{name}</h2>
          <p className="detail-card__text">
            <strong>Status:</strong> {status}
            <span className="detail-card__icon"> {checkStatus()}</span>
          </p>
          <p className="detail-card__text">
            <strong>Species:</strong> {species}
            <span className="detail-card__icon"> {checkSpecies()}</span>
          </p>
          <p className="detail-card__text">
            <strong>Origin:</strong> {origin}
          </p>
          <p className="detail-card__text">
            <strong>Episodes:</strong> {episode.length}
          </p>
          <Link to="/">
            <button type="button" className="detail-card__button">
              Go back
            </button>
          </Link>
        </div>
      </article>
    </m.main>
  );
}

export default CharacterDetail;
