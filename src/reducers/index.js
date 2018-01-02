// Reducers
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import navigationReducer from './NavigationReducer';
import employeeReducer from './EmployeeReducer';

export default combineReducers({
    auth: AuthReducer,
    nav: navigationReducer,
    employeeForm: employeeReducer
});