
import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './CounterApp';  // Import the CounterApp component
import './styles.css';  // Import the CSS styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>
);