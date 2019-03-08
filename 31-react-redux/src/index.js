import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux'
import reducer from './Redux/reducer'

import {Provider} from 'react-redux'

const storeObj = createStore(reducer)

ReactDOM.render(
  <Provider store={storeObj}>
    <App />
  </Provider>
, document.getElementById('root'));
