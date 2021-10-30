import { HTTP_STAFF_FAILED, HTTP_STAFF_FETCHING, HTTP_STAFF_SUCCESS } from "../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case HTTP_STAFF_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false };
      case HTTP_STAFF_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false };
      case HTTP_STAFF_FAILED:
        return { ...state, result: null, isFetching: false, isError: true };
      default:
        return state;
    }
  };
  