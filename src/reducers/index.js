import { createStore } from 'redux';
import {reduxActionTypes} from './reduxActionTypes';

const initialState = {
    posts: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case reduxActionTypes.SET_POSTS:
            return {
                ...state,
                posts: action.payload.posts
            }
        default:
            return state;
    }
}
export const store = createStore(reducer);