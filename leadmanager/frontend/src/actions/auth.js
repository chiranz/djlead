import axios from "axios";
import { returnErrors } from "./messages";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../actions/types";

// LOGIN USER

export const login = (username, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify({ username, password });
  console.log(body, config);
  axios
    .post("/api/auth/login", body, config)
    .then(response => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error.response);
      // dispatch(returnErrors(error.response.data, error.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  // Get TOKEN from state
  const token = getState().auth.token;

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
