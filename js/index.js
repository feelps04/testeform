import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'; // Caminho correto para importar o arquivo CSS
import App from './js/app'; // Supondo que o arquivo App.js esteja dentro da pasta "js"
import reportWebVitals from './js/reportWebVitals'; // Supondo que o arquivo reportWebVitals.js esteja dentro da pasta "js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
