import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import './index.css';
import AppState from './reducers';


ReactDOM.render(
  <Provider store={AppState} >
    <App />
  </Provider>,
  document.getElementById('root')
);
