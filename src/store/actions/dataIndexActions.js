import axiosClient from '../../apis'
import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAIL,
  CLEAR_LOAD_DATA_FAIL,
} from './types'
import { createLogHistory } from '../../apis'

export const loadDataIndex = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_DATA_REQUEST })

    const { data } = await axiosClient.get('/commom/getDataIndex')

    dispatch({ type: LOAD_DATA_SUCCESS, payload: data })
  } catch (error) {
    await createLogHistory(`${error?.response?.data?.message}`)
    dispatch({
      type: LOAD_DATA_FAIL,
      payload: error.response.data.message,
    })
  }
}
