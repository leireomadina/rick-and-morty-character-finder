import React from "react"

const Filters = () => {
  //EVENT
  const handleFilter = (event) => {
    // console.log("Entro en event");
    // console.log(event.target);
    const inputValue = event.target.value;
    console.log(inputValue);
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
