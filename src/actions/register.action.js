import { HTTP_REGISTER_FETCHING, HTTP_REGISTER_SUCCESS, HTTP_REGISTER_FAILED, server, OK } from "../constants";
import { httpClient } from "../utils/HttpClient"

export const setRegisterStateToFetching = () => ({
    type: HTTP_REGISTER_FETCHING,
})

export const setRegisterStateToSuccess = (payload) => ({
    type: HTTP_REGISTER_SUCCESS,
    payload
})

export const setRegisterStateToFailed = () => ({
    type: HTTP_REGISTER_FAILED,
})

export const register = (history, credential)=>{
    return async dispatch=>{
        console.log(credential.Password +" "+credential.Confirmation_Password)
        if(credential.Password===credential.Confirmation_Password)
        {
        dispatch(setRegisterStateToFetching());
        try{
        let result = await httpClient.post(server.REGISTER_URL, credential);
        if (result.data.result === OK){
            //success
            dispatch(setRegisterStateToSuccess(result.data.result));
        }else{
            //failed
            dispatch(setRegisterStateToFailed());
        }
    } catch(error){
        //failed
        dispatch(setRegisterStateToFailed());
    }
    }else{
        dispatch(setRegisterStateToFailed());
    }
}
}
