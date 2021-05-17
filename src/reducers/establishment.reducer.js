import {
    HTTP_ESTABLISH_SUCCESS,
    HTTP_ESTABLISH_FETCHING,
    HTTP_ESTABLISH_FAILED
  } from "../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case HTTP_ESTABLISH_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false };
      case HTTP_ESTABLISH_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false };
      case HTTP_ESTABLISH_FAILED:
        return { ...state, result: null, isFetching: false, isError: true };
      default:
        return state;
    }
  };
  