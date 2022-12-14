import ReactDOM  from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import {legacy_createStore as createStore ,applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';

import App from './App';

const store=createStore(reducers,compose(applyMiddleware(thunk)))
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('root'));