import * as types from './types';

export const goTo = (route) => {
    console.log("action triggered going to route:", route)
    return {
        type: types.GO_TO,
        route: route,
    }
}