import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'; 
import store from './reducers/store'; 
import App from './App';

const root = document.getElementById('root');

const rootElement = createRoot(root);
rootElement.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
