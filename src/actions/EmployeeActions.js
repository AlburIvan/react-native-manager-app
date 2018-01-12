import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  NAVIGATE_TO_EMPLOYEE_CREATION,
  NAVIGATE_TO_EMPLOYEE_EDIT,
  EMPLOYEE_UPDATE,
  SELECTED_EMPLOYEE,
  NAVIGATE_TO_EMPLOYEE_LIST,
  RESET_EMPLOYEE_CREATE_FORM,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEES_FETCH_FAILED
} from "./types";

import firebase from "firebase";

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

export const employeeEdit = ({ employee }) => {
  return(dispatch) => {
    dispatch({ type: NAVIGATE_TO_EMPLOYEE_EDIT })
    dispatch({ type: SELECTED_EMPLOYEE, payload: employee })
  }
};


export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return(dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: NAVIGATE_TO_EMPLOYEE_LIST })
        dispatch({ type: RESET_EMPLOYEE_CREATE_FORM })
      })
      .catch(err => console.log(err));
  }
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return(dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: NAVIGATE_TO_EMPLOYEE_LIST })
        dispatch({ type: RESET_EMPLOYEE_CREATE_FORM })
      })
      .catch(err => console.log(err));
  }
};


export const fetchEmployees = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        console.log(`snapshot: `, snapshot.val());
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
      });
  };
};