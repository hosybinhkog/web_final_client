import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
} from "../actions/userActions";

const initialState = {
  loading: false,
  username: null,
  error: null,
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        username: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        username: "action.payload",
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        username: null,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default userReducer;
