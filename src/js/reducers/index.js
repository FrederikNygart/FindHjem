import { combineReducers } from 'redux';
import centerReducer from './center_reducer';
import navigationReducer from './navigation_reducer';
import userReducer from './user_reducer';
import catagoriesReducer from './catagory_reducer'

export default reducer = combineReducers({
    nav: navigationReducer,
    user: userReducer,
    catagories: catagoriesReducer,
});