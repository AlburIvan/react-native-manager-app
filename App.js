import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Config from 'react-native-config';
import { addNavigationHelpers } from 'react-navigation';

import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

import firebase from "firebase";

import { Header, Spinner } from "./src/components/common";
import LoginFormScreen from "./src/screens/LoginFormScreen";
import RootNavigator from './src/screens/RootNavigator';

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
        <RootNavigator 
           /* navigation={addNavigationHelpers({ dispatch, state: navigationState })}*/ />
      </Provider>
    );
  }
}

// const mapStateToProps = (state) => {
//   return ({
//       navigationState: state.NavigationReducer // NavigationReducer contains the navigation state of the app
//   })
// }

// export default connect(mapStateToProps)(App)