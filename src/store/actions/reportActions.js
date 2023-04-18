import {
  GET_CATEGORY_REPORT_REQUEST,
  GET_CATEGORY_REPORT_SUCCESS,
  GET_CATEGORY_REPORT_FAIL,
  NEW_REPORT_REQUEST,
  NEW_REPORT_SUCCESS,
  NEW_REPORT_FAIL,
  CLEAR_NEW_REPORT_FAIL,
} from './types'
import axiosClient from '../../apis'

export const createReport = (id, reportData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REPORT_REQUEST })

    const { data } = await axiosClient.post(`/report-post/${id}`, reportData)

    dispatch({ type: NEW_REPORT_SUCCESS, payload: data.reportPost })
  } catch (error) {
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
    dispatch({
      type: GET_CATEGORY_REPORT_FAIL,
      payload: error.response.data.message,
    })
  }
}
