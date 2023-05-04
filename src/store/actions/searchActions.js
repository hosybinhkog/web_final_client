import {
  SEARCH_STREAMER_REQUEST,
  SEARCH_STREAMER_SUCCESS,
  SEARCH_STREAMER_FAIL,
  CLEAR_SEARCH_STREAMER_FAIL,
  CLEAR_SEARCH_STREAMER_SUCCESS,
} from './types'
import axiosClient from '../../apis'

export const getDataAllStreamerFilter =
  (keyword = '', resultPerPage, page = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: SEARCH_STREAMER_REQUEST })
      let url = `/stream/all-stream-by-filter?keyword=${keyword}&page=${page}`
      // if (keyword && resultPerPage && page) {
      //   url = `/stream/all-stream-by-filter?keyword=${keyword}&resultPerPage=${resultPerPage}&page=${page}`
      // } else if (keyword && resultPerPage) {
      //   url = `/stream/all-stream-by-filter?keyword=${keyword}&resultPerPage=${resultPerPage}`
      // } else if (keyword && page) {
      //   url = `/stream/all-stream-by-filter?keyword=${keyword}&page=${page}`
      // } else {
      //   url = `/stream/all-stream-by-filter?keyword=${keyword}`
      // }

      if (resultPerPage) {
        url = `/stream/all-stream-by-filter?keyword=${keyword}&resultPerPage=${resultPerPage}&page=${page}`
      }
      const { data } = await axiosClient.get(url)

      dispatch({ type: SEARCH_STREAMER_SUCCESS, payload: data })
    } catch (error) {
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
