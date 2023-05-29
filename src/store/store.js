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
  getIntroduceStreamerReducer,
  addOrUnFollowStreamerReducer,
} from './reducers/userReducer'
import { getDataIndexReducer } from './reducers/dataIndexReducer'
import { getDataStreamReducer } from './reducers/dataStreamReducer'
import {
  postReducer,
  getDataAllPostReducer,
  loadPostUserReducer,
  loadPostIdReducer,
  loadCategoriesPostReducer,
  createCommentReducer,
  loadCommentPostIdReducer,
} from './reducers/postReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  reportPostReducer,
  loadCategoriesReportPostReducer,
  reportStreamerReducer,
} from './reducers/reportReducer'
import {
  getAllStreamerFilterReducer,
  getProductsCountReducer,
  getResultPerPageReducer,
  getFilteredProductsCountReducer,
} from './reducers/searchReducer'

import { getDataAllUrlStreamReducer } from './reducers/streamReducer'

const initialState = {}

const reducers = combineReducers({
  users: userReducer,
  password: forgotPasswordReducer,
  updateProfileUser: updateUserReducer,
  streamer: userStreamerReducer,
  loadStreamer: loadStreamerReducer,
  updateProfileStreamer: updateStreamerReducer,
  loadDataIndex: getDataIndexReducer,
  loadDataStream: getDataStreamReducer,
  post: postReducer,
  loadDataAllPost: getDataAllPostReducer,
  loadPostUser: loadPostUserReducer,
  getPostById: loadPostIdReducer,
  loadCategoriesPost: loadCategoriesPostReducer,
  createComment: createCommentReducer,
  getCommentPostById: loadCommentPostIdReducer,
  reportPost: reportPostReducer,
  loadCategoriesReportPost: loadCategoriesReportPostReducer,
  getIntroduceStreamerById: getIntroduceStreamerReducer,
  followStreamer: addOrUnFollowStreamerReducer,
  getDataAllStreamerFilter: getAllStreamerFilterReducer,
  newReport: reportStreamerReducer,
  loadDataAllUrlStreamer: getDataAllUrlStreamReducer,
})

const middleware = [thunk]

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
