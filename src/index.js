import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import "bootstrap/scss/bootstrap.scss"
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import configureStore from "./redux/reducers/configureStore.js";


import './i18n';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

