import {
  LOAD_DATA_STREAM_REQUEST,
  LOAD_DATA_STREAM_SUCCESS,
  LOAD_DATA_STREAM_FAIL,
  CLEAR_LOAD_DATA_STREAM_FAIL,
} from '../actions/types'

export const getDataStreamReducer = (state = { stream: {} }, action) => {
  switch (action.type) {
    case LOAD_DATA_STREAM_REQUEST:
      return {
        loading: true,
        stream: null,
        error: null,
      }
    case LOAD_DATA_STREAM_SUCCESS:
      return {
        loading: false,
        stream: action.payload,
        error: null,
      }
    case LOAD_DATA_STREAM_FAIL:
      return {
        loading: false,
        stream: null,
        error: action.payload,
      }
    case CLEAR_LOAD_DATA_STREAM_FAIL:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}
