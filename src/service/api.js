const ENDPOINT = "https://rickandmortyapi.com/api/character/";

const getDataFromApi = async() => {
  try {
    const resp = await fetch(ENDPOINT);
    if(!resp.ok) throw new Error("Im sorry, there has been a server error");
    const data = await resp.json();
    return data.results;
  } catch (err){
    throw err;
  }
};

export default getDataFromApi;
