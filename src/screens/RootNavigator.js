import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, NavigationActions } from "react-navigation";

import LoginFormScreen from "./LoginFormScreen";
import EmployeeListScreen from "./EmployeeListScreen";
import EmployeeCreateScreen from './EmployeeCreateScreen';
import EmployeeEditForm from './EmployeeEditForm';

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
    })
  },
  EmployeeEdit: {
    screen: EmployeeEditForm,
    navigationOptions: ({ navigation }) => ({
      headerTitle: `Edit ${console.log(navigation)}`,
    })
  },
  
});


class AppWithNavigationState extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;

    if (nav.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back())

    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <RootNavigator
        navigation={ addNavigationHelpers({ dispatch, state: nav }) }
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});


export default connect(mapStateToProps)(AppWithNavigationState);
