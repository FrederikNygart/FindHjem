import { CENTERS } from '../data/mocks/centers';
import { CATAGORIES } from '../data/mocks/center_classification';
import * as types from '../lib/types';
import { 
    getCatagories, 
    filterCentersByUser, 
    filterCentersByUserAndCatagory,
} from './reducer_functions/center_reducer_functions';

export default function centerReducer(state = {selectedCatagories: []}, action) {
    switch (action.type) {
        case 'ssss':
            return {
                ...state,
                current: getCenters(CENTERS),
            }

        case 'ss':
            return {
                ...state,
                current: filterCentersByUser(CENTERS, action.age, action.gender),
                userAge: action.age,
                userGender: action.gender,
                catagoriesLevel: 0,
            }
        case 'sss':
            return {
                ...state,
                catagories: getCatagories(state.current, state.catagoriesLevel),
            }
        case 'ssssss':
            return {
                ...state,
                current: filterCentersByUserAndCatagory(CENTERS, state.userAge, state.userGender, action.selectedCatagory, state.catagoriesLevel),
                catagoriesLevel: state.catagoriesLevel + 1,
                selectedCatagories: addCatagory(state.selectedCatagories, action.selectedCatagory),
            }
        case 'ssssssssss':
            let pastLevel = state.catagoriesLevel-2
            console.log('past level', pastLevel);
            let centers = filterCentersByUserAndCatagory(CENTERS, state.userAge, state.userGender, state.selectedCatagories[pastLevel], pastLevel)
            return {
                current: centers,
                catagoriesLevel: pastLevel,
                selectedCatagories: removeCatagory(state.selectedCatagories)
            }
        default:
            return state;
    }
}