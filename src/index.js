import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import reportWebVitals from './reportWebVitals';
import App from './App';
import TodoList from './TodoList';
import storeToolKit from './storeToolKit'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <Provider store={store}>
  //   < App/>
  // </Provider>
  // </React.StrictMode> 
  <React.StrictMode>
  <Provider store={storeToolKit}>
    < TodoList/>
  </Provider>
  </React.StrictMode> 
);
reportWebVitals();