
import {
    LOGINUSER
  } from "../action/actionTypes";
  
  const initialState = {
    user: "",
    isLoading: false,
  };

   /**
 * login reducer to perform operation of getting user while loggin 
 * @param {object} state - displays state 
  * @param {object} action -action object that has type and payload
 * @returns updated login state
 */
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGINUSER:
        return  {user:action.payload};
      default:
        return state;
    }
  };
  
  export default loginReducer;