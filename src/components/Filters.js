import PropTypes from "prop-types";
import React from "react"
import "../stylesheets/layout/Filters.scss";

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
    <section className="form-section">
      <form onSubmit={handleSubmit}>
        <label htmlFor="character"></label>
        <input type="text" id="character" name="character" placeholder="Search you favorite character" onChange={handleFilter} value={props.filterText} className="form-section__input"></input>
      </form>
    </section>
  )
};

Filters.propTypes = {
  handleFilter: PropTypes.func,
  filterText: PropTypes.string
};

export default Filters;
