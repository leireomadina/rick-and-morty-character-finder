import propTypes from "prop-types";
import React from "react"

const Filters = (props) => {
  //EVENT
  const handleFilter = (event) => {
    // console.log("Entro en event");
    // console.log(event.target);
    const filterText = event.target.value;
    // console.log(filterText);
    props.handleFilter(filterText);
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

export default Filters;
