import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "@store";
import "@styles/app.scss";
import Router from '@pages/Router';
import reportWebVitals from './reportWebVitals';

// Declear Variables
window.HOSTURL = "http://192.168.104.83:10040";

ReactDOM.render(
  <Provider store={ store }>
    <Router />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());
