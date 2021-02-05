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
        {/* Character name */}
        <label htmlFor="character"></label>
        <input type="text" id="character" name="character" placeholder="Search you favorite character" onChange={handleFilter} value={props.filterText} className="form-section__input"></input>
        {/* Gender */}
        <label htmlFor="gender"></label>
        <select id="gender" name="gender">
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="unkown">Other</option>
        </select>
        {/* Status */}
        <label htmlFor="status"></label>
        <select id="status" name="status">
          <option value="all">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unkown">Unkown</option>
        </select>
      </form>
    </section>
  )
};

Filters.propTypes = {
  handleFilter: PropTypes.func,
  filterText: PropTypes.string
};

export default Filters;
