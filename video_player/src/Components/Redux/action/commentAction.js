import React from "react";
import { ADD_COMMENT } from "./actionTypes";


export const postComments = (data, options = {}) => {
    return { type: ADD_COMMENT, payload: data };
  };