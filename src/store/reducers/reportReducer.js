import {
  GET_CATEGORY_REPORT_REQUEST,
  GET_CATEGORY_REPORT_SUCCESS,
  GET_CATEGORY_REPORT_FAIL,
  CLEAR_GET_CATEGORY_REPORT_FAIL,
  NEW_REPORT_REQUEST,
  NEW_REPORT_SUCCESS,
  NEW_REPORT_FAIL,
  CLEAR_NEW_REPORT_FAIL,
  RESET_CREATE_REPORT,
} from '../actions/types'

export const reportPostReducer = (state = { reportPost: {} }, action) => {
  switch (action.type) {
    case NEW_REPORT_REQUEST:
      return {
        loading: true,
        success: false,
        reportPost: null,
        error: null,
      }
    case NEW_REPORT_SUCCESS:
      return {
        loading: false,
        reportPost: action.payload,
        success: true,
        error: null,
      }
    case NEW_REPORT_FAIL:
      return {
        loading: false,
        reportPost: null,
        error: action.payload,
        success: false,
      }

    case RESET_CREATE_REPORT:
      return {
        ...state,
        success: null,
      }
    case CLEAR_NEW_REPORT_FAIL:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export const loadCategoriesReportPostReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORY_REPORT_REQUEST:
      return {
        loading: true,
        reportPostCategories: null,
        error: null,
      }
    case GET_CATEGORY_REPORT_SUCCESS:
      return {
        loading: false,
        reportPostCategories: action.payload,
        success: true,
        error: null,
      }
    case GET_CATEGORY_REPORT_FAIL:
      return {
        loading: false,
        reportPostCategories: null,
        error: action.payload,
        success: false,
      }

    case CLEAR_GET_CATEGORY_REPORT_FAIL:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}
