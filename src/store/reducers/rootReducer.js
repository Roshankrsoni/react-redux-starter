import { combineReducers } from 'redux'
import { imageReducer } from './test/reducer'
// import { reducer as burgerMenu } from 'redux-burger-menu'

const rootReducer = combineReducers({
  splace: imageReducer,
  // burgerMenu: burgerMenu,

})

export default rootReducer
