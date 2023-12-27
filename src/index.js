import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/*info players 
let users = [
  {Name : "Lionel", lastName: "Messi", Age: "37", JerseyNumber:"10"},
  {Name : "Mohamed", lastName: "Salah",Age: "37", JerseyNumber:"10"},
  {Name : "Kylian ", lastName: "Mbappe",Age: "37", JerseyNumber:"10"}
];

let userFullnames = users.map(function(element){
    return `${element.Name} ${element.lastName} ${element.Age} ${element.JerseyNumber}`;
})
*/