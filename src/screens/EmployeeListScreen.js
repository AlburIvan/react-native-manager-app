import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, TouchableWithoutFeedback } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

import { connect } from "react-redux";

import _ from 'lodash';

import {
  openEmployeeCreationForm,
  fetchEmployees,
  employeeEdit
} from "../actions/EmployeeActions";

class EmployeeListScreen extends Component {
  
  constructor(props) {
    super(props);

    this.onFABClicked = this._onFABClicked.bind(this);
    this.onRowPress   = this._onRowPress.bind(this);
  }

  componentWillMount() {
    this.props.fetchEmployees();
  }

  _onFABClicked() {
    this.props.openEmployeeCreationForm();
  }

  _onRowPress(employee) {
    this.props.employeeEdit({ employee: employee });
  }

  renderRow(employee) {
    return (
      <View style={styles.rowItem}>
        <TouchableWithoutFeedback
          onPress={() => this.onRowPress(employee)}>
          <View>
            <Text key={employee.uid} style={styles.rowItemText}>{employee.name} with shift on {employee.shift}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    ) 
  }

  render() {
    return (
      <View style={styles.container}>

        <FlatList
          data={this.props.employees}
          renderItem={({ item }) => this.renderRow(item)}
        />

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

const mapStateToProps = state => {

  const employees = _.map(state.employees.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { state, employees };
};

export default connect(mapStateToProps, {
  openEmployeeCreationForm,
  fetchEmployees,
  employeeEdit
})(EmployeeListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  },
  rowItem: {
    marginTop: 16,
    height: 35,
    borderStyle: 'solid',
    borderBottomWidth: 0.2,
    borderColor: 'black'
  },
  rowItemText: {
    fontSize: 20
  }
});
