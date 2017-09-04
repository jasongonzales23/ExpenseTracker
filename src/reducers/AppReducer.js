import { ActionTypes } from '../actions'

const initialState = {
  expenseAmount: null,
  expenseDescription: null,
}

const ACTION_HANDLERS = {
  [ActionTypes.UPDATE_EXPENSE_AMOUNT]: (state, action) => ({ ...state, expenseAmount: action.payload})
}

export default function AppReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
