import './App.scss';
import Selects from "../selects/Selects";
import {DataProvider} from "../../provider/DataProvider";
import Content from "../content/Content";

function App() {
  return (
      <DataProvider>
          <div className="app">
              <div className="container">
                  <h1 className="title">List of vacancies</h1>
              </div>
              <Selects/>
              <Content/>
          </div>
      </DataProvider>
  )
}

export default App;
