import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import store from './reducers/store'; // Adjust the import path as needed
import App from './App';

const root = document.getElementById('root');

// Use createRoot from 'react-dom/client' to render your React application
const rootElement = createRoot(root);
rootElement.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
