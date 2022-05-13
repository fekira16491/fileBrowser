import axios from "axios";

/**
 * to fetch list of data
 * @param {*} url
 * @param {*} options
 * @returns fetch response axios
 */
const LOCAL_URL = "http://localhost:4000/";

export const getData = (url, options = {}) => {
  return axios.get(LOCAL_URL + url, options);
};

/**
 * to delete list of data
 * @param {*} url
 * @param {*} options
 * @returns fetch response axios
 */
export const deleteData = (url, deleteData = {}, options = {}) => {
  return axios.delete(LOCAL_URL + url, deleteData, options);
};

/**
 * to post data
 * @param {*} url
 * @param {*} postData
 * @param {*} options
 * @returns post object
 */
export const postData = (url, postData, options = {}) => {
  return axios.post(LOCAL_URL + url, postData, options);
};

/**
 * used to update data in DB
 * @param {*} url
 * @param {*} putData
 * @param {*} options
 * @returns putData
 */
export const putData = (url, putData, options = {}) => {
  return axios.put(`http://localhost:8000/${url}`, putData, options);
};
