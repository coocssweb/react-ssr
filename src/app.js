import '@scss/base.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import createStore from './redux/store/createStore';
import Root from './root/route';
import './common';
const store = createStore(Immutable.fromJS({}));

ReactDOM.hydrate(
    <Provider store={ store } >
        <Root />
    </Provider>,
    document.getElementById('app')
);