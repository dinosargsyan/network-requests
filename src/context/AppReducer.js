import {actionTypes } from "./contextTypes"

export const appReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.payload.user
            }
        case actionTypes.REMOVE_USER:
            return {
                ...state,
                user: null
            }
        case actionTypes.SET_POSTS:
            return {
                ...state,
                posts: action.payload.posts
            }
            default:
                return state
    }
}