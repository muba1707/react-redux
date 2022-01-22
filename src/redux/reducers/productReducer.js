import { ActionTypes } from "../constants/action-types"

const initalState = {
    products: []
}

export const productReducer = function (state= initalState, {type, payload}) {
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default:
            return state
    }
}

export const selectedProductReducer = function(state={}, {type, payload}) {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}
