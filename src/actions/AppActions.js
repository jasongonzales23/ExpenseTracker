import { ActionTypes as at} from './index'

export function updateExpenseAmount(num) {
  return {
    type: at.UPDATE_EXPENSE_AMOUNT,
    num
  }
}

export function updateExpenseDescription(text) {
  return {
    type: at.UPDATE_EXPENSE_DESCRIPTION,
    text
  }
}

export function addExpenseToList(expenseObj) {
  return {
    type: at.ADD_EXPENSE_TO_LIST,
    expenseObj
  }
}

export function updateBalance(balance) {
  return {
    type: at.UPDATE_BALANCE,
    balance
  }
}

export const computeBalance = () => {
  return (dispatch, getState) => {
    const {
      balance,
      budget,
      expenses
    } = getState().AppReducer

    const bal = balance ? balance : budget
    const expenseTotal = expenses.reduce((total, exp) => {
      return parseInt(exp.amount) + total
    }, 0)

    const diff = bal - expenseTotal
    dispatch(updateBalance(diff))
  }
}

export const clearInputs = () => {
  return (dispatch, getState) => {
    dispatch(updateExpenseAmount(null))
    dispatch(updateExpenseDescription(null))
  }
}

export const submitExpense = () => {
  return (dispatch, getState) => {
    const {
      expenseAmount,
      expenseDescription
    } = getState().AppReducer

    const obj = {
      amount: expenseAmount,
      date: new Date(),
      description: expenseDescription,
    }

    dispatch(clearInputs())
    dispatch(addExpenseToList(obj))
    dispatch(computeBalance())
  }
}
