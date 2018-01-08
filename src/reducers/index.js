// Reducers
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import navigationReducer from './NavigationReducer';
import employeeFormReducer from './EmployeeFormReducer';
import employeeListReducer from './EmployeeListReducer';

export default combineReducers({
    auth: AuthReducer,
    nav: navigationReducer,
    employeeForm: employeeFormReducer,
    employees: employeeListReducer
});