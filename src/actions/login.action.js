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

export const autoLogin = (history) => {
    return () => {    
      if (localStorage.getItem(server.LOGIN_PASSED)  == YES){      
        //setTimeout(()=>
        history.push("/home")
        //, 100)         
      }
    } 
  }

export const login = (history,credential)=>{
    return async (dispatch , getState)=>{
        dispatch(setLoginStateToFetching())
        let result = await httpClient.post(server.LOGIN_URL, credential);
        if (result.data.result == OK) {
            localStorage.setItem(server.LOGIN_PASSED, YES);
            localStorage.setItem('Token', result.data.token);
            getState().appReducer.app.forceUpdate();
      
            history.push("/home");
            dispatch(setLoginStateToSuccess(result));
          } else {
            dispatch(setLoginStateToFail());
          }
    }
}

export const getLogin = ()=>{
  return JSON.parse(localStorage.getItem('Token'));
}