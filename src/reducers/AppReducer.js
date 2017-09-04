import { ActionTypes } from '../actions'

const initialState = {
  buddget: 1200,
  expenseAmount: null,
  expenseDescription: null,
  expenses: [],
}

const ACTION_HANDLERS = {
  [ActionTypes.UPDATE_EXPENSE_AMOUNT]: (state, action) => (
    { ...state, expenseAmount: action.payload}
  ),
  [ActionTypes.UPDATE_EXPENSE_DESCRIPTION]: (state, action) => (
    { ...state, expenseDescription: action.payload}
  ),
  [ActionTypes.SUBMIT_EXPENSE]: (state, action) => (
    { ...state, expenses: [...state.expenses, action.expenseObj] }
  )
}

export default function AppReducer(state = initialState, action) {
  console.log(action)

  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
