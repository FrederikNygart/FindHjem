import { CENTERS } from '../data/mocks/centers';
import { CATAGORIES } from '../data/mocks/center_classification'
import * as types from '../lib/types';

/**
 * Returns an array of centers
 * @param {Object} centers - Object with center objects within
 * @returns {Array}
 */
const getCenters = (centers) => {
    return Object.entries(centers).map(([key, val]) => {
        return val
    })
}

/**
 * Returns a list of centers filtered by age
 * @param {Number} age - age of user
 * @param {Object} centers - Object with Center objects within
 * @returns {Array}
 */
const filterCentersByAge = (age, centers) => {
    return getCenters(centers).reduce((acc, center) => {
        let lowerAge = center.ageLimit.lowerAge;
        let upperAge = center.ageLimit.upperAge;
        if (age >= lowerAge && age <= upperAge) {
            acc.push(center)
        }
        return acc;
    }, [])
}

/**
 * Returns a list of centers filtered by gender
 * @param {Number} gender - Gender of user where 1 = MALE and 2 = FEMALE
 * @param {Array} centers - Array of Center objects within
 * @returns {Array}
 */
const filterCentersByGender = (gender, centers) => {
    return centers.reduce((acc, center) => {
        //check if centers accepts the specific gender OR all genders
        if (center.gender === gender || center.gender === 0) {
            acc.push(center);
        }
        return acc;
    }, [])
}

/**
 * Returns a list of centers filtered by catagory
 * @param {String} selectedCatagory - the key of the selected catagory
 * @param {Object} centers - list of current centers to be filtered
 * @param {Number} catagoriesLevel - level of catagory in the catagory hierachy
 * @returns {Array} of centers
 */
const filterCentersByCatagory = (selectedCatagory, centers, catagoriesLevel) => {
    return centers.reduce((acc, center) => {
        //check if the center's catagory matches the selectedCatagory
        let centerCatagory = Object.keys(center.catagories)[catagoriesLevel];
        if (centerCatagory === selectedCatagory) {
            acc.push(center);
        }
        return acc;
    }, [])
}

/**
 * Returns an Object with unique catagory objects from the 'centers' Array
 * @param {Array} centers - Array of centers
 * @returns {Object} a unique list of catagories taken from the centers array
 */
const getCatagories = (centers, catagoriesLevel) => {
    return centers.reduce((acc, center) => {
        let [key, val] = Object.entries(center.catagories)[catagoriesLevel]
        if (key in acc) {
            //do nothing
        } else {
            acc[key] = val;
        }
        return acc;
    }, {})
}

export default function centerReducer(state = [], action) {
    switch (action.type) {
        case types.GET_CENTERS:
            return {
                ...state,
                current: getCenters(CENTERS),
            }

        case types.FILTER_CENTERS_BY_AGE:
            return {
                ...state,
                current: filterCentersByAge(action.age, CENTERS),
                catagoriesLevel: 0,
            }

        case types.FILTER_CENTERS_BY_GENDER:
            return {
                ...state,
                current: filterCentersByGender(action.gender, state.current),
            }
        case types.GET_CATAGORIES:
            return {
                ...state,
                catagories: getCatagories(state.current, state.catagoriesLevel),
            }
        case types.FILTER_CENTERS_BY_CATAGORY:
            return {
                ...state,
                current: filterCentersByCatagory(action.selectedCatagory, state.current, state.catagoriesLevel),
                catagoriesLevel: state.catagoriesLevel + 1
            }
        default:
            return state;
    }
}