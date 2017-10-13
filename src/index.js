import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

import reducers from './reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
