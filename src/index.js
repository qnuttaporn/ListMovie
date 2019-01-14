import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import Fetch from './fetch';

const store = createStore(rootReducer , applyMiddleware(thunk)) //applyMiddlewareการเอาค่ามาจากที่ไหน

const MyApp = () => (
  <Provider store={store}>
  <Fetch>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Fetch>
  </Provider>
  
)

ReactDOM.render(<MyApp />, document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
