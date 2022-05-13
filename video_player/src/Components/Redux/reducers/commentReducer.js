import React from "react";
import {
    ADD_COMMENT
  } from "../action/actionTypes";
  import { setLoader } from "../action/commonAction";
  
  const initialState = {
    commentsList: [],
    isLoading: false,
  };

  /**
 * comment reducer to perform operation of adding comments
 * @param {Array} state - displays state 
  * @param {object} action -action object that has type and payload
 * @returns updated comment state
 */
const commentReducer = (state = initialState, action) => {
    switch (action.type) {
     
      case ADD_COMMENT:
        return  {...state,commentsList:[...state.commentsList,action.payload]};
      default:
        return state;
    }
  };
  
  export default commentReducer;