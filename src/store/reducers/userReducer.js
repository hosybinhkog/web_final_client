import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  CLEAR_ERRORS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAIL,
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_FAILURE,
} from '../actions/types'

const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      }
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      }
    case LOAD_USER_FAIL:
    case REGISTER_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      }
    case LOGIN_FAILURE:
      return {
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      }
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export default userReducer

export const updateUserReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isUpdated: action.payload,
      }

    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case UPDATE_PROFILE_RESET:
      return {
        ...state,
        isUpdated: false,
      }

    default:
      return state
  }
}

export const forgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
    case RESET_PASSWORD_REQUEST:
      return { ...state, loading: true, error: null }
    case FORGOT_PASSWORD_SUCCESS:
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        success: true,
      }
    case FORGOT_PASSWORD_FAILURE:
    case RESET_PASSWORD_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case CLEAR_ERRORS:
      return { ...state, error: null }
    default:
      return {
        ...state,
      }
  }
}
