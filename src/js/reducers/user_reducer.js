import * as types from '../lib/types';

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case types.SET_AGE:
            return { ...state, age: action.age };
        case types.SET_GENDER:
            return { ...state, gender: action.gender };
        default:
            return state;
    }
}