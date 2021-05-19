import { HTTP_DETAIL_FAILED, HTTP_DETAIL_FETCHING, HTTP_DETAIL_SUCCESS ,server } from "../constants";
import { httpClient } from "../utils/HttpClient";
 

  export const setDetailStateToFetching = () => ({
      type: HTTP_DETAIL_FETCHING
  })

  export const setDetailStateToSuccess = (payload) => ({
    type:  HTTP_DETAIL_SUCCESS,
    payload
})

export const setDetailStateToFail = () => ({
    type: HTTP_DETAIL_FAILED
})
  
export const getDetail = (EstId) => {
    return dispatch =>{
        dispatch(setDetailStateToFetching());
        httpClient.get(`${server.DETAIL_URL}/${EstId}`).
        then(result => {
            dispatch(setDetailStateToSuccess(result.data));
        })
        .catch(err => {
            console.log(err);
            dispatch(setDetailStateToFail());
        })
    }
}