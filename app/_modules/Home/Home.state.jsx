import {TEST} from '../../_redux/actionTypes'

const initialState = {}

const homeReducers = {
  [TEST]: (state, payload) => ({
    ...state,
    test: payload
  })
}

export const homeRootReducer = (state = initialState, action) => {
  let reducer = homeReducers[action.type]
  return reducer ? reducer(state, action.payload) : state
}
