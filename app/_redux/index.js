import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { homeRootReducer } from '../_modules/Home/Home.state'

const rootReducer = combineReducers({
  routing: routerReducer,
  homeState: homeRootReducer
})

export default rootReducer