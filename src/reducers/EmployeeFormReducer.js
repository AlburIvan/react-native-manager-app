import { EMPLOYEE_UPDATE, RESET_EMPLOYEE_CREATE_FORM } from "../actions/types";

const INITIAL_STATE = {
  name: "",
  phone: "",
  shift: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // Key interpolation
      return { ...state, [action.payload.prop]: action.payload.value };

    case RESET_EMPLOYEE_CREATE_FORM:
      return INITIAL_STATE;

    default:
      return state;
  }
};
