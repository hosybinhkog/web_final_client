import {
  GET_CATEGORY_REPORT_REQUEST,
  GET_CATEGORY_REPORT_SUCCESS,
  GET_CATEGORY_REPORT_FAIL,
  NEW_REPORT_REQUEST,
  NEW_REPORT_SUCCESS,
  NEW_REPORT_FAIL,
  CLEAR_NEW_REPORT_FAIL,
  NEW_REPORT_STREAMER_REQUEST,
  NEW_REPORT_STREAMER_SUCCESS,
  NEW_REPORT_STREAMER_FAIL,
  CLEAR_NEW_REPORT_STREAMER_FAIL,
  RESET_CREATE_REPORT_STREAMER,
} from './types'
import axiosClient from '../../apis'
import { createLogHistory } from '../../apis'

export const createReport = (id, reportData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REPORT_REQUEST })

    const { data } = await axiosClient.post(`/report-post/${id}`, reportData)

    dispatch({ type: NEW_REPORT_SUCCESS, payload: data.reportPost })
  } catch (error) {
    await createLogHistory(`${error?.response?.data?.message}`)
    dispatch({ type: NEW_REPORT_FAIL, payload: error.response.data.message })
  }
}

export const clearErrorsCreateReport = () => async (dispatch) => {
  dispatch({ type: CLEAR_NEW_REPORT_FAIL })
}

export const loadCategoriesReportPost = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORY_REPORT_REQUEST })

    const { data } = await axiosClient.get('/report-post-category')

    dispatch({
      type: GET_CATEGORY_REPORT_SUCCESS,
      payload: data.reportPostCategories,
    })
  } catch (error) {
    await createLogHistory(`${error?.response?.data?.message}`)
    dispatch({
      type: GET_CATEGORY_REPORT_FAIL,
      payload: error?.response?.data?.message,
    })
  }
}

export const createReportStreamer = (id, reportData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REPORT_STREAMER_REQUEST })

    const { data } = await axiosClient.post(`/report-stream/${id}`, reportData)

    dispatch({ type: NEW_REPORT_STREAMER_SUCCESS, payload: data.newReport })
  } catch (error) {
    await createLogHistory(`${error?.response?.data?.message}`)
    dispatch({
      type: NEW_REPORT_STREAMER_FAIL,
      payload: error?.response?.data?.message,
    })
  }
}

export const clearErrorsCreateReportStreamer = () => async (dispatch) => {
  dispatch({ type: CLEAR_NEW_REPORT_STREAMER_FAIL })
}
