import {
  GET_ALL_URL_STREAMER_REQUEST,
  GET_ALL_URL_STREAMER_SUCCESS,
  GET_ALL_URL_STREAMER_FAIL,
  CLEAR_GET_ALL_URL_STREAMER_FAIL,
} from './types'
import axiosClient from '../../apis'
import { createLogHistory } from '../../apis'

export const loadDataAllUrlStreamer = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_URL_STREAMER_REQUEST })

    const { data } = await axiosClient.get('/stream/me')

    dispatch({ type: GET_ALL_URL_STREAMER_SUCCESS, payload: data.streams })
  } catch (error) {
    await createLogHistory(`${error?.response?.data?.message}`)
    dispatch({
      type: GET_ALL_URL_STREAMER_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const clearErrorsLoadAllUrlFail = () => async (dispatch) => {
  dispatch({ type: CLEAR_GET_ALL_URL_STREAMER_FAIL })
}
