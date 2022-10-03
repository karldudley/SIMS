import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { simsReducer } from './reducers';
import './index.css';
import App from './App';

const myStore = createStore(simsReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
    <Router>
      <App />
    </Router>
  </Provider>
);
