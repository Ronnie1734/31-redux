import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/';

let store = createStore(rootReducer)
ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>
, document.getElementById('root'));