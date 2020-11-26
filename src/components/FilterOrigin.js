import React from "react"

const FilterOrigin = (props) => {
  //Event
  const handleCheckbox = (event) => {
    // console.log();
    props.handleCheckbox(event.target.checked);
  };

  return (
    <section>
      <form>
        <label htmlFor="origin">En origen</label>
        <input type="checkbox" id="origin" name="origin" checked={props.filterOrigin} onChange={handleCheckbox}></input>
      </form>
    </section>
  )
};

export default FilterOrigin;
