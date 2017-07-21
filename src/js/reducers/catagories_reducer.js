import * as types from '../lib/types';
import { CATAGORIES } from '../data/mocks/center_classification';

const getSubCatagories = (state, action) => {
    return Object.entries(state.current).reduce((acc, [key, val]) => {
        if (action.selectedCatagory === key) {
            acc = val.subCatagories;
        }
        return acc;
    }, {});
}

export default function catagoriesReducer(state = {}, action) {
    switch (action.type) {
        case types.GET_CATAGORIES:
            return {
                ...state,
                current: CATAGORIES
            };
        case types.GET_SUB_CATAGORIES:
            return {
                ...state,
                current: getSubCatagories(state, action)
            }
        default:
            return state;
    }
}