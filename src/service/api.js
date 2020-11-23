import { useLayoutEffect } from "react";

const ENDPOINT = "https://rickandmortyapi.com/api/character/";

const getDataFromApi = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      // returns an array of 20 characters
      return data.results;
    });
};

// Exporting as an object in case we add more functions in the future
export default {
  getDataFromApi: getDataFromApi,
};
