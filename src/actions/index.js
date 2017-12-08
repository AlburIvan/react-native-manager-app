import { EMAIL_CHANGED } from './types';

// ActionCreator
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}