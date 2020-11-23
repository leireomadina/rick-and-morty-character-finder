import { useLayoutEffect } from "react";

const ENDPOINT = "https://rickandmortyapi.com/api/character/";

const getDataFromApi = () => {
  // console.log("Estoy en el API");
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log("Tengo los datos :)");
      return data.results;
    });
};

// Exporting as an object in case we need more functions in the future
export default {
  getDataFromApi: getDataFromApi,
};
