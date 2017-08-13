import { CENTERS } from '../data/mocks/centers';
import { CATAGORIES } from '../data/mocks/center_classification';
import * as types from '../lib/types';
import {
    filterCentersByUser,
    filterCentersByCatagoryAndUser,
    getSubCatagories,
    addCatagory,
    removeCatagory,
    getCenter,
} from './reducer_functions/catagories_reducer_functions';

export default function catagoriesReducer(state = {}, action) {
    let
        centersFiltered,
        catagories,
        selectedCatagories;
    switch (action.type) {
        case types.FILTER_CENTERS_BY_USER:
            centersFiltered =
                filterCentersByUser(
                    CENTERS,
                    action.userAge,
                    action.userGender
                )
            catagories =
                getSubCatagories(
                    CATAGORIES,
                    centersFiltered[0]
                )
            return {
                ...state,
                centers: centersFiltered[1],
                current: catagories,
                userAge: action.userAge,
                userGender: action.userGender,
                selectedCatagories: []
            }
        case types.FILTER_CENTERS_BY_CATAGORY:
            selectedCatagories =
                addCatagory(
                    state.selectedCatagories,
                    action.selectedCatagory
                )
            centersFiltered =
                filterCentersByCatagoryAndUser(
                    CENTERS,
                    CATAGORIES,
                    selectedCatagories,
                    state.userAge,
                    state.userGender
                )
            catagories =
                getSubCatagories(
                    CATAGORIES,
                    centersFiltered[0],
                    selectedCatagories
                )

            return {
                ...state,
                centers: centersFiltered[1],
                current: catagories,
                selectedCatagories: selectedCatagories,
            }
        case types.RESET_CATAGORIES:
            centersFiltered = filterCentersByUser(CENTERS, state.userAge, state.userGender)
            return {
                ...state,
                centers: centersFiltered[1],
                current: getSubCatagories(CATAGORIES, centersFiltered[0]),
                selectedCatagories: []
            }
        case types.POP_CATAGORY:
            selectedCatagories =
                removeCatagory(state.selectedCatagories)
            centersFiltered =
                filterCentersByCatagoryAndUser(
                    CENTERS,
                    CATAGORIES,
                    selectedCatagories,
                    state.userAge,
                    state.userGender
                )
            catagories =
                getSubCatagories(
                    CATAGORIES,
                    centersFiltered[0],
                    selectedCatagories
                )
            return {
                ...state,
                current: catagories,
                selectedCatagories: selectedCatagories,
            }
        case types.SELECT_CENTER:
            return {
                ...state,
                center: getCenter(CENTERS, action.center)
            }

        default:
            return state;
    }
}
