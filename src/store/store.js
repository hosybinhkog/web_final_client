import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import userReducer, {
  forgotPasswordReducer,
  updateUserReducer,
  userStreamerReducer,
  loadStreamerReducer,
  updateStreamerReducer,
} from './reducers/userReducer'
import { getDataIndexReducer } from './reducers/dataIndexReducer'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {}

const reducers = combineReducers({
  users: userReducer,
  password: forgotPasswordReducer,
  updateProfileUser: updateUserReducer,
  streamer: userStreamerReducer,
  loadStreamer: loadStreamerReducer,
  updateProfileStreamer: updateStreamerReducer,
  loadDataIndex: getDataIndexReducer,
})

const middleware = [thunk]

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
