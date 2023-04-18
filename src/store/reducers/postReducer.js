import {
  NEW_POST_REQUEST,
  NEW_POST_SUCCESS,
  NEW_POST_FAIL,
  CLEAR_NEW_POST_FAIL,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_FAIL,
  CLEAR_GET_ALL_POST_FAIL,
  RESET_CREATE_POST,
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
  CLEAR_DELETE_POST_ID,
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
} from '../actions/types'

export const postReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case NEW_POST_REQUEST:
      return {
        loading: true,
        success: false,
        post: null,
        error: null,
      }
    case NEW_POST_SUCCESS:
      return {
        loading: false,
        post: action.payload,
        success: true,
        error: null,
      }
    case NEW_POST_FAIL:
      return {
        loading: false,
        post: null,
        error: action.payload,
        success: false,
      }
    case DELETE_POST_ID_SUCCESS:
      return {
        loading: false,
        post: null,
        success: true,
      }
    case DELETE_POST_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case RESET_CREATE_POST:
    case CLEAR_DELETE_POST_ID:
      return {
        ...state,
        success: null,
      }
    case CLEAR_NEW_POST_FAIL:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export const loadPostUserReducer = (state = { posts: {} }, action) => {
  switch (action.type) {
    case LOAD_POST_USER_REQUEST:
      return {
        loading: true,
        postUser: null,
        error: null,
      }
    case LOAD_POST_USER_SUCCESS:
      return {
        loading: false,
        postUser: action.payload,
        success: true,
        error: null,
      }
    case LOAD_POST_USER_FAIL:
      return {
        loading: false,
        postUser: null,
        error: action.payload,
        success: false,
      }

    case CLEAR_LOAD_POST_USER_FAIL:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export const getDataAllPostReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_POST_REQUEST:
      return {
        loading: true,
        post: null,
        error: null,
      }
    case GET_ALL_POST_SUCCESS:
      return {
        loading: false,
        post: action.payload,
        error: null,
      }
    case GET_ALL_POST_FAIL:
      return {
        loading: false,
        post: null,
        error: action.payload,
      }
    case CLEAR_GET_ALL_POST_FAIL:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export const loadPostIdReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_POST_ID_REQUEST:
      return {
        loading: true,
        post: null,
        error: null,
      }
    case LOAD_POST_ID_SUCCESS:
      return {
        loading: false,
        post: action.payload,
        success: true,
        error: null,
      }
    case LOAD_POST_ID_FAIL:
      return {
        loading: false,
        post: null,
        error: action.payload,
        success: false,
      }

    case CLEAR_LOAD_POST_ID_FAIL:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export const loadCategoriesPostReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORY_POST_REQUEST:
      return {
        loading: true,
        categories: null,
        error: null,
      }
    case GET_CATEGORY_POST_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
        success: true,
        error: null,
      }
    case GET_CATEGORY_POST_FAIL:
      return {
        loading: false,
        categories: null,
        error: action.payload,
        success: false,
      }

    case CLEAR_GET_CATEGORY_POST_FAIL:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export const loadCategoriesPostIdReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_CATEGORY_POST_ID_REQUEST:
      return {
        loading: true,
        category: null,
        error: null,
      }
    case LOAD_CATEGORY_POST_ID_SUCCESS:
      return {
        loading: false,
        category: action.payload,
        success: true,
        error: null,
      }
    case LOAD_CATEGORY_POST_ID_FAIL:
      return {
        loading: false,
        category: null,
        error: action.payload,
        success: false,
      }

    case CLEAR_LOAD_CATEGORY_POST_ID_FAIL:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export const createCommentReducer = (state = { comment: {} }, action) => {
  switch (action.type) {
    case NEW_COMMENT_REQUEST:
      return {
        loading: true,
        success: false,
        comment: null,
        error: null,
      }
    case NEW_COMMENT_SUCCESS:
      return {
        loading: false,
        comment: action.payload,
        success: true,
        error: null,
      }
    case NEW_COMMENT_FAIL:
      return {
        loading: false,
        comment: null,
        error: action.payload,
        success: false,
      }
    case DELETE_COMMENT_ID_SUCCESS:
      return {
        loading: false,
        comment: null,
        success: true,
      }
    case DELETE_COMMENT_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case RESET_CREATE_COMMENT:
      return {
        ...state,
        success: null,
      }
    case CLEAR_NEW_COMMENT_FAIL:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export const loadCommentPostIdReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_COMMENT_POST_ID_REQUEST:
      return {
        loading: true,
        commentPost: null,
        error: null,
      }
    case LOAD_COMMENT_POST_ID_SUCCESS:
      return {
        loading: false,
        commentPost: action.payload,
        success: true,
        error: null,
      }
    case LOAD_COMMENT_POST_ID_FAIL:
      return {
        loading: false,
        commentPost: null,
        error: action.payload,
        success: false,
      }

    case CLEAR_LOAD_COMMENT_POST_ID_FAIL:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}
