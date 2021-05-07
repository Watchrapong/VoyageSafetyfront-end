import { server, OK, HTTP_LOGIN_FETCHING, HTTP_LOGIN_SUCCESS, HTTP_LOGIN_FAILED , YES} from "../constants";
import {httpClient} from "../utils/HttpClient";

export const setLoginStateToFetching = () => ({
    type: HTTP_LOGIN_FETCHING,
})

export const setLoginStateToSuccess = (payload) => ({
    type: HTTP_LOGIN_SUCCESS,
    payload
})

export const setLoginStateToFail = () => ({
    type: HTTP_LOGIN_FAILED,
})

export const login = (history,credential)=>{
    return async dispatch=>{
        dispatch(setLoginStateToFetching())
        let result = await httpClient.post(server.LOGIN_URL, credential);
        if (result.data.result == OK) {
            localStorage.setItem(server.LOGIN_PASSED, YES);
            //getState().appReducer.app.forceUpdate();
      
            history.push("/home");
            dispatch(setLoginStateToSuccess(result));
          } else {
            dispatch(setLoginStateToFail());
          }
    }
}
