// chargement via les modules JS
// imports - chargement des scripts
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// display a component from an external file
ReactDOM.render(<App />, document.getElementById('root'));


//how to render and update element in page
// function tick() {
//   const element = (
//     <div>
//       <Welcome firstname="Boris" />,
//       <h2>Il est {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 3000);
