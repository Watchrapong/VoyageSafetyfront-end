import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../actions/detail.action";
import GoogleMapReact from "google-map-react";
import { AiFillAndroid } from "react-icons/ai";
import "./detail.css";
import GoogleStaticMap from 'react-google-static';

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
              className="w3-hover-opacity img"
              />
              </div>
              <div className="est-subprofile-box">
              </div>
              <div className="info-box">
                <p className="name">
                  <b>{result.Name}</b>
                </p>
                <p className="des">
                  {result.Description}
                </p>
              </div>
              <div className="vaccination-box">
              </div>
              <div className="map-box">
                <div className="column1">
                {/* <GoogleStaticMap
                  apiKey={"AIzaSyATAXCWMqd7hmu44d93FCJpPTGcHLKN6lg"}
                  latitude={result.Lat}
                  longitude={result.Lng}
                  style={{width:280, height:190, objectFit:"contain"}}
                  size={{ width: 500, height: 500 }}
                  zoom={18}
                  iconUrl="https://img.icons8.com/dusk/64/000000/marker.png"
                /> */}
                  <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${result.Lat},${result.Lng}&zoom=18&size=500x500&key=AIzaSyATAXCWMqd7hmu44d93FCJpPTGcHLKN6lg&markers="https://img.icons8.com/dusk/64/000000/marker.png"|${result.Lat},${result.Lng}`}
                  className="map-img"/>
                </div>
                <div className="column2">
                <div className="address-text">
                <p>{result.Address} </p>
                <p>{result.District}</p>
                <p>{result.Province} {result.PostCode}</p>
                </div>
                <div>
                  <button className="btn-map" onClick={()=>
                  {window.open(`https://www.google.com/maps/search/?api=1&query=${result.Lat},${result.Lng}`)}}>
                    ดูแผนที่</button>
                </div>
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
