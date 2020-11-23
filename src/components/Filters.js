import PropTypes from "prop-types";
import React from "react"

const Filters = (props) => {
  //EVENT
  const handleFilter = (event) => {
    // console.log("Entro en event");
    // console.log(event.target);
    const inputValue = event.target.value;
    // console.log(filterText);
    props.handleFilter(inputValue);
  };

  return (
    <section>
      <form>
        <label htmlFor="character"></label>
        <input type="text" id="character" name="character" placeholder="Type a character name" onChange={handleFilter}></input>
      </form>
    </section>
  )
};

Filters.propTypes = {
  handleFilter: PropTypes.func,
};

export default Filters;
