import './App.scss';
import Selects from "../selects/Selects";
import Content from "../content/Content";
import {useContext} from "react";
import {DataContext} from "../../provider/DataProvider";

function App() {

    const {data} = useContext(DataContext)

    console.log(data)
    return (
          <div className="app">
              <div className="container">
                  <h1 className="title">List of vacancies</h1>
              </div>
              <Selects/>
              <Content/>
          </div>
  )
}

export default App;
