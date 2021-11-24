import React, { Component } from "react";
import { server, YES, OK } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import { WaveLoading } from "react-loadingg";
import "./editestabilishment.css";
import { BsTrash } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import { validateForm } from "../../utils/regex.js";
import Modal from "react-bootstrap/Modal";
import FormData from "form-data";

const API_KEY = "AIzaSyATAXCWMqd7hmu44d93FCJpPTGcHLKN6lg";

class Editestabilishment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: null,
      offset: 0,
      data: [],
      perPage: 3,
      currentPage: 0,
      isFetching: false,
      EstId: null,
      Name: null,
      Citizen: null,
      Description: null,
      type: null,
      address: null,
      view: null,
      district: null,
      province: null,
      postcode: null,
      lat: null,
      lng: null,
      arrImg: [],
      errors: {
        Name: "",
        Description: "",
        type: "",
        address: "",
        district: "",
        province: "",
        postcode: "",
        lat: "",
        lng: "",
      },
      Error: "",
      showDeleteModal: false,
      showModal: false,
      delete: "",
      File: null,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showDeleteModal = () => {
    this.setState({ showDeleteModal: true });
  };

  hideDeleteModal = () => {
    this.setState({ showDeleteModal: false });
  };

  showModal = (e) => {
    e.preventDefault();
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
    window.location.reload();
  };

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.ImgRow();
      }
    );
  };

  onFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    this.setState({ File: file });
  };

  onFileUpload = (e) => {
    e.preventDefault();
    const file = this.state.File;
    console.log(file);
    if (file != null) {
      var formData = new FormData();
      formData.append("image", file);
      formData.append("EstId", this.state.EstId);
      httpClient.put(server.ADDMOREIMAGE, formData).then((response) => {
        this.setState({ isFetching: true });
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
    } else {
    }
  };

  componentDidMount() {
    try {
      this.setState({ isFetching: true });
      if (localStorage.getItem(server.LOGIN_PASSED) === YES) {
        let token = localStorage.getItem("Token");
        httpClient
          .get(server.LOGIN_USER, {
            headers: { Authorization: `Authorization ${token}` },
          })
          .then((result) => {
            const data = result.data.result;
            httpClient
              .get(`${server.MYESTABLISHMENT}/${data.UserId}`)
              .then((response) => {
                let estdata = response.data;
                if (estdata != null) {
                  this.setState({
                    EstId: estdata.result.EstId,
                    Name: estdata.result.Name,
                    Description: estdata.result.Description,
                    type: estdata.result.SubCategoryId,
                    address: estdata.result.Address,
                    district: estdata.result.District,
                    province: estdata.result.Province,
                    postcode: estdata.result.PostCode,
                    lat: estdata.result.Lat,
                    lng: estdata.result.Lng,
                    arrImg: estdata.arrImg,
                    isFetching: false,
                  });
                  this.ImgRow();
                } else {
                  this.setState({ isFetching: false });
                }
              });
          });
      } else {
      }
    } catch (e) {}
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
      case "lat":
        errors.lat = value.length === 0 || value === null ? "โปรดระบุ" : "";
        break;
      case "lng":
        errors.lng = value.length === 0 || value === null ? "โปรดระบุ" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = (e) => {
    const {
      EstId,
      Name,
      address,
      type,
      Description,
      district,
      province,
      postcode,
      lat,
      lng,
    } = this.state;
    e.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
      console.log(this.state.errors);
      let data = {
        EstId,
        Name,
        address,
        type,
        Description,
        district,
        province,
        postcode,
        lat,
        lng,
      };
      console.log(data);
      httpClient
        .put(server.ESTABLISH_URL, data)
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log(this.state.errors);
      console.info("Invalid Form");
    }
  };

  deleteImage = () => {
    const fileName = this.state.delete;
    const EstId = this.state.EstId;
    httpClient
      .delete(`${server.DELETEIMAGE}/${fileName}/${EstId}`)
      .then((response) => {
        if (response.data.result === OK) {
          window.location.reload();
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  ImgRow = () => {
    try {
      const { arrImg } = this.state;
      const slice = arrImg.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice.map((pd) => (
        <tr>
          <td>
            <img alt="Thumbnail" src={pd.Img} height="auto" width="100" />
          </td>
          <td>
            <a
              href=""
              style={{ color: "red" }}
              onClick={(e) => {
                e.preventDefault();
                this.showDeleteModal();
                this.setState({ delete: pd.fileName });
              }}
            >
              <BsTrash />
            </a>
          </td>
        </tr>
      ));
      this.setState({
        pageCount: Math.ceil(arrImg.length / this.state.perPage),

        postData,
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { isFetching, lat, lng, errors, showModal, showDeleteModal, File } =
      this.state;
    return (
      <div>
        {isFetching == true && <WaveLoading />}
        {isFetching == false && (
          <section
            className="u-clearfix u-image sectionEditEst"
            id="sec-d585"
            data-image-width={1920}
            data-image-height={1080}
          >
            <div className="u-clearfix u-sheet u-sheet-1">
              <p className="u-text u-text-1">
                <a href="" onClick={() => this.props.history.push("/home")}>
                  หน้าแรก
                </a>{" "}
                /{" "}
                <a
                  href=""
                  onClick={() => this.props.history.push("/myestablishment")}
                >
                  ร้านค้าของฉัน
                </a>{" "}
                / แก้ไขข้อมูลร้านค้า
              </p>
              <h3 className="u-text u-text-default u-text-2">
                ข้อมูลสถานประกอบการ{" "}
              </h3>
              <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                <div className="u-layout">
                  <div className="u-layout-row">
                    <div className="u-container-style u-layout-cell u-size-35 u-layout-cell-1">
                      <div className="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-1">
                        <div className="u-container-style u-expanded-width u-grey-10 u-group u-shape-rectangle u-group-1">
                          <div className="u-container-layout u-container-layout-2">
                            <p className="u-text colortext u-text-default u-text-3">
                              *กรุณาใส่รายละเอียดร้านค้าของท่าน
                            </p>
                            <div className="u-form u-form-1">
                              <form
                                className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                                name="form"
                                style={{ padding: 10 }}
                              >
                                <div className="u-form-group u-form-name u-form-partition-factor-2">
                                  <label
                                    htmlFor="name-2e0a"
                                    className="u-label"
                                  >
                                    ชื่อ
                                  </label>
                                  <input
                                    type="text"
                                    // id="name-2e0a"
                                    name="Name"
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                    value={this.state.Name}
                                    onChange={this.handleChange}
                                  />
                                  {errors.Name.length > 0 && (
                                    <span className="error">{errors.Name}</span>
                                  )}
                                </div>
                                <div className="u-form-group u-form-partition-factor-2 u-form-select u-form-group-2">
                                  <label
                                    htmlFor="select-bceb"
                                    className="u-form-control-hidden u-label"
                                  />
                                  <div className="u-form-select-wrapper">
                                    <select
                                      id="select-bceb"
                                      name="type"
                                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                      value={this.state.type}
                                      onChange={this.handleChange}
                                    >
                                      <option value="11">ร้านอาหาร</option>
                                      <option value="12">คาเฟ่</option>
                                      <option value="13">ฟาสต์ฟู้ด</option>
                                      <option value="14">บุฟเฟ่ต์</option>
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
                                      <path
                                        fill="currentColor"
                                        d="M4 8L0 4h8z"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="u-form-group u-form-message">
                                  <label
                                    htmlFor="message-2e0a"
                                    className="u-label"
                                  >
                                    รายละเอียด
                                  </label>
                                  <textarea
                                    placeholder="Enter your message"
                                    rows={4}
                                    cols={50}
                                    id="message-2e0a"
                                    name="Description"
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                    value={this.state.Description}
                                    onChange={this.handleChange}
                                  />
                                  {errors.Description.length > 0 && (
                                    <span className="error">
                                      {errors.Description}
                                    </span>
                                  )}
                                </div>
                                <div className="u-form-group u-form-group-4">
                                  <label
                                    htmlFor="text-e993"
                                    className="u-label"
                                  >
                                    ที่อยู่
                                  </label>
                                  <input
                                    type="text"
                                    placeholder
                                    id="text-e993"
                                    name="address"
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                    value={this.state.address}
                                    onChange={this.handleChange}
                                  />
                                  {errors.address.length > 0 && (
                                    <span className="error">
                                      {errors.address}
                                    </span>
                                  )}
                                </div>
                                <div className="u-form-group u-form-partition-factor-2 u-form-group-5">
                                  <label
                                    htmlFor="text-edf7"
                                    className="u-label"
                                  >
                                    เขต / อำเภอ
                                  </label>
                                  <input
                                    type="text"
                                    placeholder
                                    id="text-edf7"
                                    name="district"
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                    value={this.state.district}
                                    onChange={this.handleChange}
                                  />
                                  {errors.district.length > 0 && (
                                    <span className="error">
                                      {errors.district}
                                    </span>
                                  )}
                                </div>
                                {/* <div className="u-form-group u-form-partition-factor-2 u-form-group-6">
                              <label htmlFor="text-76f1" className="u-label">
                                เขต / อำเภอ
                              </label>
                              <input
                                type="text"
                                placeholder
                                id="text-76f1"
                                name="text-2"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                              />
                            </div> */}
                                <div className="u-form-group u-form-partition-factor-2 u-form-group-7">
                                  <label
                                    htmlFor="text-f1ac"
                                    className="u-label"
                                  >
                                    จังหวัด
                                  </label>
                                  <input
                                    type="text"
                                    placeholder
                                    id="text-f1ac"
                                    name="province"
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                    value={this.state.province}
                                    onChange={this.handleChange}
                                  />
                                  {errors.province.length > 0 && (
                                    <span className="error">
                                      {errors.province}
                                    </span>
                                  )}
                                </div>
                                <div className="u-form-group u-form-partition-factor-2 u-form-group-8">
                                  <label
                                    htmlFor="text-202b"
                                    className="u-label"
                                  >
                                    รหัสไปรษณีย์
                                  </label>
                                  <input
                                    type="text"
                                    placeholder
                                    id="text-202b"
                                    name="postcode"
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                    value={this.state.postcode}
                                    onChange={this.handleChange}
                                  />
                                  {errors.postcode.length > 0 && (
                                    <span className="error">
                                      {errors.postcode}
                                    </span>
                                  )}
                                </div>
                                <h4 className="u-text u-text-default u-text-4">
                                  แผนที่สถานประกอบการ
                                </h4>
                                <div className="u-shape-1">
                                  <img
                                    src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=15&size=340x140&key=${API_KEY}&markers="https://img.icons8.com/dusk/64/000000/marker.png"|${lat},${lng}`}
                                    className="map-img"
                                  />
                                </div>
                                <div className="u-form u-form-2">
                                  <div className="u-form-group u-form-name u-form-partition-factor-2">
                                    <label
                                      htmlFor="name-20b2"
                                      className="u-label"
                                    >
                                      ละติจูด
                                    </label>
                                    <input
                                      type="number"
                                      id="name-20b2"
                                      name="lat"
                                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                      value={this.state.lat}
                                      onChange={this.handleChange}
                                    />
                                    {errors.lat.length > 0 && (
                                      <span className="error">
                                        {errors.lat}
                                      </span>
                                    )}
                                  </div>
                                  <div className="u-form-email u-form-group u-form-partition-factor-2">
                                    <label
                                      htmlFor="email-20b2"
                                      className="u-label"
                                    >
                                      ลองจิจูด
                                    </label>
                                    <input
                                      type="number"
                                      name="lng"
                                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                      value={this.state.lng}
                                      onChange={this.handleChange}
                                    />
                                    {errors.lng.length > 0 && (
                                      <span className="error">
                                        {errors.lng}
                                      </span>
                                    )}
                                  </div>
                                  <div className="u-align-right u-form-group u-form-submit">
                                    <a
                                      href=""
                                      onClick={this.showModal}
                                      className="u-btn u-btn-submit u-button-style"
                                    >
                                      แก้ไขข้อมูลร้านค้า
                                    </a>
                                    <input
                                      type="submit"
                                      className="u-form-control-hidden"
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="u-container-style u-layout-cell u-size-25 u-layout-cell-2">
                      <div className="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-xl u-container-layout-3">
                        <div className="u-container-style u-expanded-width-lg u-expanded-width-md u-expanded-width-xs u-grey-10 u-group u-shape-rectangle u-group-2">
                          <div className="u-container-layout u-container-layout-4">
                            <h3 className="u-text u-text-default u-text-5">
                              รูปร้านค้า
                            </h3>
                            <div className="u-shape u-shape-rectangle u-white u-shape-2">
                              <div className="table-responsive">
                                <table className="table table-sm">
                                  <tbody>{this.state.postData}</tbody>
                                </table>
                                <ReactPaginate
                                  previousLabel={"prev"}
                                  nextLabel={"next"}
                                  breakLabel={"..."}
                                  breakClassName={"break-me"}
                                  pageCount={this.state.pageCount}
                                  marginPagesDisplayed={2}
                                  pageRangeDisplayed={5}
                                  onPageChange={this.handlePageClick}
                                  containerClassName={
                                    "pagination justify-content-center"
                                  }
                                  disabledClassName={"page-item disabled"}
                                  nextClassName={"page-item"}
                                  nextLinkClassName={"page-link"}
                                  previousClassName={"page-item"}
                                  previousLinkClassName={"page-link"}
                                  activeClassName={"page-item"}
                                  activeLinkClassName={"page-link"}
                                  pageClassName={"page-item"}
                                  pageLinkClassName={"page-link"}
                                />
                              </div>
                            </div>
                            <div
                              className="input-group "
                              style={{
                                marginLeft: "10px",
                                marginTop: "23px",
                                position: "absolute",
                              }}
                            >
                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  accept=".jpg,.jpeg,.png,.gif"
                                  onChange={this.onFileChange}
                                  style={{ width: "200px" }}
                                />
                                <label
                                  className="custom-file-label"
                                  style={{ width: "200px" }}
                                >
                                  {(File != null && File.name)||"เลือกไฟล์"}
                                </label>
                              </div>
                            </div>

                            <a
                              href=""
                              className="u-btn u-button-style u-btn-3"
                              onClick={(e) => this.onFileUpload(e)}
                            >
                              เพิ่มรูปภาพ
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        <Modal
          size="sm"
          show={showDeleteModal}
          aria-labelledby="example-modal-sizes-title-sm"
          centered
        >
          <div style={{ textAlign: "center" }}>
            <div className="simplert__header">
              <div>
                <div className="simplert__icon simplert__icon--warning">
                  <div className="simplert__line simplert__line--warning" />
                  <div className="simplert__line simplert__line--warning-2" />
                </div>
              </div>
              {/* <b className="simplert__title">Title</b> */}
            </div>
            <div className="simplert__body">
              <div>ต้องการลบรูปภาพ</div>
            </div>
            <div className="simplert__footer">
              <button className="simplert__close " onClick={this.deleteImage}>
                ใช่
              </button>
              <button
                className="simplert__close "
                onClick={this.hideDeleteModal}
              >
                ไม่ใช่
              </button>
            </div>
          </div>
        </Modal>
        <Modal
          size="sm"
          show={showModal}
          aria-labelledby="example-modal-sizes-title-sm"
          centered
        >
          <div style={{ textAlign: "center" }}>
            <div className="simplert__header">
              <div>
                <div className="simplert__icon simplert__icon--warning">
                  <div className="simplert__line simplert__line--warning" />
                  <div className="simplert__line simplert__line--warning-2" />
                </div>
              </div>
              {/* <b className="simplert__title">Title</b> */}
            </div>
            <div className="simplert__body">
              <div>ต้องการแก้ไขข้อมูล</div>
            </div>
            <div className="simplert__footer">
              <button className="simplert__close " onClick={this.handleSubmit}>
                ใช่
              </button>
              <button className="simplert__close " onClick={this.hideModal}>
                ไม่ใช่
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Editestabilishment;
