// importing react libraries
import React from 'react';
import ReactDOM from 'react-dom';

// redux is a library that facilitates us to use a unified store for the whole application
// means we can store all app data in one place and use it on any part of the app like a php session
// react-redux helps connecting react with redux
// provider provides the redux store to full application
import {Provider} from 'react-redux';

// redux is the redux library
// middleware, as the name suggest is something that happens between function call and function execution
import {applyMiddleware, createStore} from 'redux';
// we are using middleware and redux-logger to log the results of our functions to console
import logger from 'redux-logger';

// reducers are functions that are performed when an action is called
import reducers from './reducers';

// importing css
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// applying logger as middleware
const middleware = applyMiddleware(logger);
// creating store. store is like a session so that data stored in the session can be used from any file in the app
const store = createStore(reducers, middleware);

// rendering app
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
