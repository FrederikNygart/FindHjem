import { combineReducers } from 'redux';
import * as centerReducer from './center_reducer';

export default combineReducers(Object.assign(
    centerReducer,
));