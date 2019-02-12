import { combineReducers } from "redux";
import leadReducer from "./leads";
import errorReducer from "./errors";
import messageReducer from "./messages";
import authReducer from "./auth";

export default combineReducers({
  leadReducer,
  errorReducer,
  messageReducer,
  authReducer
});
