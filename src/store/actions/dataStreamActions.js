import axiosClient from '../../apis'
import {
  LOAD_DATA_STREAM_REQUEST,
  LOAD_DATA_STREAM_SUCCESS,
  LOAD_DATA_STREAM_FAIL,
  CLEAR_LOAD_DATA_STREAM_FAIL,
} from './types'

export const loadDataStream = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_DATA_STREAM_REQUEST })

    const { data } = await axiosClient.get('/stream/all-stream')

    dispatch({ type: LOAD_DATA_STREAM_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: LOAD_DATA_STREAM_FAIL,
      payload: error.response.data.message,
    })
  }
}
