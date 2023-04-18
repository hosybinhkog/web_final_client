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
  REGISTER_STREAMER_SUCCESS,
  REGISTER_STREAMER_REQUEST,
  REGISTER_STREAMER_FAIL,
  REGISTER_STREAMER_RESET_REGISTER_STREAMER,
  CLEAR_ERRORS_REGISTER_STREAMER,
  LOAD_STREAMER_REQUEST,
  LOAD_STREAMER_FAIL,
  LOAD_STREAMER_SUCCESS,
  UPDATE_PROFILE_STREAMER_REQUEST,
  UPDATE_PROFILE_STREAMER_SUCCESS,
  UPDATE_PROFILE_STREAMER_RESET,
  UPDATE_PROFILE_STREAMER_FAILURE,
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAIL,
  CLEAR_LOAD_DATA_FAIL,
  GET_STREAMER_INTRODUCE_REQUEST,
  GET_STREAMER_INTRODUCE_SUCCESS,
  GET_STREAMER_INTRODUCE_FAIL,
  CLEAR_GET_STREAMER_INTRODUCE_FAIL,
  CLEAR_GET_STREAMER_INTRODUCE_SUCCESS,
  FOLLOW_STREAMER_REQUEST,
  FOLLOW_STREAMER_SUCCESS,
  FOLLOW_STREAMER_FAIL,
  CLEAR_FOLLOW_STREAMER_FAIL,
  RESET_FOLLOW_STREAMER_SUCCESS,
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

export const userStreamerReducer = (state = { streamer: {} }, action) => {
  switch (action.type) {
    case REGISTER_STREAMER_REQUEST:
      return {
        loading: true,
        success: false,
        streamer: null,
        error: null,
      }
    case REGISTER_STREAMER_SUCCESS:
      return {
        loading: false,
        streamer: action.payload,
        success: true,
        error: null,
      }
    case REGISTER_STREAMER_FAIL:
      return {
        loading: false,
        streamer: null,
        error: action.payload,
        success: false,
      }
    case REGISTER_STREAMER_RESET_REGISTER_STREAMER:
      return {
        ...state,
        success: null,
      }
    case CLEAR_ERRORS_REGISTER_STREAMER:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export const loadStreamerReducer = (state = { streamer: {} }, action) => {
  switch (action.type) {
    case LOAD_STREAMER_REQUEST:
      return {
        loading: true,
        isStreamer: true,
      }
    case LOAD_STREAMER_SUCCESS:
      return {
        loading: false,
        streamer: action.payload,
        success: true,
        error: null,
      }
    case LOAD_STREAMER_FAIL:
      return {
        loading: false,
        streamer: null,
        error: action.payload,
        success: false,
      }

    case CLEAR_ERRORS_REGISTER_STREAMER:
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

export const updateStreamerReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_STREAMER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case UPDATE_PROFILE_STREAMER_SUCCESS:
      return {
        ...state,
        loading: false,
        streamer: action.payload,
        isUpdated: action.payload,
      }

    case UPDATE_PROFILE_STREAMER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case UPDATE_PROFILE_STREAMER_RESET:
      return {
        ...state,
        isUpdated: false,
      }

    default:
      return state
  }
}

export const getIntroduceStreamerReducer = (
  state = { streammer: {} },
  action
) => {
  switch (action.type) {
    case GET_STREAMER_INTRODUCE_REQUEST:
      return {
        loading: true,
        streammer: null,
        error: null,
      }
    case GET_STREAMER_INTRODUCE_SUCCESS:
      return {
        loading: false,
        streammer: action.payload,
        success: true,
        error: null,
      }
    case GET_STREAMER_INTRODUCE_FAIL:
      return {
        loading: false,
        streammer: null,
        error: action.payload,
        success: false,
      }
    case CLEAR_GET_STREAMER_INTRODUCE_SUCCESS:
      return {
        ...state,
        success: null,
      }
    case CLEAR_GET_STREAMER_INTRODUCE_FAIL:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export const addOrUnFollowStreamerReducer = (state = {}, action) => {
  switch (action.type) {
    case FOLLOW_STREAMER_REQUEST:
      return {
        loading: true,
        error: null,
      }
    case FOLLOW_STREAMER_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case FOLLOW_STREAMER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case RESET_FOLLOW_STREAMER_SUCCESS:
      return {
        ...state,
        success: null,
      }
    case CLEAR_FOLLOW_STREAMER_FAIL:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}
