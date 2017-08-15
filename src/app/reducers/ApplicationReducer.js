import { NavigationActions } from 'react-navigation';
import { combineReducers } from 'redux';

function auth(state = { isLoggedIn: false }, action) {
    switch (action.type) {
        case 'Login':
            return { ...state, isLoggedIn: true }
        default:
            return state;
    }
}

export const ApplicationReducer = combineReducers({ auth })