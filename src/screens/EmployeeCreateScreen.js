import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { employeeUpdate, employeeCreate } from "../actions/EmployeeActions";
import EmployeeForm from "../components/common/EmployeeForm";

class EmployeeCreateScreen extends Component {
  constructor(props) {
    super(props);

    this.onEmployeeFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  }

 

  render() {
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: "#4c69a5" }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.kawarecontainer}
        scrollEnabled={true}
      >
        <View style={styles.container}>
          <ScrollView
            style={styles.scrollviewContainer}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <EmployeeForm {...this.props} />

            <View style={styles.submitField}>
              <TouchableHighlight
                disabled={this.props.disabled}
                onPress={this.onEmployeeFormSubmit}
                underlayColor="white">
                <View style={[styles.submitButton, { backgroundColor: this.props.disabled ? '#AAAAAA' : '#4ed589'}]}>
                  <Text style={styles.buttonText}>Create</Text>
                </View>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift, disabled } = state.employeeForm;

  return { name, phone, shift, disabled };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate
})(EmployeeCreateScreen);

const styles = StyleSheet.create({
  kawarecontainer: {
    flex: 1
  },
  scrollviewContainer: {
    // flex: 1,
    // backgroundColor: 'red',
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FCFCFC"
  },
  formContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 35
  },
  usernameField: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 35,
    marginRight: 35
  },
  usernameLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#AAAAAA"
  },
  usernameInput: {
    fontSize: 16,
    height: 50
  },
  phoneField: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 35,
    marginRight: 35
  },
  phoneLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#AAAAAA"
  },
  phoneInput: {
    fontSize: 16,
    height: 50
  },
  shiftField: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 35,
    marginRight: 35
  },
  shiftLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#AAAAAA"
  },
  shiftInput: {
    fontSize: 16,
    height: 50
  },
  submitField: {
    flex: 2,
    marginTop: 15,
    marginLeft: 35,
    marginRight: 35
  },
  submitButton: {
    alignItems: "center",
    borderRadius: 45,
    backgroundColor: `#4ed589`
  },
  buttonText: {
    fontSize: 16,
    padding: 15,
    color: "white"
  }
});
