import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApiContext } from './context/ApiContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiContext.Provider value="https://restapi.fr/api/recipes">
      <App />
    </ApiContext.Provider>
    
  </React.StrictMode>
);

reportWebVitals();
