import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import userReducer, {
  forgotPasswordReducer,
  updateUserReducer,
  userStreamerReducer,
} from './reducers/userReducer'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {}

const reducers = combineReducers({
  users: userReducer,
  password: forgotPasswordReducer,
  updateProfileUser: updateUserReducer,
  streamer: userStreamerReducer,
})

const middleware = [thunk]

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
