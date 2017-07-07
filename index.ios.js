/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import Login from './Main/Login.js'
import Home from './Main/Home.js'
import Route from './Main/Route.js'
import Row from './Main/Row.js'

export default class LoginApp extends React.Component {
  render() {
    return (
            <Route/>
    );
  }
}
AppRegistry.registerComponent('LoginApp', () => LoginApp);
