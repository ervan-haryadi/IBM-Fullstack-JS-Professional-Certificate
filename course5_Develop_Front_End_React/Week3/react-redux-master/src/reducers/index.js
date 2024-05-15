//reducers
import {combineReducers } from 'redux';

const counter = (state=0,action) => {
    if(action.type === 'INCREMENT') {
        // increase the value of counter by the value passed to the increment method
        return state+action.inc;
    }
    return state;
}

const myReducer = combineReducers({counter});

export default myReducer;