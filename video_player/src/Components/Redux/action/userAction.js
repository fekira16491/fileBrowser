import React from "react";
import { getData } from "../../../API/api";
import { postData } from "../../../API/api";
import { setLoader, postSuccess, postFailure } from "./commonAction";

export const postUserList = () => {
  return async (dispatch, state) => {
    dispatch(setLoader(true));
    try {
      let response = await postData("users/");
      dispatch(postSuccess(response.data));
      dispatch(setLoader(false));
    } catch (err) {
      dispatch(postFailure(err));
      dispatch(setLoader(false));
    }
    // api.getData("restaurant/")
    //   .then((response) => {
    //     dispatch(fetchSuccess(response.data));
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //     dispatch(fetchFailure(err));
    //   }).finally(() => {
    //     dispatch(setLoader(false))
    //   })
  };
};

export const getUserList = () => {
  return async (dispatch, state) => {
    dispatch(setLoader(true));
    try {
      let response = await getData("users/");
      dispatch(postSuccess(response.data));

      dispatch(setLoader(false));
      return true;
    } catch (err) {
      dispatch(postFailure(err));
      dispatch(setLoader(false));
      return false;

    }
    // api.getData("restaurant/")
    //   .then((response) => {
    //     dispatch(fetchSuccess(response.data));
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //     dispatch(fetchFailure(err));
    //   }).finally(() => {
    //     dispatch(setLoader(false))
    //   })
  };
};


