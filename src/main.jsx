// main.jsx
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App'; // Ensure the path is correct based on your structure
import './index.css';
import { searchRobots } from './reducers'; // Make sure this points to your reducers
import 'tachyons/css/tachyons.min.css';


// Create the Redux store
const store = createStore(searchRobots);

// Create the root element
const root = createRoot(document.getElementById('root'));

// Render the app with Redux Provider
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
