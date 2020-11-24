import React from "react";
import PropTypes from "prop-types";

const CharacterDetail = (props) => {
  // console.log(props);
  return (
    <main>
      <section>
        <article>
          <div>
            <img src={props.image} alt={`Image of ${props.name}`} title={`Image of ${props.name}`}/>
          </div>
          <div>
            <h2>{props.name}</h2>
            <p>{props.status}</p>
            <p>{props.species}</p>
            <p>{props.origin}</p>
            <p>{props.episode}</p>
          </div>
        </article>
      </section>
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

CharacterDetail.defaultProps = {};

export default CharacterDetail;
