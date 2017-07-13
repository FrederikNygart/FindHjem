import createReducer from '../lib/reducer_helper';
import centers from '../data/mocks/centers';
import * as types from '../actions/types';


export const allCenters = createReducer([], {
    [types.GET_CENTERS](state, actions) {
        return state.concat(centers);
    }
});