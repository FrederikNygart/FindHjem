import { combineReducers } from 'redux';
import centerReducer from './center_reducer';
import navigationReducer from './navigation_reducer';
import userReducer from './user_reducer';

export default reducer = combineReducers({
    centers: centerReducer,
    nav: navigationReducer,
    user: userReducer,
});