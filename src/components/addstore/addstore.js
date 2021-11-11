import React, { Component } from "react";
import { OK, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import "./addstore.css";
import { BsXCircle } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import GoogleMapReact from "google-map-react";
import { validateForm } from "../../utils/regex.js";
import FormData from "form-data";
import hotel from "../../assets/img/hotel.jpeg";
import restaurant from "../../assets/img/restaurant.jpeg";
import { WaveLoading } from "react-loadingg";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import pin from "../../assets/img/addstore/pin.gif";
import novaccine from "../../assets/img/addstore/novaccination.png";

const API_KEY = "AIzaSyATAXCWMqd7hmu44d93FCJpPTGcHLKN6lg";

class Addstore extends Component {
  static defaultProps = {
    center: { lat: 13.761792924446304, lng: 100.44629630309848 },
    zoom: 15,
  };
  constructor(props) {
    super(props);

    this.state = {
      userId: null,
      Name: null,
      Citizen: null,
      Description: null,
      type: null,
      address: null,
      view: null,
      collectionImage: [],
      district: null,
      province: null,
      postcode: null,
      lat: null,
      lng: null,
      errors: {
        Name: "",
        Description: "",
        type: "",
        address: "",
        district: "",
        province: "",
        postcode: "",
      },
      ImgError: "",
      Error: "",
      showEnableLocation: false,
      showVaccineAlert: false,
      vaccine: false,
      successModal: false,
    };
    this.showEnableLocationModal = this.showEnableLocationModal.bind(this);
    this.hideEnableLocationModal = this.hideEnableLocationModal.bind(this);
    this.showVaccineAlertModal = this.showVaccineAlertModal.bind(this);
    this.hideVaccineAlertModal = this.hideVaccineAlertModal.bind(this);
    this.showSuccessModal = this.showSuccessModal.bind(this);
    this.hideSuccessModal = this.hideSuccessModal.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.getMyLocation = this.getMyLocation.bind(this);
  }

  showSuccessModal = () => {
    this.setState({ successModal: true })
  }

  hideSuccessModal = () => {
    this.setState({ successModal: false })
  }

  showEnableLocationModal = () => {
    this.setState({ showEnableLocation: true });
  };

  hideEnableLocationModal = () => {
    this.setState({ showEnableLocation: false });
  };

  showVaccineAlertModal = () => {
    this.setState({ showVaccineAlertModal: true });
  };

  hideVaccineAlertModal = () => {
    this.setState({ showVaccineAlertModal: false });
  };

  isLoading = () => {
    return (
      <div style={{ marginTop: "500px" }}>
        <WaveLoading />
      </div>
    );
  };

  async getMyLocation() {
    const location = window.navigator.geolocation;
    this.setState({ view: null });
    if (location) {
      await location.getCurrentPosition(
        (position) => {
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            view: 0,
          });
          this.hideEnableLocationModal();
          console.log(this.state.lat);
          console.log(this.state.lng);
        },
        (error) => {
          this.showEnableLocationModal();
          console.log(this.state.showEnableLocation);
          this.setState({ lat: "", lng: "" });
        }
      );
    }
  }

  async componentDidMount() {
    let token = localStorage.getItem("Token");
    httpClient
      .get(server.LOGIN_USER, {
        headers: { Authorization: `Authorization ${token}` },
      })
      .then((result) => {
        this.setState({
          userId: result.data.result.UserId,
          vaccine: result.data.result.Status,
          CitizenId: result.data.result.CitizenId,
        });
      })
      .catch((error) => {
        this.setState({ userId: null });
      });
    await this.getMyLocation();
  }

  onFileChange = (e) => {
    var files = e.target.files;
    if (
      parseInt(this.state.collectionImage.length) + parseInt(files.length) <=
      3
    ) {
      var filesArr = Array.prototype.slice.call(files);
      this.setState({
        collectionImage: [...this.state.collectionImage, ...filesArr],
        ImgError: "",
      });
    } else {
      this.setState({ ImgError: "เพิ่มรูปได้สูงสุด 3 รูป" });
    }
  };

  removeFile(f, e) {
    e.preventDefault();
    this.setState({
      collectionImage: this.state.collectionImage.filter((x) => x !== f),
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "Name":
        errors.Name =
          value.length === 0 || value === null ? "โปรดกรอกชื่อ" : "";
        break;
      case "address":
        errors.address =
          value.length === 0 || value === null ? "โปรดกรอกที่อยู่" : "";
        break;
      case "type":
        errors.type = value === "0" || value === null ? "โปรดเลือกประเภท" : "";
        break;
      case "Description":
        errors.Description =
          value.length === 0 || value === null ? "โปรดระบุ" : "";
        break;
      case "district":
        errors.district =
          value.length === 0 || value === null ? "โปรดระบุ" : "";
        break;
      case "province":
        errors.province =
          value.length === 0 || value === null ? "โปรดระบุ" : "";
        break;
      case "postcode":
        errors.postcode =
          value.length === 0 || value === null ? "โปรดระบุ" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
      console.log(this.state.Name);
      console.log(this.state.errors);

      var images = this.state.collectionImage;
      console.log(images.length);
      const {
        userId,
        Name,
        CitizenId,
        Description,
        type,
        address,
        district,
        province,
        postcode,
        lat,
        lng,
      } = this.state;

      if (
        userId == null ||
        Name == null ||
        CitizenId == null ||
        type == 0 ||
        address == null ||
        Description == null ||
        district == null ||
        province == null ||
        postcode == null
      ) {
        console.log("notPassform");
        console.log(this.state);
        this.setState({ Error: "ข้อมูลผิดพลาด" });
      } else {
        console.log("Passform");
        if (images.length < 1) {
          this.setState({ ImgError: "โปรดเลือกไฟล์รูปใหม่" });
        } else {
          var images = this.state.collectionImage;
          var formData = new FormData();
          // formData.append("EstId", "100")
          formData.append("Owner", userId);
          formData.append("Name", Name);
          formData.append("CitizenId", CitizenId);
          formData.append("SubCategoryId", type);
          formData.append("Description", Description);
          formData.append("Address", address);
          formData.append("District", district);
          formData.append("Province", province);
          formData.append("PostCode", postcode);
          formData.append("Lat", lat);
          formData.append("Lng", lng);
          for (let i = 0; i < images.length; i++) {
            formData.append("images", images[i]);
          }
          httpClient
            .post(server.ESTABLISH_URL, formData)
            .then((response) => {
              console.log(JSON.stringify(response.data));
              if (response.data.result === OK) {
                console.log("Done");
                this.setState({ Error: "" });
                this.showSuccessModal();
              } else {
                console.log("Error");
                this.setState({ Error: "ข้อมูลผิดพลาด" });
              }
            })
            .catch((error) => {
              console.error(error);
              this.setState({ Error: "ข้อมูลผิดพลาด" });
            });
        }
      }
    } else {
      console.log(this.state.errors);
      console.info("Invalid Form");
    }
  };

  Addstore = () => {
    return (
      <section
        className="u-align-center u-clearfix addstore-section"
        id="sec-b1e2"
      >
        <div className="u-align-left u-clearfix u-sheet u-sheet-1">
          <h1 className="u-text u-text-default u-text-1">Create Your Store </h1>
          <h6 className="u-text u-text-custom-color-2 u-text-default u-text-2">
            *กรุณาเลือกประเภทของร้านค้าของท่าน
          </h6>
          <div className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div
                  className="u-container-style u-image u-layout-cell u-size-30 u-image-1"
                  data-image-width={897}
                  data-image-height={759}
                >
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      if (this.state.vaccine === true) {
                        this.setState({ view: 1 });
                      } else {
                        this.showVaccineAlertModal();
                      }
                    }}
                    className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-1"
                  >
                    <h2 className="u-text u-text-custom-color-4 u-text-default u-text-3">
                      ร้านอาหาร
                    </h2>
                  </a>
                </div>
                <div
                  className="u-container-style u-image u-layout-cell u-size-30 u-image-2"
                  data-image-width={897}
                  data-image-height={759}
                >
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      if (this.state.vaccine === true) {
                        this.setState({ view: 2 });
                      } else {
                        this.showVaccineAlertModal();
                      }
                    }}
                    className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-2"
                  >
                    <h2 className="u-text u-text-custom-color-4 u-text-default u-text-4">
                      ที่พัก{" "}
                    </h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  hotel = () => {
    const { errors, lat, lng, collectionImage, ImgError, Error } = this.state;
    const Marker = () => {
      return <BiCurrentLocation style={{ fontSize: "20px", color: "blue" }} />;
    };
    return (
      <div>
        <section
          className="u-align-left u-clearfix hotel-section"
          id="sec-7c81"
        >
          <p className="u-text u-text-default u-text-1">
            <a href="" onClick={() => this.setState({ view: null })}>
              ลงทะเบียนสถานที่
            </a>{" "}
            / สร้างที่พักของคุณ
          </p>
          <img
            className="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-1"
            src={hotel}
            data-image-width={626}
            data-image-height={417}
          />
          <div className="u-container-style u-custom-color-3 u-expanded-width-sm u-expanded-width-xs u-group u-shape-rectangle u-group-1">
            <div className="u-container-layout u-container-layout-1">
              <p className="u-text u-text-default u-text-2">
                * กรุณาใส่รายละเอียดที่พักของคุณ
              </p>
              <p className="u-text u-text-default u-text-3">ชื่อที่พัก</p>
              <div className="u-form u-form-1">
                <form
                  className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                  source="custom"
                  name="form"
                  style={{ padding: 10 }}
                >
                  <div className="u-form-group u-form-name">
                    <label
                      htmlFor="name-5121"
                      className="u-form-control-hidden u-label"
                    />
                    <input
                      type="text"
                      placeholder="กรอกชื่อที่พักของคุณ"
                      name="Name"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      onChange={this.handleChange}
                      required
                    />
                    {errors.Name.length > 0 && (
                      <span className="error">{errors.Name}</span>
                    )}
                  </div>
                  <div className="u-form-group u-form-select u-form-group-2">
                    <label
                      htmlFor="select-62ad"
                      className="u-form-control-hidden u-label"
                    />
                    <div className="u-form-select-wrapper">
                      <select
                        name="type"
                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                        onChange={this.handleChange}
                      >
                        <option value="0">ประเภทที่พัก</option>
                        <option value="21">โรงแรม</option>
                        <option value="22">โฮสเทล</option>
                        <option value="23">รีสอร์ต</option>
                      </select>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={12}
                        version={1}
                        className="u-caret"
                      >
                        <path fill="currentColor" d="M4 8L0 4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="u-form-group u-form-textarea u-form-group-3">
                    <label
                      htmlFor="textarea-6422"
                      className="u-form-control-hidden u-label"
                    />
                    <textarea
                      rows={4}
                      cols={50}
                      name="Description"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-3"
                      required
                      placeholder="กรอกรายละเอียดที่พักของคุณ"
                      onChange={this.handleChange}
                    />
                    {errors.Description.length > 0 && (
                      <span className="error">{errors.Description}</span>
                    )}
                  </div>
                  <div className="u-form-group u-form-group-4">
                    <label
                      htmlFor="text-3447"
                      className="u-form-control-hidden u-label"
                    />
                    <input
                      type="text"
                      placeholder="กรอกที่อยู่ที่พักของคุณ"
                      name="address"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      onChange={this.handleChange}
                    />
                    {errors.address.length > 0 && (
                      <span className="error">{errors.address}</span>
                    )}
                  </div>
                  <div className="u-form-group u-form-group-5">
                    <label
                      htmlFor="text-2420"
                      className="u-form-control-hidden u-label"
                    />
                    <input
                      type="text"
                      placeholder="กรอกอำเภอที่พักของคุณ"
                      name="district"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      onChange={this.handleChange}
                    />
                    {errors.district.length > 0 && (
                      <span className="error">{errors.district}</span>
                    )}
                  </div>
                  <div className="u-form-group u-form-group-6">
                    <label
                      htmlFor="text-f383"
                      className="u-form-control-hidden u-label"
                    />
                    <input
                      type="text"
                      placeholder="กรอกจังหวัดที่พักของคุณ"
                      name="province"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      onChange={this.handleChange}
                    />
                    {errors.province.length > 0 && (
                      <span className="error">{errors.province}</span>
                    )}
                  </div>
                  <div className="u-form-group u-form-group-7">
                    <label
                      htmlFor="text-29e8"
                      className="u-form-control-hidden u-label"
                    />
                    <input
                      type="text"
                      placeholder="กรอกรหัสไปรษณีย์ที่พักของคุณ"
                      name="postcode"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      onChange={this.handleChange}
                    />
                    {errors.postcode.length > 0 && (
                      <span className="error">{errors.postcode}</span>
                    )}
                  </div>
                </form>
              </div>
              <p className="u-hidden-xs u-text u-text-default u-text-4">
                รายละเอียด
              </p>
              <p className="u-hidden-xs u-text u-text-default u-text-5">
                ที่อยู่
              </p>
              <p className="u-hidden-xs u-text u-text-default u-text-6">
                อำเภอ
              </p>
              <p className="u-hidden-xs u-text u-text-default u-text-7">
                จังหวัด
              </p>
              <p className="u-hidden-xs u-text u-text-default u-text-8">
                ประเภทที่พัก
              </p>
              <p className="u-hidden-xs u-text u-text-default u-text-9">
                รหัสไปรษณีย์
              </p>
              <div className="u-google-map">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: API_KEY }}
                  defaultCenter={this.props.center}
                  center={{ lat: lat, lng: lng }}
                  defaultZoom={this.props.zoom}
                  yesIWantToUseGoogleMapApiInternals
                  style={{
                    height: "250px",
                    width: "250px",
                    position: "relative",
                  }}
                >
                  <Marker lat={lat} lng={lng} />
                </GoogleMapReact>
              </div>
              <p className="u-text u-text-default u-text-10">
                แผนที่ที่พักของคุณ
              </p>
              <p className="u-hidden-xs u-text u-text-default u-text-11">
                ละติจูด
              </p>
              <div className="u-form u-form-2">
                <form
                  className="u-clearfix u-form-spacing-25 u-form-vertical u-inner-form"
                  source="custom"
                  name="form-1"
                  style={{ padding: 10 }}
                >
                  <input
                    type="hidden"
                    id="siteId"
                    name="siteId"
                    defaultValue={2787330704}
                  />
                  <input
                    type="hidden"
                    id="pageId"
                    name="pageId"
                    defaultValue={236865951}
                  />
                  <div className="u-form-group u-form-name">
                    <label
                      htmlFor="name-a378"
                      className="u-form-control-hidden u-label"
                    />
                    <input
                      type="text"
                      placeholder="ละติจูด"
                      name="Latitude"
                      value={lat}
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      disabled
                    />
                  </div>
                  <div className="u-form-email u-form-group">
                    <label
                      htmlFor="email-a378"
                      className="u-form-control-hidden u-label"
                    />
                    <input
                      type="text"
                      placeholder="ลองจิจูด"
                      name="longitude"
                      value={lng}
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      disabled
                    />
                  </div>
                  <div className="u-align-left u-form-group u-form-submit">
                    <a
                      href="#"
                      className="u-btn u-btn-submit u-button-style"
                      onClick={this.handleSubmit}
                    >
                      ลงทะเบียน
                    </a>
                    <input
                      type="submit"
                      defaultValue="submit"
                      className="u-form-control-hidden"
                    />
                    {Error.length > 0 && <span className="error">{Error}</span>}
                  </div>
                </form>
              </div>
              <p className="u-hidden-xs u-text u-text-default u-text-12">
                ลองจิจูด
              </p>
            </div>
          </div>
          <div className="u-custom-color-3 u-expanded-width-xs u-shape u-shape-rectangle u-shape-1">
            <p className="u-text u-text-default-xl u-text-13">
              * กรุณาใส่รูปที่พักของคุณ
            </p>

            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  multiple="multiple"
                  accept=".jpg,.jpe,.png,.gif"
                  onChange={this.onFileChange}
                />
                <span className="error" style={{ marginLeft: "10px" }}></span>
                <label className="custom-file-label">Choose file</label>
              </div>
            </div>
            {/* <div className="u-upload">
                <input
                  type="file"
                  className="custom-file-input"
                  multiple="multiple"
                  accept=".jpg,.jpe,.png,.gif"
                  onChange={this.onFileChange}
                />
                <span className="error" style={{ marginLeft: "10px" }}></span>
                <label className="custom-file-label" style={{ marginTop: '35px' }}>Choose file</label>
              </div> */}
            <div className="u-img-upload">
              {collectionImage.length > 0 && (
                <img
                  height="200"
                  width="200"
                  src={URL.createObjectURL(collectionImage[0])}
                />
              )}
            </div>
          </div>
          <div className="u-custom-color-3 u-expanded-width-xs u-shape u-shape-rectangle u-shape-2">
            <div className="row">
              {collectionImage.map((x) => (
                <div className="col-md-4">
                  <a href="" onClick={this.removeFile.bind(this, x)}>
                    <BsXCircle />
                  </a>
                  <div className="card mb-3 shadow-sm">
                    <img src={URL.createObjectURL(x)}></img>
                  </div>
                </div>
              ))}
            </div>
            {ImgError.length > 0 && <span className="error">{ImgError}</span>}
          </div>
        </section>
      </div>
    );
    // return (
    //   <section className="u-clearfix hotel-section" id="sec-97b3">
    //     <div className="u-align-left u-clearfix u-sheet u-valign-middle-lg u-sheet-1">
    //       <h4 className="u-text-1">
    //         <a href="" onClick={() => this.setState({ view: null })}>
    //           ลงทะเบียนสถานที่
    //         </a>{" "}
    //         / ที่พัก
    //       </h4>
    //       <div className="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
    //         <div className="u-layout">
    //           <div className="u-layout-row">
    //             <div
    //               className="u-container-style u-image u-layout-cell u-size-12 u-image-1"
    //               data-image-width={897}
    //               data-image-height={759}
    //             >
    //               <div className="u-container-layout u-valign-middle u-container-layout-1">
    //                 <h3 className="u-text u-text-custom-color-4 u-text-default u-text-2">
    //                   ที่พัก
    //                 </h3>
    //               </div>
    //             </div>
    //             <div className="u-container-style u-layout-cell u-size-24 u-layout-cell-2">
    //               <div className="u-container-layout u-valign-top u-container-layout-2">
    //                 <h6 className="u-text u-text-custom-color-2 u-text-default u-text-3">
    //                   *กรุณาใส่ช้อมูลสถานที่
    //                 </h6>
    //                 <div className="u-expanded-width-xs u-form u-form-1">
    //                   <form
    //                     className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
    //                     style={{ padding: 15 }}
    //                   >
    //                     <div className="u-form-group u-form-name">
    //                       <label className="u-label u-label-1">
    //                         ชื่อสถานที่
    //                       </label>
    //                       <input
    //                         type="text"
    //                         placeholder="Name"
    //                         name="Name"
    //                         className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-1"
    //                         onChange={this.handleChange}
    //                       />
    //                       {errors.Name.length > 0 && (
    //                         <span className="error">{errors.Name}</span>
    //                       )}
    //                     </div>
    //                     <div className="u-form-group u-form-message">
    //                       <label className="u-label u-label-2">
    //                         รายละเอียดสถานที่
    //                       </label>
    //                       <textarea
    //                         rows={4}
    //                         cols={50}
    //                         name="Description"
    //                         className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-2"
    //                         onChange={this.handleChange}
    //                       />
    //                       {errors.Description.length > 0 && (
    //                         <span className="error">{errors.Description}</span>
    //                       )}
    //                     </div>
    //                     <div className="u-form-group u-form-select u-form-group-3">
    //                       <label className="u-form-control-hidden u-label u-label-3" />
    //                       <div className="u-form-select-wrapper">
    //                         <select
    //                           name="type"
    //                           className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-3"
    //                           onChange={this.handleChange}
    //                         >
    //                           <option value="0">ประเภทที่พัก</option>
    //                           <option value="21">Hotel</option>
    //                           <option value="22">Hostel</option>
    //                           <option value="23">Resort</option>
    //                         </select>
    //                         <svg
    //                           xmlns="http://www.w3.org/2000/svg"
    //                           width={14}
    //                           height={12}
    //                           version={1}
    //                           className="u-caret"
    //                         >
    //                           <path fill="currentColor" d="M4 8L0 4h8z" />
    //                         </svg>
    //                         {errors.type.length > 0 && (
    //                           <span className="error">{errors.type}</span>
    //                         )}
    //                       </div>
    //                     </div>
    //                     <div className="u-form-group u-form-group-4">
    //                       <label className="u-label u-label-4">ที่อยู่</label>
    //                       <input
    //                         type="text"
    //                         name="address"
    //                         className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
    //                         onChange={this.handleChange}
    //                       />
    //                       {errors.address.length > 0 && (
    //                         <span className="error">{errors.address}</span>
    //                       )}
    //                     </div>
    //                     <div className="u-form-group u-form-group-4">
    //                       <label className="u-label u-label-4">อำเภอ</label>
    //                       <input
    //                         type="text"
    //                         name="district"
    //                         className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
    //                         onChange={this.handleChange}
    //                       />
    //                       {errors.district.length > 0 && (
    //                         <span className="error">{errors.district}</span>)}
    //                       </div>
    //                       <div className="u-form-group u-form-group-4">
    //                       <label className="u-label u-label-4">จังหวัด</label>
    //                       <input
    //                         type="text"
    //                         name="province"
    //                         className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
    //                         onChange={this.handleChange}
    //                       />
    //                       {errors.province.length > 0 && (
    //                         <span className="error">{errors.province}</span>)}
    //                       </div>
    //                       <div className="u-form-group u-form-group-4">
    //                       <label className="u-label u-label-4">รหัสไปรษณีย์</label>
    //                       <input
    //                         type="text"
    //                         name="postcode"
    //                         className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
    //                         onChange={this.handleChange}
    //                       />
    //                       {errors.postcode.length > 0 && (
    //                         <span className="error">{errors.postcode}</span>)}
    //                       </div>
    //                     <div className="u-form-group u-form-group-4">
    //                       <label className="u-label u-label-4">Latitude</label>
    //                       <input
    //                         type="text"
    //                         name="Longitude"
    //                         className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
    //                         disabled
    //                         value={lat}
    //                       />
    //                     </div>
    //                     <div className="u-form-group u-form-group-4">
    //                       <label className="u-label u-label-4">Longitude</label>
    //                       <input
    //                         type="text"
    //                         name="Longitude"
    //                         className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
    //                         disabled
    //                         value={lng}
    //                       />
    //                     </div>

    //                     <GoogleMapReact
    //                       bootstrapURLKeys={{ key: API_KEY }}
    //                       defaultCenter={this.props.center}
    //                       center={{ lat: lat, lng: lng }}
    //                       defaultZoom={this.props.zoom}
    //                       yesIWantToUseGoogleMapApiInternals
    //                       style={{
    //                         height: "300px",
    //                         width: "300px",
    //                         position: "relative",
    //                       }}
    //                     >
    //                       <Marker lat={lat} lng={lng} />
    //                     </GoogleMapReact>

    //                     <div className="u-align-left u-form-group u-form-submit">
    //                       <a
    //                         href="#"
    //                         className="u-btn u-btn-submit u-button-style"
    //                         onClick={this.handleSubmit}
    //                       >
    //                         Submit
    //                       </a>
    //                       <input
    //                         type="submit"
    //                         defaultValue="submit"
    //                         className="u-form-control-hidden"
    //                       />
    //                       {Error.length > 0 && (
    //                     <span className="error">{Error}</span>
    //                   )}
    //                     </div>
    //                   </form>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="u-align-left u-container-style u-layout-cell u-size-24 u-layout-cell-3">
    //               <div className="u-container-layout u-container-layout-3">
    //                 <h6 className="u-text u-text-custom-color-2 u-text-default u-text-4">
    //                   *กรุณาใส่รูปภาพ
    //                 </h6>
    //                 <div className="u-shape u-shape-rectangle u-white u-shape-1">
    //                   <div className="input-group mb-3">
    //                     <div className="custom-file">
    //                       <input
    //                         type="file"
    //                         className="custom-file-input"
    //                         multiple="multiple"
    //                         accept=".jpg,.jpe,.png,.gif"
    //                         onChange={this.onFileChange}
    //                       />
    //                       <span
    //                         className="error"
    //                         style={{ marginLeft: "10px" }}
    //                       ></span>
    //                       <label className="custom-file-label">
    //                         Choose file
    //                       </label>
    //                     </div>
    //                   </div>
    //                   <div style={{ margin: "10px" }}>
    //                     {collectionImage.length > 0 && (
    //                       <img
    //                         height="200"
    //                         width="auto"
    //                         src={URL.createObjectURL(collectionImage[0])}
    //                       />
    //                     )}
    //                   </div>
    //                 </div>
    //                 <div className="u-shape u-shape-rectangle u-white u-shape-2">
    //                   <div className="row">
    //                     {collectionImage.map((x) => (
    //                       <div className="col-md-4">
    //                         <a href="" onClick={this.removeFile.bind(this, x)}>
    //                           <BsXCircle />
    //                         </a>
    //                         <div className="card mb-4 shadow-sm">
    //                           <img src={URL.createObjectURL(x)}></img>
    //                         </div>
    //                       </div>
    //                     ))}
    //                   </div>
    //                   {ImgError.length > 0 && (
    //                     <span className="error">{ImgError}</span>
    //                   )}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // );
  };

  restaurant = () => {
    const { errors, lat, lng, collectionImage, ImgError, Error } = this.state;
    const Marker = () => {
      return <BiCurrentLocation style={{ fontSize: "20px", color: "blue" }} />;
    };
    return (
      <div>
        <section
          className="u-align-left u-clearfix hotel-section"
          id="sec-7c81"
        >
          <p className="u-text u-text-default u-text-1">
            <a href="" onClick={() => this.setState({ view: null })}>
              ลงทะเบียนสถานที่
            </a>{" "}
            / สร้างร้านอาหารของคุณ
          </p>
          <img
            className="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-1"
            src={restaurant}
            data-image-width={626}
            data-image-height={417}
          />
          <div className="u-container-style u-custom-color-3 u-expanded-width-sm u-expanded-width-xs u-group u-shape-rectangle u-group-1">
            <div className="u-container-layout u-container-layout-1">
              <p className="u-text u-text-default u-text-2">
                * กรุณาใส่รายละเอียดร้านอาหารของคุณ
              </p>
              <p className="u-text u-text-default u-text-3">ชื่อร้าน</p>
              <div className="u-form u-form-1">
                <form
                  className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                  source="custom"
                  name="form"
                  style={{ padding: 10 }}
                >
                  <div className="u-form-group u-form-name">
                    <label
                      htmlFor="name-5121"
                      className="u-form-control-hidden u-label"
                    />
                    <input
                      type="text"
                      placeholder="กรอกชื่อร้านอาหารของคุณ"
                      name="Name"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      onChange={this.handleChange}
                      required
                    />
                    {errors.Name.length > 0 && (
                      <span className="error">{errors.Name}</span>
                    )}
                  </div>
                  <div className="u-form-group u-form-select u-form-group-2">
                    <label
                      htmlFor="select-62ad"
                      className="u-form-control-hidden u-label"
                    />
                    <div className="u-form-select-wrapper">
                      <select
                        name="type"
                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                        onChange={this.handleChange}
                      >
                        <option value="0">ประเภทร้านอาหาร</option>
                        <option value="14">บุฟเฟ่ต์</option>
                        <option value="11">ภัตราคาร</option>
                        <option value="13">ฟาสต์ฟู้ด</option>
                        <option value="12">คาเฟ่</option>
                      </select>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={12}
                        version={1}
                        className="u-caret"
                      >
                        <path fill="currentColor" d="M4 8L0 4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="u-form-group u-form-textarea u-form-group-3">
                    <label
                      htmlFor="textarea-6422"
                      className="u-form-control-hidden u-label"
                    />
                    <textarea
                      rows={4}
                      cols={50}
                      name="Description"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-3"
                      required
                      placeholder="กรอกรายละเอียดร้านของคุณ"
                      onChange={this.handleChange}
                    />
                    {errors.Description.length > 0 && (
                      <span className="error">{errors.Description}</span>
                    )}
                  </div>
                  <div className="u-form-group u-form-group-4">
                    <label
                      htmlFor="text-3447"
                      className="u-form-control-hidden u-label"
                    />
                    <input
                      type="text"
                      placeholder="กรอกที่อยู่ร้านของคุณ"
                      name="address"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      onChange={this.handleChange}
                    />
                    {errors.address.length > 0 && (
                      <span className="error">{errors.address}</span>
                    )}
                  </div>
                  <div className="u-form-group u-form-group-5">
                    <label
                      htmlFor="text-2420"
                      className="u-form-control-hidden u-label"
                    />
                    <input
                      type="text"
                      placeholder="กรอกอำเภอร้านของคุณ"
                      name="district"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      onChange={this.handleChange}
                    />
                    {errors.district.length > 0 && (
                      <span className="error">{errors.district}</span>
                    )}
                  </div>
                  <div className="u-form-group u-form-group-6">
                    <label
                      htmlFor="text-f383"
                      className="u-form-control-hidden u-label"
                    />
                    <input
                      type="text"
                      placeholder="กรอกจังหวัดร้านของคุณ"
                      name="province"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      onChange={this.handleChange}
                    />
                    {errors.province.length > 0 && (
                      <span className="error">{errors.province}</span>
                    )}
                  </div>
                  <div className="u-form-group u-form-group-7">
                    <label
                      htmlFor="text-29e8"
                      className="u-form-control-hidden u-label"
                    />
                    <input
                      type="text"
                      placeholder="กรอกรหัสไปรษณีย์ร้านของคุณ"
                      name="postcode"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      onChange={this.handleChange}
                    />
                    {errors.postcode.length > 0 && (
                      <span className="error">{errors.postcode}</span>
                    )}
                  </div>
                </form>
              </div>
              <p className="u-hidden-xs u-text u-text-default u-text-4">
                รายละเอียด
              </p>
              <p className="u-hidden-xs u-text u-text-default u-text-5">
                ที่อยู่
              </p>
              <p className="u-hidden-xs u-text u-text-default u-text-6">
                อำเภอ
              </p>
              <p className="u-hidden-xs u-text u-text-default u-text-7">
                จังหวัด
              </p>
              <p className="u-hidden-xs u-text u-text-default u-text-8">
                ประเภทร้านอาหาร
              </p>
              <p className="u-hidden-xs u-text u-text-default u-text-9">
                รหัสไปรษณีย์
              </p>
              <div className="u-google-map">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: API_KEY }}
                  defaultCenter={this.props.center}
                  center={{ lat: lat, lng: lng }}
                  defaultZoom={this.props.zoom}
                  yesIWantToUseGoogleMapApiInternals
                  style={{
                    height: "250px",
                    width: "250px",
                    position: "relative",
                  }}
                >
                  <Marker lat={lat} lng={lng} />
                </GoogleMapReact>
              </div>
              <p className="u-text u-text-default u-text-10">
                แผนที่ร้านของคุณ
              </p>
              <p className="u-hidden-xs u-text u-text-default u-text-11">
                ละติจูด
              </p>
              <div className="u-form u-form-2">
                <form
                  className="u-clearfix u-form-spacing-25 u-form-vertical u-inner-form"
                  source="custom"
                  name="form-1"
                  style={{ padding: 10 }}
                >
                  <input
                    type="hidden"
                    id="siteId"
                    name="siteId"
                    defaultValue={2787330704}
                  />
                  <input
                    type="hidden"
                    id="pageId"
                    name="pageId"
                    defaultValue={236865951}
                  />
                  <div className="u-form-group u-form-name">
                    <label
                      htmlFor="name-a378"
                      className="u-form-control-hidden u-label"
                    />
                    <input
                      type="text"
                      placeholder="ละติจูด"
                      name="Latitude"
                      value={lat}
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      disabled
                    />
                  </div>
                  <div className="u-form-email u-form-group">
                    <label
                      htmlFor="email-a378"
                      className="u-form-control-hidden u-label"
                    />
                    <input
                      type="text"
                      placeholder="ลองจิจูด"
                      name="longitude"
                      value={lng}
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                      disabled
                    />
                  </div>
                  <div className="u-align-left u-form-group u-form-submit">
                    <a
                      href="#"
                      className="u-btn u-btn-submit u-button-style"
                      onClick={this.handleSubmit}
                    >
                      ลงทะเบียน
                    </a>
                    <input
                      type="submit"
                      defaultValue="submit"
                      className="u-form-control-hidden"
                    />
                    {Error.length > 0 && <span className="error">{Error}</span>}
                  </div>
                </form>
              </div>
              <p className="u-hidden-xs u-text u-text-default u-text-12">
                ลองจิจูด
              </p>
            </div>
          </div>
          <div className="u-custom-color-3 u-expanded-width-xs u-shape u-shape-rectangle u-shape-1">
            <p className="u-text u-text-default-xl u-text-13">
              * กรุณาใส่รูปร้านของคุณ
            </p>

            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  multiple="multiple"
                  accept=".jpg,.jpe,.png,.gif"
                  onChange={this.onFileChange}
                />
                <span className="error" style={{ marginLeft: "10px" }}></span>
                <label className="custom-file-label">Choose file</label>
              </div>
            </div>
            <div className="u-img-upload">
              {collectionImage.length > 0 && (
                <img
                  height="200"
                  width="200"
                  src={URL.createObjectURL(collectionImage[0])}
                />
              )}
            </div>
          </div>
          <div className="u-custom-color-3 u-expanded-width-xs u-shape u-shape-rectangle u-shape-2">
            <div className="row">
              {collectionImage.map((x) => (
                <div className="col-md-4">
                  <a href="" onClick={this.removeFile.bind(this, x)}>
                    <BsXCircle />
                  </a>
                  <div className="card mb-3 shadow-sm">
                    <img src={URL.createObjectURL(x)}></img>
                  </div>
                </div>
              ))}
            </div>
            {ImgError.length > 0 && <span className="error">{ImgError}</span>}
          </div>
        </section>
      </div>
    );
    // return (
    //   <section className="u-clearfix restaurant-section" id="sec-8600">
    //     <div className="u-clearfix u-sheet u-sheet-1">
    //       <h4 className="u-text-1">
    //         <a href="" onClick={() => this.Addstore}>
    //           ลงทะเบียนสถานที่{" "}
    //         </a>
    //         / ร้านอาหาร
    //       </h4>
    //       <div className="u-clearfix u-expanded-width-xs u-gutter-0 u-layout-wrap u-layout-wrap-1">
    //         <div className="u-layout">
    //           <div className="u-layout-row">
    //             <div
    //               className="u-container-style u-image u-layout-cell u-size-12 u-image-1"
    //               data-image-width={897}
    //               data-image-height={759}
    //             >
    //               <div className="u-container-layout u-valign-middle u-container-layout-1">
    //                 <h4 className="u-text u-text-custom-color-4 u-text-default-lg u-text-default-xl u-text-2">
    //                   ร้านอาหาร
    //                 </h4>
    //               </div>
    //             </div>
    //             <div className="u-container-style u-layout-cell u-size-24 u-layout-cell-2">
    //               <div className="u-container-layout u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-2">
    //                 <h6 className="u-text u-text-custom-color-2 u-text-default u-text-3">
    //                   *กรุณาใส่ข้อมูลสถานที่
    //                 </h6>
    //                 <div className="u-expanded-width-xs u-form u-form-1">
    //                   <form
    //                     className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
    //                     style={{ padding: 15 }}
    //                   >
    //                     <div className="u-form-group u-form-name">
    //                       <label className="u-label u-label-1">
    //                         ชื่อสถานที่
    //                       </label>
    //                       <input
    //                         type="text"
    //                         placeholder="Name"
    //                         name="Name"
    //                         className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-1"
    //                         onChange={this.handleChange}
    //                       />
    //                       {errors.Name.length > 0 && (
    //                         <span className="error">{errors.Name}</span>
    //                       )}
    //                     </div>
    //                     <div className="u-form-group u-form-message">
    //                       <label className="u-label u-label-2">
    //                         รายละเอียดสถานที่
    //                       </label>
    //                       <textarea
    //                         rows={4}
    //                         cols={50}
    //                         name="Description"
    //                         className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-2"
    //                         onChange={this.handleChange}
    //                       />
    //                       {errors.Description.length > 0 && (
    //                         <span className="error">{errors.Description}</span>
    //                       )}
    //                     </div>
    //                     <div className="u-form-group u-form-select u-form-group-3">
    //                       <label className="u-form-control-hidden u-label u-label-3" />
    //                       <div className="u-form-select-wrapper">
    //                         <select
    //                           name="type"
    //                           className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-3"
    //                           onChange={this.handleChange}
    //                         >
    //                           <option value="0">ประเภทร้านอาหาร</option>
    //                           <option value="14">Buffet</option>
    //                           <option value="11">Restaurant</option>
    //                           <option value="13">Fastfood</option>
    //                           <option value="12">Cafe</option>
    //                         </select>
    //                         <svg
    //                           xmlns="http://www.w3.org/2000/svg"
    //                           width={14}
    //                           height={12}
    //                           version={1}
    //                           className="u-caret"
    //                         >
    //                           <path fill="currentColor" d="M4 8L0 4h8z" />
    //                         </svg>
    //                         {errors.type.length > 0 && (
    //                           <span className="error">{errors.type}</span>
    //                         )}
    //                       </div>
    //                     </div>
    //                     <div className="u-form-group u-form-group-4">
    //                       <label className="u-label u-label-4">ที่อยู่</label>
    //                       <input
    //                         type="text"
    //                         name="address"
    //                         className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
    //                         onChange={this.handleChange}
    //                       />
    //                       {errors.address.length > 0 && (
    //                         <span className="error">{errors.address}</span>
    //                       )}
    //                     </div>
    //                     <div className="u-form-group u-form-group-4">
    //                       <label className="u-label u-label-4">อำเภอ</label>
    //                       <input
    //                         type="text"
    //                         name="district"
    //                         className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
    //                         onChange={this.handleChange}
    //                       />
    //                       {errors.district.length > 0 && (
    //                         <span className="error">{errors.district}</span>)}
    //                       </div>
    //                       <div className="u-form-group u-form-group-4">
    //                       <label className="u-label u-label-4">จังหวัด</label>
    //                       <input
    //                         type="text"
    //                         name="province"
    //                         className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
    //                         onChange={this.handleChange}
    //                       />
    //                       {errors.province.length > 0 && (
    //                         <span className="error">{errors.province}</span>)}
    //                       </div>
    //                       <div className="u-form-group u-form-group-4">
    //                       <label className="u-label u-label-4">รหัสไปรษณีย์</label>
    //                       <input
    //                         type="text"
    //                         name="postcode"
    //                         className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
    //                         onChange={this.handleChange}
    //                       />
    //                       {errors.postcode.length > 0 && (
    //                         <span className="error">{errors.postcode}</span>)}
    //                       </div>
    //                     <div className="u-form-group u-form-group-4">
    //                       <label className="u-label u-label-4">Latitude</label>
    //                       <input
    //                         type="text"
    //                         name="Latitude"
    //                         className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
    //                         disabled
    //                         value={lat}
    //                       />
    //                     </div>
    //                     <div className="u-form-group u-form-group-4">
    //                       <label className="u-label u-label-4">Longitude</label>
    //                       <input
    //                         type="text"
    //                         name="Longitude"
    //                         className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
    //                         disabled
    //                         value={lng}
    //                       />
    //                     </div>

    //                     <GoogleMapReact
    //                       bootstrapURLKeys={{ key: API_KEY }}
    //                       defaultCenter={this.props.center}
    //                       center={{ lat: lat, lng: lng }}
    //                       defaultZoom={this.props.zoom}
    //                       yesIWantToUseGoogleMapApiInternals
    //                       style={{
    //                         height: "300px",
    //                         width: "300px",
    //                         position: "relative",
    //                       }}
    //                     >
    //                       <Marker lat={lat} lng={lng} />
    //                     </GoogleMapReact>

    //                     <div className="u-align-left u-form-group u-form-submit">
    //                       <a
    //                         href="#"
    //                         className="u-btn u-btn-submit u-button-style"
    //                         onClick={this.handleSubmit}
    //                       >
    //                         Submit
    //                       </a>
    //                       <input
    //                         type="submit"
    //                         defaultValue="submit"
    //                         className="u-form-control-hidden"
    //                       />
    //                      {Error.length > 0 && (
    //                     <span className="error">{Error}</span>
    //                   )}
    //                     </div>
    //                   </form>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="u-align-left u-container-style u-layout-cell u-size-24 u-layout-cell-3">
    //               <div className="u-container-layout u-valign-bottom-sm u-valign-bottom-xs u-container-layout-3">
    //                 <h6 className="u-text u-text-custom-color-2 u-text-default u-text-4">
    //                   *กรุณาใส่รูปภาพ
    //                 </h6>
    //                 <div className="u-expanded-width-md u-shape u-shape-rectangle u-white u-shape-1">
    //                   <div className="input-group mb-3">
    //                     <div className="custom-file">
    //                       <input
    //                         type="file"
    //                         className="custom-file-input"
    //                         multiple="multiple"
    //                         accept=".jpg,.jpe,.png,.gif"
    //                         onChange={this.onFileChange}
    //                       />
    //                       <label className="custom-file-label">
    //                         Choose file
    //                       </label>
    //                     </div>
    //                   </div>
    //                   <div style={{ margin: "10px" }}>
    //                     {collectionImage.length > 0 && (
    //                       <img
    //                         height="200"
    //                         width="auto"
    //                         src={URL.createObjectURL(collectionImage[0])}
    //                       />
    //                     )}
    //                   </div>
    //                 </div>
    //                 <div className="u-expanded-width-md u-shape u-shape-rectangle u-white u-shape-2">
    //                   <div className="row">
    //                     {collectionImage.map((x) => (
    //                       <div className="col-md-4">
    //                         <a href="" onClick={this.removeFile.bind(this, x)}>
    //                           <BsXCircle />
    //                         </a>
    //                         <div className="card mb-4 shadow-sm">
    //                           <img src={URL.createObjectURL(x)}></img>
    //                         </div>
    //                       </div>
    //                     ))}
    //                   </div>
    //                   {ImgError.length > 0 && (
    //                     <span className="error">{ImgError}</span>
    //                   )}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // );
  };

  render() {
    const { view } = this.state;
    return (
      <div>
        {view === null && this.isLoading()}
        {view === 0 && this.Addstore()}
        {view === 1 && this.restaurant()}
        {view === 2 && this.hotel()}
        <Modal
          show={this.state.showEnableLocation}
          onHide={this.hideEnableLocationModal}
          animation={true}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          size="sm"
        >
          <Modal.Body>
            <div className="text-center">
              <img
                className="d-block mx-auto mb-4"
                src={pin}
                width={200}
                height={150}
              />
              <div className="">
                <p className="lead mb-4">โปรดเปิดใช้งานการระบุตำแหน่ง</p>
              </div>
              <Button variant="secondary" onClick={() => this.getMyLocation()}>
                เปิด
              </Button>
              <p />
              <a href="" onClick={() => this.props.history.push("/home")}>
                ข้าม
              </a>
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.showVaccineAlertModal}
          onHide={this.hideVaccineAlertModal}
          animation={true}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          size="sm"
        >
          <Modal.Body>
            <div className="text-center">
              <img
                className="d-block mx-auto mb-4"
                src={novaccine}
                width={200}
                height={200}
              />
              <div className="">
                <p className="lead mb-4">
                  คุณไม่มีข้อมูลการฉีดวัคซีนหรือข้อมูลยังไม่ได้อัพเดท
                </p>
              </div>
              <Button
                variant="secondary"
                onClick={() => this.props.history.push("/vaccinationstatus")}
              >
                อัพเดทสถานะการฉีดวัคซีน
              </Button>
              <p />
              <a href="" onClick={() => this.hideVaccineAlertModal()}>
                ข้าม
              </a>
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.successModal}
          onHide={this.hideSuccessModal}
          animation={true}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          size="sm"
        >
          <div style={{ textAlign: "center" }}>
            <div className="simplert__header">
              <div>
                <div className="simplert__icon simplert__icon--success">
                  <div className="simplert__line simplert__line--success" />
                  <div className="simplert__line simplert__line--success-2" />
                </div>
              </div>
              {/* <b className="simplert__title">เพิ่มร้านค้าสำเร็จ</b> */}
            </div>
            <div className="simplert__body">
              <div className="simplert__title">
              <b>เพิ่มร้านค้าสำเร็จ</b>
              </div>
            </div>
            <div className="simplert__footer">
              <button className="simplert__close " onClick={() => this.props.history.push("/home")}>Close</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Addstore;
