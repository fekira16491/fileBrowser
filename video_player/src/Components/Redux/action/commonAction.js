import loginReducer from "../reducers/loginReducer";
import { SET_LOADER, SUCCESS_USERLIST, FAILURE_USERLIST, LOGINUSER } from "./actionTypes";

export const setLoader = (isLoading) => {
  return { type: SET_LOADER, payload: isLoading };
};

export const postSuccess = (data, options = {}) => {
  return { type: SUCCESS_USERLIST, payload: data };
};

export const setUser = (data, options = {}) => {
  return { type: LOGINUSER, payload: data };
};

/**
 * fetch failure to return error
 * @param {error} displays error
 * @returns type fetch failure,payload data
 */
export const postFailure = (err) => {
  return { type: FAILURE_USERLIST, payload: err.message };
};
