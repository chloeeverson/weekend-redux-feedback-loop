import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import { applyMiddleware, createStore, combineReducers } from 'redux';

//creating reducer for feeling so can store feeling
const feelingReducer = (state = '', action) => {
    if (action.type === 'ADD_FEELING'){
        return action.payload;
    }
    return state;
}

//creating reducer for understanding so can store understanding
const understandingReducer = (state = '', action) => {
    if (action.type === 'ADD_UNDERSTANDING'){
        return action.payload;
    }
    return state;
}

//creating reducer for support so can store support
const supportReducer = (state = '', action) => {
    if (action.type === 'ADD_SUPPORT'){
        return action.payload;
    }
    return state;
}

//creating reducer for comments so can store comments
const commentsReducer = (state = '', action) => {
    if (action.type === 'ADD_COMMENTS'){
        return action.payload;
    }
    return state;
}

//create store to hold reducers
const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
    applyMiddleware(
        logger
    )
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
