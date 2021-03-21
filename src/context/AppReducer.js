import { actionTypes } from "./contextTypes"

export const appReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.payload.user
            }
            default:
                return state
    }
}