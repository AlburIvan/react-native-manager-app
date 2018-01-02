import { NavigationActions } from "react-navigation";
import { RootNavigator } from "../screens/RootNavigator";
import {
  NAVIGATE_TO_LOGIN,
  NAVIGATE_TO_EMPLOYEE_LIST,
  NAVIGATE_TO_EMPLOYEE_CREATION
} from "../actions/types";

const { router } = RootNavigator;

// These produces a redux actions ({type: Navigation/NAVIGATE, routeName: '...'}).
const loginAction = router.getActionForPathAndParams("Login");
const employeeListAction = router.getActionForPathAndParams("EmployeeList");
const employeeCreateAction = router.getActionForPathAndParams("EmployeeCreate");

const initialState = router.getStateForAction(loginAction);

export default (navigationReducer = (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case NAVIGATE_TO_LOGIN:
      nextState = router.getStateForAction(loginAction, state);
      break;

    case NAVIGATE_TO_EMPLOYEE_LIST:
      nextState = router.getStateForAction(employeeListAction, state);
      break;

    case NAVIGATE_TO_EMPLOYEE_CREATION:
      nextState = router.getStateForAction(employeeCreateAction, state);
      break;
  }

  return nextState || state;
});
