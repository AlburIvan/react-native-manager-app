import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILED
 } from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null,
    error: null
};

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case EMAIL_CHANGED:
            return  { ...state, email: action.payload };

        case PASSWORD_CHANGED:
            return  { ...state, password: action.payload };

        case LOGIN_USER_SUCCESS:
            return  { ...state, user: action.payload };

        case LOGIN_USER_FAILED:
            return  { ...state, error: action.payload };

        case CREATE_USER_SUCCESS:
            return  { ...state, user: action.payload };

        case CREATE_USER_FAILED:
            return  { ...state, error: action.payload };

        default:
            return state;
    }
};