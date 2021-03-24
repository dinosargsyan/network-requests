import { createStore } from 'redux';
import {reduxActionTypes} from './reduxActionTypes';

const initialState = {
    todos: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case reduxActionTypes.SET_TODOS:
            return {
                ...state,
                todos: action.payload.todos
            }
        default:
            return state;
    }
}
export const store = createStore(reducer);