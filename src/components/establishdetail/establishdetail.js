import React, { Component } from "react";
import { connect } from "react-redux";
import "./establishdetail.css";

class Establishdetail extends Component {
  render() {
    return (
    <div>Establishdetail  
      <div className="bg">
      <div className="est-profile-box">
        <p>kuay</p>
      </div>
      <div className="est-subprofile-box">
      </div>
      <div className="info-box">
      </div>
      <div className="vaccination-box">
      </div>
      <div className="map-box">
        <div>
          <button className="map-button map-text">ดูแผนที่</button>
        </div>
      </div>
      </div>
    </div>
    );
  }
}

export default Establishdetail;
