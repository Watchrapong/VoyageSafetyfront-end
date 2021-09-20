import React, { Component } from "react";
import Cryptr from "cryptr";
import { keycryptr, server } from "./../../constants";
import { httpClient } from "../../utils/HttpClient";

class Verify extends Component {
  componentDidMount() {
    try {
      const cryptr = new Cryptr(keycryptr);
      let key = this.props.match.params.key;
      let UserId = cryptr.decrypt(key);
      console.log(UserId);
      var data = new FormData();
      data.append("UserId", UserId);
      data.append("Verify", true);
      httpClient
        .put(server.EDIT_USER, data)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return <div>Email is verify</div>;
  }
}

export default Verify;
