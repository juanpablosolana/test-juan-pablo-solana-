import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// ReactDOM.render(
//   <h3>Prueba de webpack</h3>,
//   document.getElementById('app')
// );


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);