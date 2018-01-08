import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Picker,
  ScrollView,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../../actions/EmployeeActions";

class EmployeeForm extends Component {
  _renderPickerComponent() {
    const daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];

    let items = daysOfWeek.map(day => {
      return <Picker.Item key={day} label={day} value={day} />;
    });

    return items;
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <View style={styles.usernameField}>
          <Text style={styles.usernameLabel}>Name</Text>
          <TextInput
            style={styles.usernameInput}
            autoCorrect={false}
            keyboardType={"name-phone-pad"}
            underlineColorAndroid={"#D2D2D3"}
            value={this.props.name}
            placeholder="John Doe"
            onChangeText={text =>
              this.props.employeeUpdate({ prop: "name", value: text })
            }
          />
        </View>
        <View style={styles.phoneField}>
          <Text style={styles.phoneLabel}>Phone</Text>
          <TextInput
            style={styles.phoneInput}
            autoCorrect={false}
            keyboardType={"number-pad"}
            underlineColorAndroid={"#D2D2D3"}
            value={this.props.phone}
            placeholder="(809) 534 5941"
            onChangeText={text =>
              this.props.employeeUpdate({ prop: "phone", value: text })
            }
          />
        </View>
        <View style={styles.shiftField}>
          <Text style={styles.shiftLabel}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={day =>
              this.props.employeeUpdate({ prop: "shift", value: day })
            }
          >
            {this._renderPickerComponent()}
          </Picker>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(
  EmployeeForm
);

const styles = StyleSheet.create({
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
    backgroundColor: "#4ed589"
  },
  buttonText: {
    fontSize: 16,
    padding: 15,
    color: "white"
  }
});
