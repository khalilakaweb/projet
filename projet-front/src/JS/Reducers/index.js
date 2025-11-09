import { combineReducers } from "redux";
import businessReducer from "./businessReducer";
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({ businessReducer, AuthReducer });

export default rootReducer;
