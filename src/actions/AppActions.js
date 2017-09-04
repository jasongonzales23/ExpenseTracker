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

export const submitExpense = () => {
  return (dispatch, getState) => {
    const {
      expenseAmount,
      expenseDescription
    } = getState().AppReducer

    const obj = {
      amount: expenseAmount,
      description: expenseDescription,
    }

    dispatch(addExpenseToList(obj))
  }
}
