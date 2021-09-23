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
                          <div
                            className="u-carousel u-expanded-width u-gallery u-layout-thumbnails u-lightbox u-show-text-always u-gallery-1"
                            id="carousel-e131"
                            data-interval={5000}
                            data-u-ride="carousel"
                            data-pswp-uid={1}
                          >
                            <div
                              className="u-carousel-inner u-gallery-inner"
                              role="listbox"
                            >
                              <div
                                className="u-carousel-item u-gallery-item u-carousel-item-1"
                                data-pswp-item-id={0}
                              >
                                <div className="u-back-slide">
                                  <img
                                    className="u-back-image u-expanded"
                                    src="images/1.svg"
                                  />
                                </div>
                                <div className="u-over-slide u-over-slide-1">
                                  <h3 className="u-gallery-heading">
                                    Sample Title
                                  </h3>
                                  <p className="u-gallery-text">Sample Text</p>
                                </div>
                              </div>
                              <div
                                className="u-carousel-item u-gallery-item u-carousel-item-2 u-active u-carousel-item-left"
                                data-pswp-item-id={1}
                              >
                                <div className="u-back-slide">
                                  <img
                                    className="u-back-image u-expanded"
                                    src="images/1.svg"
                                  />
                                </div>
                                <div className="u-over-slide u-over-slide-2">
                                  <h3 className="u-gallery-heading">
                                    Sample Title
                                  </h3>
                                  <p className="u-gallery-text">Sample Text</p>
                                </div>
                              </div>
                              <div
                                className="u-carousel-item u-gallery-item u-carousel-item-3 u-carousel-item-next u-carousel-item-left"
                                data-image-width={2836}
                                data-image-height={1875}
                                data-pswp-item-id={2}
                              >
                                <div className="u-back-slide">
                                  <img
                                    src={
                                      result.pathImg ||
                                      "https://via.placeholder.com/700x350"
                                    }
                                    alt="mainImage"
                                    style={{ width: "100%" }}
                                    className="w3-hover-opacity img"
                                  />
                                </div>
                                <div className="u-over-slide u-over-slide-3">
                                  <h3 className="u-gallery-heading">
                                    Sample Title
                                  </h3>
                                  <p className="u-gallery-text">Sample Text</p>
                                </div>
                              </div>
                            </div>
                            <a
                              className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-1"
                              href="#carousel-e131"
                              role="button"
                              data-u-slide="prev"
                            >
                              <span aria-hidden="true">
                                <svg viewBox="0 0 451.847 451.847">
                                  <path
                                    d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"
                                  />
                                </svg>
                              </span>
                              <span className="sr-only">
                                <svg viewBox="0 0 451.847 451.847">
                                  <path
                                    d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"
                                  />
                                </svg>
                              </span>
                            </a>
                            <a
                              className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-2"
                              href="#carousel-e131"
                              role="button"
                              data-u-slide="next"
                            >
                              <span aria-hidden="true">
                                <svg viewBox="0 0 451.846 451.847">
                                  <path
                                    d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
                                  />
                                </svg>
                              </span>
                              <span className="sr-only">
                                <svg viewBox="0 0 451.846 451.847">
                                  <path
                                    d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
                                  />
                                </svg>
                              </span>
                            </a>
                            <ol className="u-carousel-thumbnails u-spacing-10 u-carousel-thumbnails-1">
                              <li
                                className="u-carousel-thumbnail u-carousel-thumbnail-1"
                                data-u-target="#carousel-e131"
                                data-u-slide-to={0}
                              >
                               <img
                              src={
                                result.pathImg ||
                                "https://via.placeholder.com/700x350"
                              }
                              alt="mainImage"
                              style={{ width: "100%" }}
                              className="u-carousel-thumbnail  imgsmall"
                            />
                              </li>
                              <li
                                className="u-carousel-thumbnail u-carousel-thumbnail-2"
                                data-u-target="#carousel-e131"
                                data-u-slide-to={1}
                              >
                                <img
                              src={
                                result.pathImg ||
                                "https://via.placeholder.com/700x350"
                              }
                              alt="mainImage"
                              style={{ width: "100%" }}
                              className="u-carousel-thumbnail  imgsmall"
                            />
                              </li>
                              <li
                                className="u-carousel-thumbnail u-carousel-thumbnail-3 u-active"
                                data-u-target="#carousel-e131"
                                data-u-slide-to={2}
                              >
                                <img
                              src={
                                result.pathImg ||
                                "https://via.placeholder.com/700x350"
                              }
                              alt="mainImage"
                              style={{ width: "100%" }}
                              className="u-carousel-thumbnail  imgsmall"
                            />
                              </li>
                            </ol>
                          </div>
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
