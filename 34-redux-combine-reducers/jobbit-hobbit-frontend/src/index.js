import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import hobbitReducer from './reducers/hobbitReducer'
import hogReducer from './reducers/hogReducer'


const rootReducer = combineReducers({
  hobbitInfo: hobbitReducer,
  hogs: hogReducer
})

// const store = createStore(hobbitReducer)
// const store = createStore(hobbitReducer, applyMiddleware(thunk))
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}>
  <App />
</Provider> , document.getElementById('root'));
