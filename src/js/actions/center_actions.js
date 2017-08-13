import * as types from '../lib/types';

export const getCenters = () => {
    return {
        type: types.GET_CENTERS,
    }
}

export const selectCenter = (center) => {
    return {
        type: types.SELECT_CENTER,
        center: center,
    }
}

export const filterCentersByUser = (age, gender) => {
    return {
        type: types.FILTER_CENTERS_BY_USER,
        userAge: age,
        userGender: gender,
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

export const resetCatagories = () =>{
    return {
        type: types.RESET_CATAGORIES
    }
}

export const popCatagory = () =>{
    return {
        type: types.POP_CATAGORY
    }
}