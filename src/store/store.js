import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import userReducer from './reducers/user.reducer'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {}

const reducers = combineReducers({
  user: userReducer,
})

const middleware = [thunk]

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
