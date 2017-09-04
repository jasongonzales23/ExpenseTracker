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
  submitExpense,
  updateExpenseAmount,
  updateExpenseDescription
} from '../actions/AppActions'

class ExpenseTracker extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const {
      expenseAmount,
      expenseDescription,
      submitExpense
    } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Add an expense
        </Text>
        <TextInput
          keyboardType={"numeric"}
          onChangeText={this.props.updateExpenseAmount}
          placeholder="Amount"
        />
        <TextInput
          onChangeText={this.props.updateExpenseDescription}
          placeholder="Description"
        />
        <Button
          onPress={submitExpense}
          title="Submit"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
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
  app: state.app
})

const mapDispatchToProps = {
  submitExpense,
  updateExpenseAmount,
  updateExpenseDescription
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTracker)