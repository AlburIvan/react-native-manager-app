import React, { Component } from 'react';
import { BackHandler } from 'react-native';
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
    dispatch({
      type: 'Navigation/BACK'
    })
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <RootNavigator
        navigation={addNavigationHelpers({ dispatch, state: nav })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});


export default connect(mapStateToProps)(AppWithNavigationState);
