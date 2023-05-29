import {
  SEARCH_STREAMER_REQUEST,
  SEARCH_STREAMER_SUCCESS,
  SEARCH_STREAMER_FAIL,
  CLEAR_SEARCH_STREAMER_FAIL,
  CLEAR_SEARCH_STREAMER_SUCCESS,
} from './types'
import axiosClient from '../../apis'
import { createLogHistory } from '../../apis'

export const getDataAllStreamerFilter =
  (keyword = '', resultPerPage, page = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: SEARCH_STREAMER_REQUEST })
      let url = `/stream/all-stream-by-filter?keyword=${keyword}&page=${page}`

      if (resultPerPage) {
        url = `/stream/all-stream-by-filter?keyword=${keyword}&resultPerPage=${resultPerPage}&page=${page}`
      }
      const { data } = await axiosClient.get(url)

      dispatch({ type: SEARCH_STREAMER_SUCCESS, payload: data })
    } catch (error) {
      await createLogHistory(`${error?.response?.data?.message}`)
      dispatch({
        type: SEARCH_STREAMER_FAIL,
        payload: error.response.data.message,
      })
    }
  }

export const clearErrorsStreamerFilter = () => async (dispatch) => {
  dispatch({ type: CLEAR_SEARCH_STREAMER_FAIL })
}

export const clearStreamerFilterSuccess = () => async (dispatch) => {
  dispatch({ type: CLEAR_SEARCH_STREAMER_SUCCESS })
}
