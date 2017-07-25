import * as types from '../lib/types';

export const getCenters = () => {
    return {
        type: types.GET_CENTERS,
    }
}

export const filterCentersByAge = (age) => {
    return {
        type: types.FILTER_CENTERS_BY_AGE,
        age: age,
    }
}

export const filterCentersByGender = (gender) => {
    return {
        type: types.FILTER_CENTERS_BY_GENDER,
        gender: gender,
    }
}

export const filterCentersByCatagory = (selectedCatagory) => {
    return {
        type: types.FILTER_CENTERS_BY_CATAGORY,
        selectedCatagory: selectedCatagory,
    }
}

export const getCatagories = () => {
    return {
        type: types.GET_CATAGORIES,
    }
}

export const getSubCatagories = (selectedCatagory) => {
    return {
        type: types.GET_SUB_CATAGORIES,
        selectedCatagory: selectedCatagory,
    }
}