import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import {applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers/manageTech'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, 
  composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter> 
    <App />
    </BrowserRouter>
</Provider>,
  document.getElementById('root')
);

