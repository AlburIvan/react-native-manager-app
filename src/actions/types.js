// ActionCreator types

// [Navigation Reducer]
export const NAVIGATE_TO_LOGIN              = 'navigation.route.login';
export const NAVIGATE_TO_EMPLOYEE_LIST      = 'navigation.route.employee_list';
export const NAVIGATE_TO_EMPLOYEE_CREATION  = 'navigation.route.employee_creation';
export const NAVIGATE_TO_EMPLOYEE_EDIT      = 'navigation.route.employee_edit';


// [Authentication Reducer]
export const EMAIL_CHANGED          = 'auth.input.email_changed';
export const PASSWORD_CHANGED       = 'auth.input.password_changed';
export const LOGIN_USER_SUCCESS     = 'auth.state.login_success';
export const LOGIN_USER_FAILED      = 'auth.state.login_failed';
export const CREATE_USER_SUCCESS    = 'auth.state.create_acc_success';
export const CREATE_USER_FAILED     = 'auth.state.create_acc_failed';

// [Employee Reducer]
export const EMPLOYEE_UPDATE                = 'employee.state.employee_update';
export const SELECTED_EMPLOYEE              = 'employee.state.selected_employee';
export const RESET_EMPLOYEE_CREATE_FORM     = 'employee.state.form.reset';
export const EMPLOYEES_FETCH_SUCCESS        = 'employee.state.fetch_all.success';
export const EMPLOYEES_FETCH_FAILED         = 'employee.state.fetch_all.failed';