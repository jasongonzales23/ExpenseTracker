/**
 * @flow
 */

import React, { Component } from 'react'
//import {Provider} from 'react-redux'
import Root from './src/native/Root'
//import store from './src/native/ConfigureStore'
import {
  AppRegistry,
} from 'react-native'

export default class ExpenseTracker extends Component {

  render() {
    return (
      <Root />
    )
  }
}

AppRegistry.registerComponent('ExpenseTracker', () => ExpenseTracker);
