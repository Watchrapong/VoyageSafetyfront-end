// import { Carousel } from "bootstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../actions/detail.action";
import "./detail.css";
import "./detail2.css";
import Carousel from "react-bootstrap/Carousel";

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
        result != null && (
          // result.map((item) => (
          // <div key={result.EstId}>
          <div>
            <section className="u-clearfix sectiondetail" id="sec-c6a2">
              <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                  <div className="u-layout">
                    <div className="u-layout-row">
                      <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                        <div className="u-container-layout u-container-layout-1">
                          <Carousel>
                            <Carousel.Item interval={1500}>
                              <img
                                src={
                                  result.pathImg ||
                                  "https://via.placeholder.com/700x350"
                                }
                                alt="mainImage"
                                style={{ width: "100%" }}
                                className="w3-hover-opacity img"
                              />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                              <img
                                src={
                                  result.pathImg ||
                                  "https://via.placeholder.com/700x350"
                                }
                                alt="mainImage"
                                style={{ width: "100%" }}
                                className="w3-hover-opacity img"
                              />
                            </Carousel.Item>
                          </Carousel>

                          <section
                            className="u-clearfix sectiondetail2"
                            id="sec-c6a2"
                          >
                            <div className="u-container-style u-expanded-width-sm u-expanded-width-xs u-grey-10 u-group u-radius-10 u-shape-round u-group-1">
                              <div className="u-expanded-width u-grey-10 u-radius-10 u-shape u-shape-round u-shape-2">
                                <h5 className="u-text u-text-default u-text-1">
                                  การจองคิว
                                  <br />
                                </h5>
                                <div className="u-expanded-width-sm u-expanded-width-xs u-form u-form-1">
                                  <form
                                    action="#"
                                    method="POST"
                                    className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                                    style={{ padding: 15 }}
                                    source="custom"
                                  >
                                    <div class="row">
                                      <div class="col-sm-10">
                                        <input
                                          type="date"
                                          id="date"
                                          name="date"
                                          className="textInput"
                                          required
                                        />
                                      </div>
                                      <div class="col-sm-2">
                                        <a
                                          href="#"
                                          className="u-btn u-btn-round u-btn-submit u-hover-palette-1-light-1 u-radius-6 u-button-style u-btn-1"
                                          style={{background:"#0F4A69",color:"#ffffff"}}
                                        >
                                          จองคิว
                                          <br />
                                        </a>
                                        <input
                                          type="submit"
                                          defaultValue="submit"
                                          className="u-form-control-hidden"
                                        />
                                      {/* </div> */}
                                       {/* </div> */}
                                      {/* </div> */}
                                      </div>
                                      <div className="u-form-send-message u-form-send-success">
                                        Thank you! Your message has been sent.
                                      </div>
                                      <div className="u-form-send-error u-form-send-message">
                                        Unable to send your message. Please fix
                                        errors then try again.
                                      </div>
                                      <input
                                        type="hidden"
                                        defaultValue
                                        name="recaptchaResponse"
                                      />
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* <div className="u-expanded-width u-grey-10 u-radius-10 u-shape u-shape-round u-shape-2">
                          <div className="u-container-layout u-container-layout-4">
            <h5 className="u-text u-text-default u-text-1 names">การจองคิว<br />
            </h5>
            </div>
              <div className="u-form u-form-1">
             <form action="#" method="POST" className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form" style={{padding: 15}} source="custom" name="form">
        <div className="u-form-date u-form-group u-form-group-1">
          <label htmlFor="date-67dd" className="u-label">วัน/เดือน/ปี</label>
          <input type="date" placeholder="MM/DD/YYYY" id="date-67dd" name="date" className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required />
        </div>
        <div className="u-form-group u-form-group-2">
          <label htmlFor="text-997d" className="u-label">เวลา</label>
          <input type="text" placeholder id="text-997d" name="text" className="u-border-1 u-border-grey-30 u-input u-input-rectangle" />
        </div>
        <div className="u-align-right u-form-group u-form-submit">
          <a href="#" className="u-btn u-btn-submit u-button-style">Submit</a>
          <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
        </div>
        <div className="u-form-send-message u-form-send-success">Thank you! Your message has been sent.</div>
        <div className="u-form-send-error u-form-send-message">Unable to send your message. Please fix errors then try again.</div>
        <input type="hidden" defaultValue name="recaptchaResponse" />
      </form>
    </div>
  </div> */}
                        </div>
                      </div>
                      <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                        <div className="u-container-layout u-container-layout-2">
                          <div className="u-container-style u-expanded-width-sm u-expanded-width-xs u-grey-10 u-group u-radius-10 u-shape-round u-group-1">
                            <div className="u-container-layout u-container-layout-3">
                              {/* <h5 className="u-text u-text-default u-text-1"> */}
                              <div className="u-container-layout u-container-layout-4">
                                <p className="u-text u-text-default u-text-1 names">
                                  <b>{result.Name}</b>
                                </p>
                                <p className="u-text u-text-2 dess">
                                  {result.Description}
                                </p>
                              </div>
                              {/* </h5> */}
                              {/* <p className="u-text u-text-2">Description</p> */}
                            </div>
                          </div>
                          <div className="u-expanded-width-sm u-expanded-width-xs u-grey-10 u-radius-10 u-shape u-shape-round u-shape-1" />
                          <div className="u-expanded-width u-grey-10 u-radius-10 u-shape u-shape-round u-shape-2">
                            <div className="address-con">
                              <div className="container">
                                <div className="row">
                                  <div className="col-xl-6 col-lg-6">
                                    <img
                                      src={`https://maps.googleapis.com/maps/api/staticmap?center=${result.Lat},${result.Lng}&zoom=18&size=500x500&key=AIzaSyATAXCWMqd7hmu44d93FCJpPTGcHLKN6lg&markers="https://img.icons8.com/dusk/64/000000/marker.png"|${result.Lat},${result.Lng}`}
                                      className="map-img"
                                    />
                                  </div>
                                  <div className="col-xl-6 col-lg-6">
                                    <div className="address-detail-con">
                                      <div className="address-detail">
                                        {result.Address}{" "}
                                      </div>
                                      <div className="address-detail">
                                        {result.District}
                                      </div>
                                      <div className="address-detail">
                                        {result.Province} {result.PostCode}
                                      </div>

                                      <button
                                        className="btn-map"
                                        onClick={() => {
                                          window.open(
                                            `https://www.google.com/maps/search/?api=1&query=${result.Lat},${result.Lng}`
                                          );
                                        }}
                                      >
                                        ดูแผนที่
                                      </button>
                                    </div>
                                  </div>
                                </div>
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
          </div>
        )
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
