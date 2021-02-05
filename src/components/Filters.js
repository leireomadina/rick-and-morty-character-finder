import PropTypes from "prop-types";
import React from "react"
import "../stylesheets/layout/Filters.scss";

const Filters = (props) => {
  //EVENTS

  const handleFilters = (event) => {
    const data = {
      name: event.target.name,
      value: event.target.value,
    }
    props.handleFilters(data);
  };

  /*
  const handleNameFilter = (event) => {
    const inputValue = event.target.value;
    props.handleNameFilter(inputValue);
  };

  const handleGenderFilter = (event) => {
    const selectGenderValue = event.target.value;
    console.log(selectGenderValue);
    props.handleGenderFilter(selectGenderValue);
  };
  */

  // Prevents the default submit event of the form
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  

  return (
    <section className="form-section">
      <form onSubmit={handleSubmit}>
        {/* Character name */}
        <label htmlFor="character"></label>
        <input type="text" id="character" name="character" placeholder="Search you favorite character" onChange={handleFilters} value={props.filterName} className="form-section__input"></input>
        {/* Gender */}
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" onChange={handleFilters} value={props.filterGender}>
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="unknown">Unknown</option>
        </select>
        {/* Status */}
        <label htmlFor="status">Status</label>
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
  handleChange: PropTypes.func,
  filterName: PropTypes.string
};

export default Filters;
