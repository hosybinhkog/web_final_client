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
import { getDataStreamReducer } from './reducers/dataStreamReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// import { isStreamingReducer } from './reducers/streamReducer'

const initialState = {}

const reducers = combineReducers({
  // isStreaming: isStreamingReducer,
  users: userReducer,
  password: forgotPasswordReducer,
  updateProfileUser: updateUserReducer,
  streamer: userStreamerReducer,
  loadStreamer: loadStreamerReducer,
  updateProfileStreamer: updateStreamerReducer,
  loadDataIndex: getDataIndexReducer,
  loadDataStream: getDataStreamReducer,
})

const middleware = [thunk]

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
