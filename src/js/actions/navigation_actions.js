import * as types from '../lib/types';

export const goTo = (route) => {
    return {
        type: types.GO_TO,
        route: route,
    }
}