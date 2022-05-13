import {
  SUCCESS_USERLIST,
  FAILURE_USERLIST,
  SET_LOADER,GETUSER
} from "../action/actionTypes";
import { setLoader } from "../action/commonAction";

const initialState = {
  usersList: [],
  isLoading: false,
};
/**
 * user action reducer
 * @param {array} state - displays state
 * @param {object} action -action object that has type and payload
 * @returns usersList
 */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_USERLIST:
      return {
        ...state,
        usersList: action.payload,
      };
    case FAILURE_USERLIST:
      return { ...state, error: action.payload, usersList: [] };

    case SET_LOADER:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default userReducer;
