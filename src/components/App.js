import "../stylesheets/App.scss";
import api from "../service/api";

// API
api.getDataFromApi().then((data) => {
   console.log(data);
 });

const App = () => {
  return (
    <div className="App">
      Holi :)
    </div>
  );
}

export default App;
