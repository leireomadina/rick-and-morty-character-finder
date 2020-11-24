const ENDPOINT = "https://rickandmortyapi.com/api/character/";

const getDataFromApi = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      // returns an array of 20 characters
      return data.results;
    })
    .catch(error => console.log("Ha sucedido un error:", error));
};

// Exporting as an object in case we add more functions in the future
export default {
  getDataFromApi: getDataFromApi,
};
