import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import {
  computeBalance,
  submitExpense,
  updateExpenseAmount,
  updateExpenseDescription
} from '../actions/AppActions'

class ExpenseTracker extends Component {
  componentDidMount() {
    this.props.computeBalance()
  }

  render() {
    const {
      updateExpenseAmount,
      updateExpenseDescription,
      submitExpense
    } = this.props

    const {
      balance,
      expenseAmount,
      expenseDescription,
    } = this.props.AppReducer

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Add an expense
        </Text>
        <TextInput
          value={expenseAmount}
          keyboardType={"numeric"}
          onChangeText={updateExpenseAmount}
          placeholder="Amount"
        />
        <TextInput
          value={expenseDescription}
          onChangeText={updateExpenseDescription}
          placeholder="Description"
        />
        <Button
          onPress={submitExpense}
          title="Submit"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

      <Text style={styles.balance}>
        Remaining Balance: {balance}
      </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (state) => ({
  AppReducer: state.AppReducer
})

const mapDispatchToProps = {
  computeBalance,
  submitExpense,
  updateExpenseAmount,
  updateExpenseDescription
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTracker)