import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// creates the store
import { createStore } from 'redux'
import reducer from './Redux/reducer'

// Allows for React App to know about our store
import { Provider } from 'react-redux'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
