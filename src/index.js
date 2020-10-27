import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";
import './styles/base.scss';
import App from './App';
import { getMovieReducer, addToFavorites } from './store/reducers';

const rootReducer = combineReducers({ getMovieReducer, addToFavorites });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));
window.store = store;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />  
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
