import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import {DataProvider} from "./provider/DataProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <DataProvider>
          <App />
      </DataProvider>
);


