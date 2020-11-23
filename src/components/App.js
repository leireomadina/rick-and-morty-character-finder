import "../stylesheets/App.scss";
import api from "../service/api";
import Header from "./Header";

// API
api.getDataFromApi().then((data) => {
   console.log(data);
 });

const App = () => {
  return (
    <div className="App">
      <Header />
      Holi :)
    </div>
  );
}

export default App;
