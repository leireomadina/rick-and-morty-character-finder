import PropTypes from "prop-types";
import React from "react"
import "../stylesheets/layout/Filters.scss";

const Filters = (props) => {
  //EVENTS

  const handleFilters = (event) => {
    const data = {
      name: event.target.name,
      value: event.target.value,
      checked: event.target.checked
    }
    props.handleFilters(data);
  };

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
        <select id="status" name="status" onChange={handleFilters} value={props.filterStatus}>
          <option value="all">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        {/* Sort by name */}
        <label htmlFor="sorted">Sort by name:</label>
        <input type="checkbox" name="sorted" id="sorted" checked={props.filterSortedNyName} onChange={handleFilters}></input>
      </form>
    </section>
  )
};

Filters.propTypes = {
  handleChange: PropTypes.func,
  filterName: PropTypes.string,
  filterGender: PropTypes.string,
  filterStatus: PropTypes.string,
  filterSortedNyName: PropTypes.bool
};

export default Filters;
