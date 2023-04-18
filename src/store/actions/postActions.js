import axiosClient from '../../apis'
import {
  NEW_POST_REQUEST,
  NEW_POST_SUCCESS,
  NEW_POST_FAIL,
  CLEAR_NEW_POST_FAIL,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_FAIL,
  CLEAR_GET_ALL_POST_FAIL,
  LOAD_POST_USER_REQUEST,
  LOAD_POST_USER_SUCCESS,
  LOAD_POST_USER_FAIL,
  CLEAR_LOAD_POST_USER_FAIL,
  LOAD_POST_ID_REQUEST,
  LOAD_POST_ID_SUCCESS,
  LOAD_POST_ID_FAIL,
  CLEAR_LOAD_POST_ID_FAIL,
  DELETE_POST_ID_SUCCESS,
  DELETE_POST_ID_FAIL,
  GET_CATEGORY_POST_REQUEST,
  GET_CATEGORY_POST_SUCCESS,
  GET_CATEGORY_POST_FAIL,
  CLEAR_GET_CATEGORY_POST_FAIL,
  LOAD_CATEGORY_POST_ID_REQUEST,
  LOAD_CATEGORY_POST_ID_SUCCESS,
  LOAD_CATEGORY_POST_ID_FAIL,
  CLEAR_LOAD_CATEGORY_POST_ID_FAIL,
  NEW_COMMENT_REQUEST,
  NEW_COMMENT_SUCCESS,
  NEW_COMMENT_FAIL,
  CLEAR_NEW_COMMENT_FAIL,
  DELETE_COMMENT_ID_SUCCESS,
  DELETE_COMMENT_ID_FAIL,
  RESET_CREATE_COMMENT,
  LOAD_COMMENT_POST_ID_REQUEST,
  LOAD_COMMENT_POST_ID_SUCCESS,
  LOAD_COMMENT_POST_ID_FAIL,
  CLEAR_LOAD_COMMENT_POST_ID_FAIL,
  CLEAR_DELETE_POST_ID,
} from './types'

export const createPost = (postData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_POST_REQUEST })

    const { data } = await axiosClient.post('/post', postData)

    dispatch({ type: NEW_POST_SUCCESS, payload: data.newPost })
  } catch (error) {
    dispatch({ type: NEW_POST_FAIL, payload: error.response.data.message })
  }
}

export const deletePostById = (id) => async (dispatch) => {
  try {
    await axiosClient.delete(`/post/${id}`)

    dispatch({ type: DELETE_POST_ID_SUCCESS })
  } catch (error) {
    dispatch({
      type: DELETE_POST_ID_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const loadPostUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_POST_USER_REQUEST })

    const { data } = await axiosClient.get('/post/posts/me')

    dispatch({ type: LOAD_POST_USER_SUCCESS, payload: data.posts })
  } catch (error) {
    dispatch({
      type: LOAD_POST_USER_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const loadDataAllPost = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_POST_REQUEST })

    const { data } = await axiosClient.get('/post')

    dispatch({ type: GET_ALL_POST_SUCCESS, payload: data.posts })
  } catch (error) {
    dispatch({
      type: GET_ALL_POST_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const clearErrorsCreatePost = () => async (dispatch) => {
  dispatch({ type: CLEAR_NEW_POST_FAIL })
}

export const clearDeletePostSuccess = () => async (dispatch) => {
  dispatch({ type: CLEAR_DELETE_POST_ID })
}

export const getPostById = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_POST_ID_REQUEST })

    const { data } = await axiosClient.get(`/post/${id}`)

    dispatch({ type: LOAD_POST_ID_SUCCESS, payload: data.post })
  } catch (error) {
    dispatch({
      type: LOAD_POST_ID_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const loadCategoriesPost = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORY_POST_REQUEST })

    const { data } = await axiosClient.get('/category-post/categoriesPosts')

    dispatch({ type: GET_CATEGORY_POST_SUCCESS, payload: data.categories })
  } catch (error) {
    dispatch({
      type: GET_CATEGORY_POST_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const getCategoryPostById = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_CATEGORY_POST_ID_REQUEST })

    const { data } = await axiosClient.get(`/category-post/${id}`)

    dispatch({ type: LOAD_CATEGORY_POST_ID_SUCCESS, payload: data.category })
  } catch (error) {
    dispatch({
      type: LOAD_CATEGORY_POST_ID_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const createComment = (id, text) => async (dispatch) => {
  try {
    dispatch({ type: NEW_COMMENT_REQUEST })

    const { data } = await axiosClient.post(`/comments/${id}`, { text })

    dispatch({ type: NEW_COMMENT_SUCCESS, payload: data.newPost })
  } catch (error) {
    dispatch({ type: NEW_COMMENT_FAIL, payload: error.response.data.message })
  }
}

export const clearErrorsCreateComment = () => async (dispatch) => {
  dispatch({ type: CLEAR_NEW_COMMENT_FAIL })
}

export const getCommentPostById = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_COMMENT_POST_ID_REQUEST })

    const { data } = await axiosClient.get(
      `/comments/comments-by-post-id/${id}`
    )

    dispatch({ type: LOAD_COMMENT_POST_ID_SUCCESS, payload: data.commentPost })
  } catch (error) {
    dispatch({
      type: LOAD_COMMENT_POST_ID_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const deleteCommentPostById = (id, commentId) => async (dispatch) => {
  try {
    console.log(commentId)
    await axiosClient.delete(`/comments/${id}`, {
      data: { commentId: commentId },
    })

    dispatch({ type: DELETE_COMMENT_ID_SUCCESS })
  } catch (error) {
    dispatch({
      type: DELETE_COMMENT_ID_FAIL,
      payload: error.response.data.message,
    })
  }
}
