import * as types from './types';

export const goTo = (route) => {
    return {
        type: types.GO_TO,
        route: route,
    }
}