import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILED
 } from './types';

import firebase from 'firebase';

// ActionCreator
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({email, password}) => {
    return(dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch({ type: LOGIN_USER_SUCCESS, payload: user});
            })
            .catch((err) => {
                dispatch({ type: LOGIN_USER_FAILED, payload: err});
            });
    };
}

export const signupUser = ({email, password}) => {
    return(dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch({ type: CREATE_USER_SUCCESS, payload: user});
            })
            .catch((err) => {
                dispatch({ type: CREATE_USER_FAILED, payload: err});
            });
    };
}