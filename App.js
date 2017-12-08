import React, { Component } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableHighlight, 
  Button
} from "react-native";
import firebase from "firebase";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

import Config from 'react-native-config';


import { Header, Spinner } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
        apiKey: Config.FIREBASE_API_KEY,
        authDomain: Config.FIREBASE_AUTH_DOMAIN,
        databaseURL: Config.FIREBASE_DATABSE_URL,
        projectId: Config.FIREBASE_PROJECT_ID,
        storageBucket: Config.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: Config.FIREBASE_SENDER_ID
    });

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            this.setState({ loggedIn: true });
        } else {
            this.setState({ loggedIn: false });
        }
    });

    this._onLogoutPressed.bind(this)
  }

  _onLogoutPressed = () => {
        firebase.auth().signOut();
        this.setState({ loggedIn: false });
  };


  render() {
    return(
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  signinField: {
    marginTop: 15,
    marginLeft: 35,
    marginRight: 35,
  },
  signinButton: {
    alignItems: 'center',
    borderRadius: 45,
    backgroundColor: '#4ed589',
  },
  buttonText: {
    fontSize: 16,
    padding: 15,
    color: 'white'
  },
});
