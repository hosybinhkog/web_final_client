import {
  SEARCH_STREAMER_REQUEST,
  SEARCH_STREAMER_SUCCESS,
  SEARCH_STREAMER_FAIL,
  CLEAR_SEARCH_STREAMER_FAIL,
  CLEAR_SEARCH_STREAMER_SUCCESS,
} from '../actions/types'

export const getAllStreamerFilterReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_STREAMER_REQUEST:
      return {
        loading: true,
        streams: null,
        errors: null,
      }
    case SEARCH_STREAMER_SUCCESS:
      return {
        loading: false,
        streams: action.payload.streams,
        productsCount: action.payload.productsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredProductsCount: action.payload.filteredProductsCount,
        success: true,
        error: null,
      }
    case SEARCH_STREAMER_FAIL:
      return {
        loading: false,
        streams: null,
        error: action.payload,
      }
    case CLEAR_SEARCH_STREAMER_FAIL:
      return {
        ...state,
        error: null,
      }
    case CLEAR_SEARCH_STREAMER_SUCCESS:
      return {
        ...state,
        success: null,
      }
    default:
      return state
  }
}
