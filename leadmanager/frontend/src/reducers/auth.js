import { USER_LOADED, USER_LOADING, AUTH_ERROR } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
        isLoading: false,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
