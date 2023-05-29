import axiosClient from '../../apis'
import {
  LOAD_DATA_STREAM_REQUEST,
  LOAD_DATA_STREAM_SUCCESS,
  LOAD_DATA_STREAM_FAIL,
  CLEAR_LOAD_DATA_STREAM_FAIL,
} from './types'
import { createLogHistory } from '../../apis'

export const loadDataStream = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_DATA_STREAM_REQUEST })

    const { data } = await axiosClient.get('/stream/all-stream')

    dispatch({ type: LOAD_DATA_STREAM_SUCCESS, payload: data })
  } catch (error) {
    await createLogHistory(`${error?.response?.data?.message}`)
    dispatch({
      type: LOAD_DATA_STREAM_FAIL,
      payload: error.response.data.message,
    })
  }
}
