import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../actions/detail.action";
import "./detail.css";
import "./detail2.css";


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
            <section className="u-clearfix sectionDetail" id="sec-c6a2">
              <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-clearfix u-expanded-width 
                  u-layout-wrap u-layout-wrap-1">
                  <div className="u-layout">
                    <div className="u-layout-row">
                      <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                         <div className="u-container-layout u-container-layout-1">
                            <div className="u-container-style u-expanded-width u-group u-image 
                            u-image-round u-radius-10 u-shape-rectangle u-image-1" 
                            data-image-width={1280} data-image-height={852}>
                            <img    
                            src={result.pathImg||"https://via.placeholder.com/700x350"}
                            alt="mainImage"
                            style={{ width: "100%" }}
                            className="w3-hover-opacity img"/>
                            <div className="u-container-layout u-valign-top u-container-layout-2" />
                            </div>
                            <div className="u-expanded-width u-grey-15 u-radius-10 u-shape u-shape-round u-shape-1" />
                          </div>
                      </div>
          <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                    <div className="u-container-layout u-container-layout-3">
                      <div className="u-container-style u-expanded-width-sm u-expanded-width-xs 
                        u-grey-10 u-group u-radius-10 u-shape-round u-group-2">
                        <div className="u-container-layout u-container-layout-4">
                          <p className="name">
                         <b>{result.Name}</b>
                          </p>
                         <p className="des">
                        {result.Description}
                          </p>
                        </div>
                      </div>
           <div className="u-expanded-width-sm u-expanded-width-xs u-grey-10 u-radius-10 
                    u-shape u-shape-round u-shape-2" />
                      <div className="vaccination-box">
                      </div>                     
            <div className="u-expanded-width u-grey-10 u-radius-10 u-shape u-shape-round u-shape-3" >
                  <div className="u-container-style u-expanded-width u-group u-image 
                  u-image-round u-radius-10 u-shape-rectangle u-image-1" 
                  data-image-width={100} data-image-height={100}>
                  <img src={`https://maps.googleapis.com/maps/api/staticmap?center=
                  ${result.Lat},${result.Lng}&zoom=18&size=500x500&key=AIzaSyATAXCWMqd7hmu44d93FCJpPTGcHLKN6lg&markers=
                  "https://img.icons8.com/dusk/64/000000/marker.png"|${result.Lat},${result.Lng}`}
                  className="map-img"/>
                  <div className="address-text">
                  <p>{result.Address} </p>
                  <p>{result.District}</p>
                  <p>{result.Province} {result.PostCode}</p>
                  <button className="btn-map" onClick={()=>
                  {window.open(`https://www.google.com/maps/search/?api=1&query=${result.Lat},${result.Lng}`)}}>
                    ดูแผนที่</button>
                
                </div>
                </div>
                </div>
                      </div>
                    </div>
                   </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <div className="bg">
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
            </div> */}
          </div>
          
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
