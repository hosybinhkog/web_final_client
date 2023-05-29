import {
  GET_ALL_URL_STREAMER_REQUEST,
  GET_ALL_URL_STREAMER_SUCCESS,
  GET_ALL_URL_STREAMER_FAIL,
  CLEAR_GET_ALL_URL_STREAMER_FAIL,
} from '../actions/types'

export const getDataAllUrlStreamReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_URL_STREAMER_REQUEST:
      return {
        loading: true,
        streams: null,
        error: null,
      }
    case GET_ALL_URL_STREAMER_SUCCESS:
      return {
        loading: false,
        streams: action.payload,
        success: true,
        error: null,
      }
    case GET_ALL_URL_STREAMER_FAIL:
      return {
        loading: false,
        streams: null,
        success: false,
        error: action.payload,
      }
    case CLEAR_GET_ALL_URL_STREAMER_FAIL:
      return {
        ...state,
        error: null,
      }
    default:
      return { ...state }
  }
}
