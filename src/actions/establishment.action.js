import { HTTP_ESTABLISH_FETCHING, HTTP_ESTABLISH_SUCCESS, server } from "../constants";
import { httpClient } from "../utils/HttpClient";

export const setEstablishmentStateToFetching = () => ({
    type: HTTP_ESTABLISH_FETCHING,
})

export const setEstablishmentStateToSuccess = (payload) => ({
    type: HTTP_ESTABLISH_SUCCESS,
    payload
})

export const setEstablishmentStateToFail = () => ({
    type: HTTP_ESTABLISH_SUCCESS,
})

const doGetEstablishments = (dispatch) => {
    httpClient.get(server.ESTABLISH_URL).then(result =>{
        dispatch(setEstablishmentStateToSuccess(result.data));
    }).catch(error=>{
        alert(JSON.stringify(error));
        dispatch(setEstablishmentStateToFail());
    })
}

export const getEstablishments = () => {
    return dispatch => {
        dispatch(setEstablishmentStateToFetching);
        doGetEstablishments(dispatch);
    }
}
