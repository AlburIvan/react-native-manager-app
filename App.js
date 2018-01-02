import React, { Component } from "react";
import Config from 'react-native-config';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

import firebase from "firebase";

import AppWithNavigationState from './src/screens/RootNavigator';

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
        apiKey: Config.FIREBASE_API_KEY,
        authDomain: Config.FIREBASE_AUTH_DOMAIN,
        databaseURL: Config.FIREBASE_DATABSE_URL,
        projectId: Config.FIREBASE_PROJECT_ID,
        storageBucket: Config.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: Config.FIREBASE_SENDER_ID
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return(
      <Provider store={store} >
        <AppWithNavigationState />
      </Provider>
    );
  }
}