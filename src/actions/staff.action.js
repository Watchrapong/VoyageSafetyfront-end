import {
  HTTP_STAFF_FAILED,
  HTTP_STAFF_FETCHING,
  HTTP_STAFF_SUCCESS,
  server,
} from "../constants";
import { httpClient } from "../utils/HttpClient";

export const setStaffStateToFetching = () => ({
  type: HTTP_STAFF_FETCHING,
});

export const setStaffStateToSuccess = (payload) => ({
  type: HTTP_STAFF_SUCCESS,
  payload,
});

export const setStaffStateToFail = () => ({
  type: HTTP_STAFF_FAILED,
});

export const getStaff = (EstId) => {
  return (dispatch) => {
    dispatch(setStaffStateToFetching);
    httpClient
      .get(`${server.STAFF}/${EstId}`)
      .then((result) => {
        dispatch(setStaffStateToSuccess(result.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setStaffStateToFail());
      });
  };
};
