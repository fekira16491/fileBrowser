import React from "react";
import { ADDVIDEO } from "./actionTypes";

export const postVideos = (data, options = {}) => {
    return { type: ADDVIDEO, payload: data };
  };