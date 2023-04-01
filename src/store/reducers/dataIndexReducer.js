import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAIL,
  CLEAR_LOAD_DATA_FAIL,
} from '../actions/types'

export const getDataIndexReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case LOAD_DATA_REQUEST:
      return {
        loading: true,
        data: null,
        error: null,
      }
    case LOAD_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      }
    case LOAD_DATA_FAIL:
      return {
        loading: false,
        data: null,
        error: action.payload,
      }
    case CLEAR_LOAD_DATA_FAIL:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}
