import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// //With react and JSX
// //But in this the first word will hide
// ReactDOM.render(<h1> Hey Poonam</h1>, document.getElementById("root"));


// //How babel convert JSX to react and how it shows to browser 
// ReactDOM.render(React.createElement("h1",null,"Hey Poonam"),
// document.getElementById("root"));


// // Without using react and JSX and babel
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hey Poonam";
// document.getElementById("root").appendChild(h1)

