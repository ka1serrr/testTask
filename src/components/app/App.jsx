import './App.scss';
import Selects from "../selects/Selects";
import Content from "../content/Content";
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "../errorFallback/ErrorFallback";
import Footer from "../footer/Footer";

function App() {

    return (
          <div className="app">
              <div className="container">
                  <h1 className="title">List of vacancies</h1>
              </div>
              <Selects/>
              <ErrorBoundary
                  FallbackComponent={ErrorFallback}
              >
                  <Content/>
              </ErrorBoundary>
              <Footer/>
          </div>
  )
}

export default App;
