import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // App 컴포넌트를 임포트합니다.
import { Provider } from 'react-redux';
import store from './reducers/store'; // store 구성

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
