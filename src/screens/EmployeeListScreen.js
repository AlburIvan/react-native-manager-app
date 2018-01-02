import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect }  from 'react-redux';

import {
  openEmployeeCreationForm
} from '../actions/EmployeeActions';

class EmployeeListScreen extends Component {

  constructor(props) {
    super(props);


    this.onFABClicked = this._onFABClicked.bind(this);
  }


  _onFABClicked() {
    this.props.openEmployeeCreationForm();
  }


  render() {
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>

        <ActionButton 
          buttonColor="rgba(231,76,60,1)"
          title="New Task" 
          onPress={this.onFABClicked}>
              <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return state;
}


export default connect(mapStateToProps, {
  openEmployeeCreationForm
})(EmployeeListScreen);

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
})