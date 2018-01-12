import { EMPLOYEE_UPDATE, SELECTED_EMPLOYEE, RESET_EMPLOYEE_CREATE_FORM } from "../actions/types";

const INITIAL_STATE = {
  name: "",
  phone: "",
  shift: "",
  employee: null,
  disabled: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      let disabled = action.payload.value ? true : false;
      return { ...state, [action.payload.prop]: action.payload.value, disabled: disabled };

    case SELECTED_EMPLOYEE:
      return  { ...state, employee: action.payload };

    case RESET_EMPLOYEE_CREATE_FORM:
      return INITIAL_STATE;

    default:
      return state;
  }
};
