import axios from "axios";
import returnErrors from "./messages";
import { USER_LOADED, USER_LOADING, AUTH_ERROR } from "../actions/types";

// CHECK TOKEN AND LOAD USER

export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  // Get TOKEN from state
  const token = getState().authReducer.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // if token add to headers

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  axios
    .get("/api/auth/user/", config)
    .then(response => {
      dispatch({
        type: USER_LOADED,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch(returnErrors(error.response.data, error.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};
