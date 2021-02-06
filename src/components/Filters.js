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
        <fieldset className="form-section__container">
          <label htmlFor="character" className="form-section__label">Name</label>
          <input type="text" id="character" name="character" placeholder="Search you favorite character" onChange={handleFilters} value={props.filterName} className="form-section__input"></input>
        </fieldset>
        {/* Gender */}
        <fieldset className="form-section__container">
          <label htmlFor="gender" className="form-section__label">Gender</label>
          <select id="gender" name="gender" onChange={handleFilters} value={props.filterGender} className="form-section__select">
            <option value="all" className="form-section__option">All</option>
            <option value="female" className="form-section__option">Female</option>
            <option value="male" className="form-section__option">Male</option>
            <option value="unknown" className="form-section__option">Unknown</option>
          </select>
        </fieldset>
        {/* Status */}
        <fieldset className="form-section__container">
          <label htmlFor="status" className="form-section__label">Status</label>
          <select id="status" name="status" onChange={handleFilters} value={props.filterStatus} className="form-section__select">
            <option value="all" className="form-section__option">All</option>
            <option value="alive" className="form-section__option">Alive</option>
            <option value="dead" className="form-section__option">Dead</option>
            <option value="unknown" className="form-section__option">Unknown</option>
          </select>
        </fieldset>
        {/* Sort by name */}
        <fieldset className="form-section__container">
        <input type="checkbox" name="sorted" id="sorted" checked={props.filterSortedNyName} onChange={handleFilters} className="form-section__checkbox"></input>
        <span className="form-section__checkbox--customized"></span>
          <label htmlFor="sorted" className="form-section__label">Sort by name</label>
        </fieldset>
        {/* <button type="button">Reset</button> */}
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
