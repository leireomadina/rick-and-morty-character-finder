import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/layout/CharacterDetail.scss";

const CharacterDetail = (props) => {
  const checkStatus = () => {
    if (props.status === "Dead") {
      return "💀";
    }
  };

  return (
    <main className="detail-page">
      <article className="detail-card">
        <div className="detail-card__image-container">
          <img
            src={props.image}
            alt={`${props.name}`}
            title={`${props.name}`}
            className="detail-card__image"
          />
        </div>
        <h2 className="detail-card__name">{props.name}</h2>
        <p className="detail-card__text">
          <strong>Status:</strong> {props.status}
          <span className="detail-card__icon"> {checkStatus()}</span>
        </p>
        <p className="detail-card__text">
          <strong>Species:</strong> {props.species}
        </p>
        <p className="detail-card__text">
          <strong>Origin:</strong> {props.origin}
        </p>
        <p className="detail-card__text">
          <strong>Episodes:</strong> {props.episode}
        </p>
      </article>
    </main>
  );
};

CharacterDetail.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.string,
  episode: PropTypes.number,
};

export default CharacterDetail;
