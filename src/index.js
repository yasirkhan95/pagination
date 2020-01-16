import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {Reducer} from './Reducer/index'


const middleware = [thunk,logger]
const store = createStore(Reducer,applyMiddleware(...middleware));
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('root'))