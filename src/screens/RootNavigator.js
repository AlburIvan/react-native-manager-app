import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, HeaderBackButton } from "react-navigation";

import LoginFormScreen from "./LoginFormScreen";
import EmployeeListScreen from "./EmployeeListScreen";
import EmployeeCreateScreen from './EmployeeCreateScreen';

export const RootNavigator = StackNavigator({
  Login: {
    screen: LoginFormScreen,
    navigationOptions: {
      header: null
    }
  },
  EmployeeList: {
    screen: EmployeeListScreen,
    navigationOptions: {
      headerTitle: 'Employee List',
      headerLeft: null
    }
  },
  EmployeeCreate: {
    screen: EmployeeCreateScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Create an Employee',
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack('EmployeeList')} />,
    })
  }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});


export default connect(mapStateToProps)(AppWithNavigationState);
