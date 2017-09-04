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
