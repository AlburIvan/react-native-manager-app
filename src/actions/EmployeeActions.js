import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  NAVIGATE_TO_EMPLOYEE_CREATION,
  EMPLOYEE_UPDATE
} from "./types";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const openEmployeeCreationForm = () => {
  return {
    type: NAVIGATE_TO_EMPLOYEE_CREATION
  };
};

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};
