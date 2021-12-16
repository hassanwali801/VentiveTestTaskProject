import * as types from '../actions/types'

const INITIAL_STATE = {
    currentUser: null,
    isSignedIn: false,
    authToken: null,
    users: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.LOGOUT:
            return {
                ...INITIAL_STATE,
                users: state.users
            };
        case types.USER_SESSION_CHANGE_STATE:
            return {
                ...state,
                ...action.payload,
            };
        case types.SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isSignedIn: true
            };
        case types.CREATE_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
                currentUser: action.payload,
                isSignedIn: true
            };
        case types.LOGIN_RESPONSE:
            return {
                ...state,
                currentUser: action.payload,
                isSignedIn: true,
                authToken: action.payload.token,
            };
        case types.SIGNUP_RESPONSE:
            return {
                ...state,
                currentUser: action.payload.data,
                isSignedIn: true,
                authToken: action.payload.token,
            };
        default:
            return state;
    }
}