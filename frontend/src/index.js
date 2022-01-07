import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//ReactDom.render is rendering <App/> component to id=root.   React.render(component,locationID);
ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
); 

