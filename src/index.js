import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Intro from './intro-components/intro.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Intro />
  </React.StrictMode>,
  document.getElementById('root')
);
