import PropTypes from "prop-types";
import React from "react"

const Filters = (props) => {
  //EVENTS
  const handleFilter = (event) => {
    const inputValue = event.target.value;
    props.handleFilter(inputValue);
  };

  //Prevents the default submit event of the form
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="character"></label>
        <input type="text" id="character" name="character" placeholder="Type a character name" onChange={handleFilter} value={props.filterText}></input>
      </form>
    </section>
  )
};

Filters.propTypes = {
  handleFilter: PropTypes.func,
  filterText: PropTypes.string
};

export default Filters;
