import axiosClient from '../../apis'
import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAIL,
  CLEAR_LOAD_DATA_FAIL,
} from './types'

export const loadDataIndex = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_DATA_REQUEST })

    const { data } = await axiosClient.get('/commom/getDataIndex')

    dispatch({ type: LOAD_DATA_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: LOAD_DATA_FAIL,
      payload: error.response.data.message,
    })
  }
}
