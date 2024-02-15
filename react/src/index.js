import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //el root se manda llamar del html
  document.getElementById('root')
);
