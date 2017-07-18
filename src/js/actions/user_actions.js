import * as types from './types';

export const setAge = (age) => {
    console.log('Alder', age);
    return {
        type: types.SET_AGE,
        age: age,
    }
}

export const setGender = (gender) => {
    console.log('gender', gender);
    return {
        type: types.SET_GENDER,
        gender: gender,
    }
}