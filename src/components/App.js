import "../stylesheets/App.scss";
import api from "../service/api";

api.getDataFromApi();

const App = () => {
  return (
    <div className="App">
      Holi :)
    </div>
  );
}

export default App;
