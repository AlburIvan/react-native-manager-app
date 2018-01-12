import { 
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEES_FETCH_FAILED
 } from '../actions/types';

const INITIAL_STATE = {
    employees: null,
    error: ''
};

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case EMPLOYEES_FETCH_SUCCESS:
            return { ...state, employees: action.payload};

        case EMPLOYEES_FETCH_FAILED:
            return  { ...state, error: action.payload};

        default:
            return state;
    }
}; 