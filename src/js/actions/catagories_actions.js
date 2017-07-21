import * as types from '../lib/types';

export const getCatagories = () => {
    return {
        type: types.GET_CATAGORIES
    }
}

export const getSubCatagories = (selectedCatagory) => {
    return {
        type: types.GET_SUB_CATAGORIES,
        selectedCatagory: selectedCatagory
    }
}