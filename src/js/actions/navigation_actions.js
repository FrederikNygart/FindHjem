import * as types from '../lib/types';

export const goTo = (route, params = {}) => {
    return {
        type: types.GO_TO,
        route: route,
        params: params,
    }
}

export const goBack = (fromPage = null) => {
    return {
        type: types.GO_BACK,
        from: fromPage,
    }
}

export const setParams = (params = {}, route) => {
    return {
        type: types.SET_PARAMS,
        params: params,
        route: route,
    }
}