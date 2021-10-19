import React, { Component } from "react";
import { OK, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import "./addstore.css";
import { BsXCircle } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import GoogleMapReact from "google-map-react";
import { validateForm } from "../../utils/regex.js";
import FormData from "form-data";

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
      Description: null,
      type: null,
      address: null,
      view: null,
      collectionImage: [],
      district: null,
    province: null,
    postcode: null,
      lat: "",
      lng: "",
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
    
    };
    this.onFileChange = this.onFileChange.bind(this);
    this.getMyLocation = this.getMyLocation.bind(this);
  }

  async getMyLocation() {
    const location = window.navigator.geolocation;
    if (location) {
      await location.getCurrentPosition(
        (position) => {
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          console.log(this.state.lat);
          console.log(this.state.lng);
        },
        (error) => {
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
            this.setState({ userId: result.data.result.UserId });
          }).catch((error) => {
            this.setState({ userId: null })
          })
    await this.getMyLocation();
    this.Addstore();
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
      const { userId, Name, Description, type, address, district, province, postcode, lat, lng} = this.state;

      if (userId == null|| Name == null || type == 0 || address == null || Description == null || district == null || province == null || postcode == null) {
        console.log("notPassform");
        console.log(this.state);
        this.setState({Error: "ข้อมูลผิดพลาด"});
      }else{
      console.log("Passform");
         if (
        images.length < 1) {
        this.setState({ ImgError: "โปรดเลือกไฟล์รูปใหม่" });
      } else {
        var images = this.state.collectionImage;
        var formData = new FormData();
        // formData.append("EstId", "100")
        formData.append("Owner", userId);
        formData.append("Name", Name);
        formData.append("SubCategoryId", type);
        formData.append("Description", Description);
        formData.append("Address", address);
        formData.append("District", district);
        formData.append("Province", province);
        formData.append("PostCode", postcode);
        formData.append("Lat", lat);
        formData.append("Lng", lng)
        for (let i = 0 ; i < images.length ; i++) {
          formData.append("images", images[i]);
      }
        httpClient.post(server.ESTABLISH_URL, formData).then(response => {
          console.log(JSON.stringify(response.data));
          if(response.data.result === OK){
            console.log("Done");
            this.setState({Error: ""})
          }else{
            console.log("Error");
            this.setState({Error: "ข้อมูลผิดพลาด"})
          }
        }).catch((error) => {
          console.error(error)
          this.setState({Error: "ข้อมูลผิดพลาด"})
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
                      if (this.state.lat) {
                        this.setState({ view: 1 });
                      } else {
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
                      if (this.state.lat) {
                        this.setState({ view: 2 });
                      } else {
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
    const { errors, lat, lng, collectionImage, ImgError, Error} = this.state;
    const Marker = () => {
      return <BiCurrentLocation style={{ fontSize: "20px", color: "blue" }} />;
    };
    return (
      <section className="u-clearfix hotel-section" id="sec-97b3">
        <div className="u-align-left u-clearfix u-sheet u-valign-middle-lg u-sheet-1">
          <h4 className="u-text-1">
            <a href="" onClick={() => this.setState({ view: null })}>
              ลงทะเบียนสถานที่
            </a>{" "}
            / ที่พัก
          </h4>
          <div className="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div
                  className="u-container-style u-image u-layout-cell u-size-12 u-image-1"
                  data-image-width={897}
                  data-image-height={759}
                >
                  <div className="u-container-layout u-valign-middle u-container-layout-1">
                    <h3 className="u-text u-text-custom-color-4 u-text-default u-text-2">
                      ที่พัก
                    </h3>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-size-24 u-layout-cell-2">
                  <div className="u-container-layout u-valign-top u-container-layout-2">
                    <h6 className="u-text u-text-custom-color-2 u-text-default u-text-3">
                      *กรุณาใส่ช้อมูลสถานที่
                    </h6>
                    <div className="u-expanded-width-xs u-form u-form-1">
                      <form
                        className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                        style={{ padding: 15 }}
                      >
                        <div className="u-form-group u-form-name">
                          <label className="u-label u-label-1">
                            ชื่อสถานที่
                          </label>
                          <input
                            type="text"
                            placeholder="Name"
                            name="Name"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-1"
                            onChange={this.handleChange}
                          />
                          {errors.Name.length > 0 && (
                            <span className="error">{errors.Name}</span>
                          )}
                        </div>
                        <div className="u-form-group u-form-message">
                          <label className="u-label u-label-2">
                            รายละเอียดสถานที่
                          </label>
                          <textarea
                            rows={4}
                            cols={50}
                            name="Description"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-2"
                            onChange={this.handleChange}
                          />
                          {errors.Description.length > 0 && (
                            <span className="error">{errors.Description}</span>
                          )}
                        </div>
                        <div className="u-form-group u-form-select u-form-group-3">
                          <label className="u-form-control-hidden u-label u-label-3" />
                          <div className="u-form-select-wrapper">
                            <select
                              name="type"
                              className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-3"
                              onChange={this.handleChange}
                            >
                              <option value="0">ประเภทที่พัก</option>
                              <option value="21">Hotel</option>
                              <option value="22">Hostel</option>
                              <option value="23">Resort</option>
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
                            {errors.type.length > 0 && (
                              <span className="error">{errors.type}</span>
                            )}
                          </div>
                        </div>
                        <div className="u-form-group u-form-group-4">
                          <label className="u-label u-label-4">ที่อยู่</label>
                          <input
                            type="text"
                            name="address"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
                            onChange={this.handleChange}
                          />
                          {errors.address.length > 0 && (
                            <span className="error">{errors.address}</span>
                          )}
                        </div>
                        <div className="u-form-group u-form-group-4">
                          <label className="u-label u-label-4">อำเภอ</label>
                          <input
                            type="text"
                            name="district"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
                            onChange={this.handleChange}
                          />
                          {errors.district.length > 0 && (
                            <span className="error">{errors.district}</span>)}
                          </div>
                          <div className="u-form-group u-form-group-4">
                          <label className="u-label u-label-4">จังหวัด</label>
                          <input
                            type="text"
                            name="province"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
                            onChange={this.handleChange}
                          />
                          {errors.province.length > 0 && (
                            <span className="error">{errors.province}</span>)}
                          </div>
                          <div className="u-form-group u-form-group-4">
                          <label className="u-label u-label-4">รหัสไปรษณีย์</label>
                          <input
                            type="text"
                            name="postcode"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
                            onChange={this.handleChange}
                          />
                          {errors.postcode.length > 0 && (
                            <span className="error">{errors.postcode}</span>)}
                          </div>
                        <div className="u-form-group u-form-group-4">
                          <label className="u-label u-label-4">Latitude</label>
                          <input
                            type="text"
                            name="Longitude"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
                            disabled
                            value={lat}
                          />
                        </div>
                        <div className="u-form-group u-form-group-4">
                          <label className="u-label u-label-4">Longitude</label>
                          <input
                            type="text"
                            name="Longitude"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
                            disabled
                            value={lng}
                          />
                        </div>

                        <GoogleMapReact
                          bootstrapURLKeys={{ key: API_KEY }}
                          defaultCenter={this.props.center}
                          center={{ lat: lat, lng: lng }}
                          defaultZoom={this.props.zoom}
                          yesIWantToUseGoogleMapApiInternals
                          style={{
                            height: "300px",
                            width: "300px",
                            position: "relative",
                          }}
                        >
                          <Marker lat={lat} lng={lng} />
                        </GoogleMapReact>

                        <div className="u-align-left u-form-group u-form-submit">
                          <a
                            href="#"
                            className="u-btn u-btn-submit u-button-style"
                            onClick={this.handleSubmit}
                          >
                            Submit
                          </a>
                          <input
                            type="submit"
                            defaultValue="submit"
                            className="u-form-control-hidden"
                          />
                          {Error.length > 0 && (
                        <span className="error">{Error}</span>
                      )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="u-align-left u-container-style u-layout-cell u-size-24 u-layout-cell-3">
                  <div className="u-container-layout u-container-layout-3">
                    <h6 className="u-text u-text-custom-color-2 u-text-default u-text-4">
                      *กรุณาใส่รูปภาพ
                    </h6>
                    <div className="u-shape u-shape-rectangle u-white u-shape-1">
                      <div className="input-group mb-3">
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            multiple="multiple"
                            accept=".jpg,.jpe,.png,.gif"
                            onChange={this.onFileChange}
                          />
                          <span
                            className="error"
                            style={{ marginLeft: "10px" }}
                          ></span>
                          <label className="custom-file-label">
                            Choose file
                          </label>
                        </div>
                      </div>
                      <div style={{ margin: "10px" }}>
                        {collectionImage.length > 0 && (
                          <img
                            height="200"
                            width="auto"
                            src={URL.createObjectURL(collectionImage[0])}
                          />
                        )}
                      </div>
                    </div>
                    <div className="u-shape u-shape-rectangle u-white u-shape-2">
                      <div className="row">
                        {collectionImage.map((x) => (
                          <div className="col-md-4">
                            <a href="" onClick={this.removeFile.bind(this, x)}>
                              <BsXCircle />
                            </a>
                            <div className="card mb-4 shadow-sm">
                              <img src={URL.createObjectURL(x)}></img>
                            </div>
                          </div>
                        ))}
                      </div>
                      {ImgError.length > 0 && (
                        <span className="error">{ImgError}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  restaurant = () => {
    const { errors, lat, lng, collectionImage, ImgError, Error } = this.state;
    const Marker = () => {
      return <BiCurrentLocation style={{ fontSize: "20px", color: "blue" }} />;
    };
    return (
      <section className="u-clearfix restaurant-section" id="sec-8600">
        <div className="u-clearfix u-sheet u-sheet-1">
          <h4 className="u-text-1">
            <a href="" onClick={() => this.Addstore}>
              ลงทะเบียนสถานที่{" "}
            </a>
            / ร้านอาหาร
          </h4>
          <div className="u-clearfix u-expanded-width-xs u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div
                  className="u-container-style u-image u-layout-cell u-size-12 u-image-1"
                  data-image-width={897}
                  data-image-height={759}
                >
                  <div className="u-container-layout u-valign-middle u-container-layout-1">
                    <h4 className="u-text u-text-custom-color-4 u-text-default-lg u-text-default-xl u-text-2">
                      ร้านอาหาร
                    </h4>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-size-24 u-layout-cell-2">
                  <div className="u-container-layout u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-2">
                    <h6 className="u-text u-text-custom-color-2 u-text-default u-text-3">
                      *กรุณาใส่ข้อมูลสถานที่
                    </h6>
                    <div className="u-expanded-width-xs u-form u-form-1">
                      <form
                        className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                        style={{ padding: 15 }}
                      >
                        <div className="u-form-group u-form-name">
                          <label className="u-label u-label-1">
                            ชื่อสถานที่
                          </label>
                          <input
                            type="text"
                            placeholder="Name"
                            name="Name"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-1"
                            onChange={this.handleChange}
                          />
                          {errors.Name.length > 0 && (
                            <span className="error">{errors.Name}</span>
                          )}
                        </div>
                        <div className="u-form-group u-form-message">
                          <label className="u-label u-label-2">
                            รายละเอียดสถานที่
                          </label>
                          <textarea
                            rows={4}
                            cols={50}
                            name="Description"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-2"
                            onChange={this.handleChange}
                          />
                          {errors.Description.length > 0 && (
                            <span className="error">{errors.Description}</span>
                          )}
                        </div>
                        <div className="u-form-group u-form-select u-form-group-3">
                          <label className="u-form-control-hidden u-label u-label-3" />
                          <div className="u-form-select-wrapper">
                            <select
                              name="type"
                              className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-3"
                              onChange={this.handleChange}
                            >
                              <option value="0">ประเภทร้านอาหาร</option>
                              <option value="14">Buffet</option>
                              <option value="11">Restaurant</option>
                              <option value="13">Fastfood</option>
                              <option value="12">Cafe</option>
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
                            {errors.type.length > 0 && (
                              <span className="error">{errors.type}</span>
                            )}
                          </div>
                        </div>
                        <div className="u-form-group u-form-group-4">
                          <label className="u-label u-label-4">ที่อยู่</label>
                          <input
                            type="text"
                            name="address"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
                            onChange={this.handleChange}
                          />
                          {errors.address.length > 0 && (
                            <span className="error">{errors.address}</span>
                          )}
                        </div>
                        <div className="u-form-group u-form-group-4">
                          <label className="u-label u-label-4">อำเภอ</label>
                          <input
                            type="text"
                            name="district"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
                            onChange={this.handleChange}
                          />
                          {errors.district.length > 0 && (
                            <span className="error">{errors.district}</span>)}
                          </div>
                          <div className="u-form-group u-form-group-4">
                          <label className="u-label u-label-4">จังหวัด</label>
                          <input
                            type="text"
                            name="province"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
                            onChange={this.handleChange}
                          />
                          {errors.province.length > 0 && (
                            <span className="error">{errors.province}</span>)}
                          </div>
                          <div className="u-form-group u-form-group-4">
                          <label className="u-label u-label-4">รหัสไปรษณีย์</label>
                          <input
                            type="text"
                            name="postcode"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
                            onChange={this.handleChange}
                          />
                          {errors.postcode.length > 0 && (
                            <span className="error">{errors.postcode}</span>)}
                          </div>
                        <div className="u-form-group u-form-group-4">
                          <label className="u-label u-label-4">Latitude</label>
                          <input
                            type="text"
                            name="Latitude"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
                            disabled
                            value={lat}
                          />
                        </div>
                        <div className="u-form-group u-form-group-4">
                          <label className="u-label u-label-4">Longitude</label>
                          <input
                            type="text"
                            name="Longitude"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4"
                            disabled
                            value={lng}
                          />
                        </div>

                        <GoogleMapReact
                          bootstrapURLKeys={{ key: API_KEY }}
                          defaultCenter={this.props.center}
                          center={{ lat: lat, lng: lng }}
                          defaultZoom={this.props.zoom}
                          yesIWantToUseGoogleMapApiInternals
                          style={{
                            height: "300px",
                            width: "300px",
                            position: "relative",
                          }}
                        >
                          <Marker lat={lat} lng={lng} />
                        </GoogleMapReact>

                        <div className="u-align-left u-form-group u-form-submit">
                          <a
                            href="#"
                            className="u-btn u-btn-submit u-button-style"
                            onClick={this.handleSubmit}
                          >
                            Submit
                          </a>
                          <input
                            type="submit"
                            defaultValue="submit"
                            className="u-form-control-hidden"
                          />
                         {Error.length > 0 && (
                        <span className="error">{Error}</span>
                      )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="u-align-left u-container-style u-layout-cell u-size-24 u-layout-cell-3">
                  <div className="u-container-layout u-valign-bottom-sm u-valign-bottom-xs u-container-layout-3">
                    <h6 className="u-text u-text-custom-color-2 u-text-default u-text-4">
                      *กรุณาใส่รูปภาพ
                    </h6>
                    <div className="u-expanded-width-md u-shape u-shape-rectangle u-white u-shape-1">
                      <div className="input-group mb-3">
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            multiple="multiple"
                            accept=".jpg,.jpe,.png,.gif"
                            onChange={this.onFileChange}
                          />
                          <label className="custom-file-label">
                            Choose file
                          </label>
                        </div>
                      </div>
                      <div style={{ margin: "10px" }}>
                        {collectionImage.length > 0 && (
                          <img
                            height="200"
                            width="auto"
                            src={URL.createObjectURL(collectionImage[0])}
                          />
                        )}
                      </div>
                    </div>
                    <div className="u-expanded-width-md u-shape u-shape-rectangle u-white u-shape-2">
                      <div className="row">
                        {collectionImage.map((x) => (
                          <div className="col-md-4">
                            <a href="" onClick={this.removeFile.bind(this, x)}>
                              <BsXCircle />
                            </a>
                            <div className="card mb-4 shadow-sm">
                              <img src={URL.createObjectURL(x)}></img>
                            </div>
                          </div>
                        ))}
                      </div>
                      {ImgError.length > 0 && (
                        <span className="error">{ImgError}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  render() {
    const { view } = this.state;
    return (
      <div>
        {view === null && this.Addstore()}
        {view === 1 && this.restaurant()}
        {view === 2 && this.hotel()}
      </div>
    );
  }
}

export default Addstore;
