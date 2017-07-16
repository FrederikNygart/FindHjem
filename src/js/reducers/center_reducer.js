import centers from '../data/mocks/centers';
import * as types from '../actions/types';

export default function(state = [], action){
    switch (action.type) {
        case types.GET_CENTERS:
            return {...state, centers: centers}
    
        default:
            break;
    }
}