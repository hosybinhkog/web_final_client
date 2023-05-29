import axios from 'axios'
import axiosClient from '../../apis'
import {
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  CLEAR_ERRORS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_FAILURE,
  REGISTER_STREAMER_SUCCESS,
  REGISTER_STREAMER_REQUEST,
  REGISTER_STREAMER_FAIL,
  CLEAR_ERRORS_REGISTER_STREAMER,
  REGISTER_STREAMER_RESET_REGISTER_STREAMER,
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
} from './types'
import { createLogHistory } from '../../apis'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST })

    const { data } = await axiosClient.post('/user/login', {
      email,
      password,
    })
    dispatch({ type: LOGIN_SUCCESS, payload: data.user })
    console.log(data.user)
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response.data.message,
    })
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS })
}

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST })

    const { data } = await axiosClient.get('/user/me')

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user })
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const logout = () => async (dispatch) => {
  try {
    await axiosClient.get(`/user/logout`)

    dispatch({ type: LOGOUT_SUCCESS })
  } catch (error) {
    dispatch({
      type: LOGOUT_FAILURE,
      payload: error.response.data.message,
    })
  }
}

export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST })

    const { data } = await axios.post(
      `http://localhost:4444/api/v1/user/register`,
      {
        username,
        email,
        password,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    )

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user })
  } catch (error) {
    await createLogHistory(`${error?.response?.data?.message}`)
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const registerStreamer = (streamerData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_STREAMER_REQUEST })

    const { data } = await axiosClient.post(
      `/user/register/streammer/new`,
      streamerData
    )

    dispatch({
      type: REGISTER_STREAMER_SUCCESS,
      payload: data.registerStreammer,
    })
  } catch (error) {
    await createLogHistory(`${error?.response?.data?.message}`)
    dispatch({
      type: REGISTER_STREAMER_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const clearErrorsRegisterStreamer = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS_REGISTER_STREAMER })
}

export const updatePassword = (password) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST })

    const { data } = await axiosClient.put(`/user/password/update`, password)

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success })
  } catch (error) {
    await createLogHistory(`${error?.response?.data?.message}`)
    dispatch({
      type: UPDATE_PASSWORD_FAILURE,
      payload: error?.response?.data?.message || 'error server inteval',
    })
  }
}

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST })

    const { data } = await axiosClient.post(`/user/change-password`, {
      email,
    })
    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message })
  } catch (error) {
    await createLogHistory(`${error?.response?.data?.message}`)
    dispatch({
      type: FORGOT_PASSWORD_FAILURE,
      payload: error?.response?.data?.message || 'error server inteval',
    })
  }
}

export const resetPassword = (token, password) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST })

    const { data } = await axiosClient.put(
      `/user/password/reset/${token}`,
      password
    )

    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success })
  } catch (error) {
    await createLogHistory(`${error?.response?.data?.message}`)
    dispatch({
      type: RESET_PASSWORD_FAILURE,
      payload:
        error?.response?.data?.message ||
        'Hết time reset password hoặc hệ thống đang gặp vấn đề xin thử lại với forgot password',
    })
  }
}

export const updateProfileUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST })

    const { data } = await axiosClient.put(`/user/me/update`, userData)

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success })
  } catch (error) {
    await createLogHistory(`${error?.response?.data?.message}`)
    dispatch({
      type: UPDATE_PROFILE_FAILURE,
      payload: error.response.data.message,
    })
  }
}

export const updateProfileStreamer = (streamerData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_STREAMER_REQUEST })

    const { data } = await axiosClient.put(`/user/streammer/me`, streamerData)

    dispatch({ type: UPDATE_PROFILE_STREAMER_SUCCESS, payload: data.success })
  } catch (error) {
    await createLogHistory(`${error?.response?.data?.message}`)
    dispatch({
      type: UPDATE_PROFILE_STREAMER_FAILURE,
      payload: error.response.data.message,
    })
  }
}

export const loadStreamer = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_STREAMER_REQUEST })

    const { data } = await axiosClient.get('/user/streammer/me')

    dispatch({ type: LOAD_STREAMER_SUCCESS, payload: data.streammer })
  } catch (error) {
    await createLogHistory(`${error?.response?.data?.message}`)
    dispatch({
      type: LOAD_STREAMER_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const getIntroduceStreamerById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_STREAMER_INTRODUCE_REQUEST })

    const { data } = await axiosClient.get(`/streammer/${id}`)

    dispatch({ type: GET_STREAMER_INTRODUCE_SUCCESS, payload: data.streammer })
  } catch (error) {
    await createLogHistory(`${error?.response?.data?.message}`)
    dispatch({
      type: GET_STREAMER_INTRODUCE_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const clearIntroduceStreamerSuccess = () => async (dispatch) => {
  dispatch({ type: CLEAR_GET_STREAMER_INTRODUCE_SUCCESS })
}

export const clearErrorsFollowAndUnFollowStreamer = () => async (dispatch) => {
  dispatch({
    type: CLEAR_FOLLOW_STREAMER_FAIL,
  })
}

export const clearFollowAndUnFollowStreamerSuccess = () => async (dispatch) => {
  dispatch({
    type: RESET_FOLLOW_STREAMER_SUCCESS,
  })
}

export const followStreamer = (streamerId) => async (dispatch) => {
  try {
    dispatch({ type: FOLLOW_STREAMER_REQUEST })

    const { data } = await axiosClient.post(`/user/unOrAddFollow`, {
      streamerId,
    })
    dispatch({ type: FOLLOW_STREAMER_SUCCESS, payload: data.success })
  } catch (error) {
    await createLogHistory(`${error?.response?.data?.message}`)
    dispatch({
      type: FOLLOW_STREAMER_FAIL,
      payload: error?.response?.data?.message,
    })
  }
}
