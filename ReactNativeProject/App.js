/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect, Provider } from "react-redux";
import { Store } from "./src/store/index";
import MainScene from "./src/MainScene";

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={Store}>
        <MainScene></MainScene>
      </Provider>
    );
  }
}


