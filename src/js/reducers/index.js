import { combineReducers } from 'redux';
import * as centerReducer from './center_reducer';
import nav from './navigation_reducer';

export default reducer = combineReducers({
    centers: centerReducer,
    nav: nav
});