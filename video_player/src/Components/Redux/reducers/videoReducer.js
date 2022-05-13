import React from "react";
import {
    ADDVIDEO
  } from "../action/actionTypes";
  import { setLoader } from "../action/commonAction";
  
  const initialState = {
    videoList: [],
    isLoading: false,

  };

 /**
 * video reducer to perform operation of adding videos
 * @param {Array} state - displays state 
  * @param {object} action -action object that has type and payload
 * @returns updated video state
 */
  const videoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADDVIDEO:
        return  {...state,videoList:[...state.videoList, action.payload]};
      default:
        return state;
    }
  };
  
  export default videoReducer;