import { ActionTypes } from './index'

export function updateExpenseAmount(text) {
  return {
    type: ActionTypes.UPDATE_EXPENSE_AMOUNT,
    payload: text
  }
}

export function updateExpenseDescription(text) {
  return {
    type: ActionTypes.UPDATE_EXPENSE_DESCRIPTION,
    payload: text
  }
}

export function submitExpense(expenseObj) {
  return {
    type: ActionTypes.SUBMIT_EXPENSE,
    expenseObj
  }
}

export function addExpenseToList(expenseObj) {
  return {
    type: ADD_EXPENSE_TO_LIST,
    expenseObj
}