import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../actions/detail.action";
import GoogleMapReact from "google-map-react";
import { AiFillAndroid } from "react-icons/ai";
import "./detail.css";

class Detail extends Component {
  
  componentDidMount() {
    let EstId = this.props.match.params.EstId;
    this.props.getDetail(EstId);
  }

  showInfo = () => {
      try {
        const { result, isFetching } = this.props.detailReducer;
        return (
          !isFetching &&
          result != null &&
          // result.map((item) => (
            // <div key={result.EstId}>
            <div>
            <div className="bg">
              <div className="est-profile-box">
              <img    
              src={result.pathImg||"https://via.placeholder.com/700x350"}
              alt="mainImage"
              style={{ width: "100%" }}
              className="w3-hover-opacity"
              />
              </div>
              <div className="est-subprofile-box">
              </div>
              <div className="info-box">
                <p>
                  <b>{result.Name}</b>
                </p>
              </div>
              <div className="vaccination-box">
              </div>
              <div className="map-box">
                <div>
                {result.Address}
                {result.District}
                {result.Province}
                {result.PostCode}
                  <button className="map-button map-text">ดูแผนที่</button>
                </div>
              </div>
            </div>
          </div>
          // ))
        );
      } catch (e) {}
    };


  // showMap = () => {
  //   try {
  //     const { result, isFetching } = this.props.detailReducer;
  //     return (
  //       !isFetching &&
  //       result != null && 
  //         <div style={{ height: "100vh", width: "100%" }}>
  //           <GoogleMapReact
  //             bootstrapURLKeys={{
  //               key: "AIzaSyATAXCWMqd7hmu44d93FCJpPTGcHLKN6lg",
  //             }}
  //             defaultCenter={{ lat: 13.736717, lng: 100.523186 }}
  //             defaultZoom={11}
  //           >
  //             <AiFillAndroid
  //               lat={result.lat}
  //               lng={result.lng}
  //               text="My Marker"
  //             />
  //           </GoogleMapReact>
  //         </div>
        
  //     );
  //   } catch (e) {}
  // };

  render() {
    return (
      <div>
        {this.showInfo()}
      {/* {this.showMap()} */}
      </div>
    );
  }
}

const mapStateToProps = ({ detailReducer }) => ({
  detailReducer,
});

const mapDispatchToProps = {
  ...action,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
