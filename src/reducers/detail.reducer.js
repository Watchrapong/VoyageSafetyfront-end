import { HTTP_DETAIL_FAILED, HTTP_DETAIL_FETCHING, HTTP_DETAIL_SUCCESS } from "../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case HTTP_DETAIL_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false };
      case HTTP_DETAIL_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false };
      case HTTP_DETAIL_FAILED:
        return { ...state, result: null, isFetching: false, isError: true };
      default:
        return state;
    }
  };
  