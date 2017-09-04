import { ActionTypes  as at } from '../actions'

const initialState = {
  budget: 1200,
  expenseAmount: null,
  expenseDescription: null,
  expenses: [],
}

const ACTION_HANDLERS = {
  [at.UPDATE_EXPENSE_AMOUNT]: (state, action) => (
    { ...state, expenseAmount: action.num}
  ),
  [at.UPDATE_EXPENSE_DESCRIPTION]: (state, action) => (
    { ...state, expenseDescription: action.text}
  ),
  [at.ADD_EXPENSE_TO_LIST]: (state, action) => (
    { ...state, expenses: [...state.expenses, action.expenseObj] }
  )
}

export default function AppReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
