import "../stylesheets/App.scss";
import api from "../service/api";

const fetchData = api.getDataFromApi().then((data) => {
   console.log(data);
 });
 console.log(fetchData);
//  api.getDataFromApi();

const App = () => {
  return (
    <div className="App">
      Holi :)
    </div>
  );
}

export default App;
