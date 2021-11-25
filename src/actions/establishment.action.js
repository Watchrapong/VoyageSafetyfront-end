import {
  HTTP_ESTABLISH_EDIT_FAILED,
  HTTP_ESTABLISH_FETCHING,
  HTTP_ESTABLISH_SUCCESS,
  server,
} from "../constants";
import { httpClient } from "../utils/HttpClient";

export const setEstablishmentStateToFetching = () => ({
  type: HTTP_ESTABLISH_FETCHING,
});

export const setEstablishmentStateToSuccess = (payload) => ({
  type: HTTP_ESTABLISH_SUCCESS,
  payload,
});

export const setEstablishmentStateToFail = () => ({
  type: HTTP_ESTABLISH_EDIT_FAILED,
});

const doGetEstablishments = (dispatch) => {
  httpClient
    .get(server.ESTABLISH_URL)
    .then((result) => {
      dispatch(setEstablishmentStateToSuccess(result.data));
    })
    .catch((error) => {
      // alert(JSON.stringify(error));
      dispatch(setEstablishmentStateToFail());
    });
};

export const getEstablishments = () => {
  return (dispatch) => {
    dispatch(setEstablishmentStateToFetching);
    doGetEstablishments(dispatch);
  };
};

export const getEstablishmentsByKeyword = (credential) => {
  return (dispatch) => {
    dispatch(setEstablishmentStateToFetching());

    if (credential !== null && credential !== "") {
      httpClient
        .get(`${server.ESTABLISH_URL}/keyword/${credential}`)
        .then((result) => {
          dispatch(setEstablishmentStateToSuccess(result.data));
        });
    } else {
      doGetEstablishments(dispatch);
    }
  };
};

export const getEstablishmentsByCategory = (event) => {
  return (dispatch) => {
    var category = event.target.value;
    dispatch(setEstablishmentStateToFetching());

    if (category !== null && category !== "") {
      httpClient
        .get(`${server.ESTABLISH_URL}/category/${category}`)
        .then((result) => {
          dispatch(setEstablishmentStateToSuccess(result.data));
        });
    } else {
      doGetEstablishments(dispatch);
    }
  };
};
