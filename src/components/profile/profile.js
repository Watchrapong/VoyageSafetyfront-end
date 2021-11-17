import React, { Component } from "react";
import "./profile.css";
import blankprofile from "../../assets/img/blankprofile.png";
import { OK, server, YES } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import FormData from "form-data";
import { validEmail, validPassword, validateForm } from "../../utils/regex.js";
import { WaveLoading } from "react-loadingg";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserId: "",
      Email: "",
      Gender: "ผู้ชาย",
      FirstName: "",
      LastName: "",
      CitizenId: "",
      Telno: "",
      PathImg: "",
      Password: "",
      Confirmation_Password: "",
      File: null,
      FileName: null,
      fileError: "",
      Error: "",
      errors: {
        Email: "",
        Telno: "",
        Password: "",
        Confirmation_Password: "",
      },
      showProfile: false,
      showResetPass: false,
      isFetching: false,
      showModal: false,
      showConfirmResetModal: false,
      SuccessModal: false,
      ErrorModal: false,
    };
    this.showProfileModal = this.showProfileModal.bind(this);
    this.hideProfileModal = this.hideProfileModal.bind(this);
    this.showResetPassModal = this.showResetPassModal.bind(this);
    this.hideResetPassModal = this.hideResetPassModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showConfirmResetModal = this.showConfirmResetModal.bind(this);
    this.hideConfirmResetModal = this.hideConfirmResetModal.bind(this);
    this.showErrorModal = this.showErrorModal.bind(this);
    this.hideErrorModal = this.hideErrorModal.bind(this);
  }

  showProfileModal = () => {
    this.setState({ showProfile: true });
  };

  hideProfileModal = (e) => {
    this.setState({ showProfile: false });
    window.location.reload();
  };

  showResetPassModal = () => {
    this.setState({ showResetPass: true });
  };

  hideResetPassModal = () => {
    this.setState({ showResetPass: false });
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
    window.location.reload();
  };

  showConfirmResetModal = () => {
    this.setState({ showConfirmResetModal: true });
  };

  hideConfirmResetModal = () => {
    this.setState({ showConfirmResetModal: false });
  };

  showSuccessModal = () => {
    this.setState({ SuccessModal: true });
  };

  hideSuccessModal = () => {
    this.setState({ SuccessModal: false });
    window.location.reload();
  };

  showErrorModal = () => {
    this.setState({ ErrorModal: true });
  };

  hideErrorModal = () => {
    this.setState({ ErrorModal: false });
  };

  componentDidMount() {
    try {
      this.setState({ isFetching: true });
      if (localStorage.getItem(server.LOGIN_PASSED) == YES) {
        let token = localStorage.getItem("Token");
        httpClient
          .get(server.LOGIN_USER, {
            headers: { Authorization: `Authorization ${token}` },
          })
          .then((result) => {
            const data = result.data;
            const gender = data.result.Gender;
            if (gender === 2) {
              this.setState({ Gender: "ผู้หญิง" });
            }
            this.setState({
              UserId: data.result.UserId,
              Email: data.result.Email,
              FirstName: data.result.FirstName,
              LastName: data.result.LastName,
              CitizenId: data.result.CitizenId,
              Telno: data.result.Telno,
              PathImg: data.result.pathImg,
              isFetching: false,
            });
          });
      } else {
      }
    } catch (e) {}
  }

  handleChangePassword = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "Password":
        errors.Password =
          value.length < 8 || !validPassword.test(value)
            ? "Password must be 8 characters long!"
            : "";
        break;
      case "Confirm_Password":
        errors.Confirmation_Password =
          value.length < 8 || !validPassword.test(value)
            ? "Confirmation Password must be 8 characters long!"
            : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "Email":
        errors.Email = validEmail.test(value) ? "" : "Email is not valid!";
        break;
      case "Telno":
        errors.Telno =
          value.length < 10 ? "Phone id must be 10 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  onFileChange = (e) => {
    const file = e.target.files[0];
    this.setState({ File: file, FileName: file.name });
  };

  onFileUpload = () => {
    const file = this.state.File;
    if (
      !file ||
      !file.name.match(/\.(jpg|jpeg|png|gif)$/) ||
      file.size > 5 * 1024 * 1024
    ) {
      this.setState({ fileError: "โปรดเลือกไฟล์รูปใหม่" });
    } else {
      var formData = new FormData();
      formData.append("image", this.state.File);
      formData.append("name", this.state.UserId);
      console.log(this.state.File);
      httpClient.put(server.UPLOAD, formData);
      setTimeout(() => window.location.reload(), 4000);
    }
  };

  handleCheckProfile = (e) => {
    e.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
      console.log(this.state.errors);
      this.showModal();
    } else {
      console.log(this.state.errors);
      console.info("Invalid Form");
    }
  };

  handleProfileSubmit = () => {
    var data = new FormData();
    data.append("UserId", this.state.UserId);
    data.append("Email", this.state.Email);
    data.append("Telno", this.state.Telno);
    httpClient
      .put(server.EDIT_USER, data)
      .then((response) => {
        const data = response.data;
        if (data.result == OK) {
          console.log("ok");
          this.showSuccessModal();
        } else {
          this.showErrorModal();
        }
      })
      .catch((error) => {
        console.error(error);
      });

    // this.hideProfileModal();
    //window.location.reload();
  };

  handleCheckResetPassword = (e) => {
    e.preventDefault();
    console.log(this.state.Password.length);
    if (this.state.Password.length > 8) {
      if (this.state.Confirmation_Password === this.state.Password) {
        if (validateForm(this.state.errors)) {
          console.info("Valid Form");
          this.showConfirmResetModal();
        } else {
          console.info("Invalid Form");
          this.setState({ Error: "ไม่สามารถเปลี่ยนได้" });
        }
      } else {
        console.info("Invalid Form Pass");
        this.setState({ Error: "รหัสผ่านไม่ตรง" });
      }
    } else {
      console.info("Invalid");
      this.setState({ Error: "โปรดกรอกรหัสผ่าน" });
    }
  };

  handleResetPassSubmit = () => {
    var data = new FormData();
    data.append("UserId", this.state.UserId);
    data.append("Email", this.state.Email);
    data.append("Password", this.state.Password);
    httpClient
      .put(server.RESET_PASSWORD, data)
      .then((response) => {
        if (response.data.result == OK) {
          this.showSuccessModal();
        } else {
          this.showErrorModal();
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // this.hideResetPassModal();
  };

  render() {
    const {
      errors,
      Error,
      fileError,
      isFetching,
      showModal,
      showConfirmResetModal,
      SuccessModal,
      ErrorModal,
    } = this.state;
    return (
      (isFetching !== false && <WaveLoading />) || (
        <section
          className="skrollable u-clearfix u-image u-parallax profile-section skrollable-between"
          id="sec-6e38"
          data-image-width={1920}
          data-image-height={1080}
          data-bottom-top="background-position: 50% 10vh;"
          data-top-bottom="background-position: 50% -10vh;"
          style={{
            backgroundAttachment: "fixed",
            backgroundPosition: "50% -0.0753498vh",
          }}
        >
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-container-style u-custom-color-7 u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-group u-radius-15 u-shape-round u-group-1">
              <div
                className="u-container-layout u-container-layout-1"
                style={{ backgroundColor: "#f6f6f6" }}
              >
                <h3 className="u-text u-text-default u-text-1">
                  ประวัติส่วนตัว
                </h3>
                <img
                  src={this.state.PathImg || blankprofile}
                  className="u-blog-control u-image u-image-default u-image-1"
                />
                <p className="u-text u-text-default u-text-2">
                  อีเมลล์ :&nbsp;
                </p>
                <p className="u-text u-text-default u-text-3">เพศ :&nbsp;</p>
                <p className="u-text u-text-default u-text-4">ชื่อ :</p>
                <p className="u-text u-text-default u-text-5">นามสกุล:&nbsp;</p>
                <div className="u-border-1 u-border-grey-75 u-radius-10 u-shape u-shape-round u-shape-1">
                  <span style={{ marginLeft: 5 }}>{this.state.Email}</span>
                </div>
                <div className="u-border-1 u-border-grey-75 u-radius-10 u-shape u-shape-round u-shape-2">
                  <span style={{ marginLeft: 5 }}>{this.state.Gender}</span>
                </div>
                <div className="u-border-1 u-border-grey-75 u-radius-10 u-shape u-shape-round u-shape-3">
                  <span style={{ marginLeft: 5 }}>{this.state.FirstName}</span>
                </div>
                <div className="u-border-1 u-border-grey-75 u-radius-10 u-shape u-shape-round u-shape-4">
                  <span style={{ marginLeft: 5 }}>{this.state.LastName}</span>
                </div>
                <p className="u-text u-text-default u-text-6">
                  รหัสบัตรประชาชน:&nbsp;
                </p>
                <div className="u-border-1 u-border-grey-75 u-radius-10 u-shape u-shape-round u-shape-5">
                  <span style={{ marginLeft: 5 }}>{this.state.CitizenId}</span>
                </div>
                <p className="u-text u-text-default u-text-7">
                  เบอร์โทรศัพท์ :&nbsp;
                </p>
                <div className="u-border-1 u-border-grey-75 u-radius-10 u-shape u-shape-round u-shape-6">
                  <span style={{ marginLeft: 5 }}>{this.state.Telno}</span>
                </div>
                <button
                  className="u-btn u-btn-round u-button-style u-radius-10 u-btn-1"
                  onClick={this.showProfileModal}
                >
                  แก้ไขข้อมูลส่วนตัว
                </button>
                <button
                  className="u-btn u-btn-round u-button-style u-radius-10 u-btn-2"
                  onClick={this.showResetPassModal}
                >
                  แก้ไขรหัสผ่าน
                </button>
                <Modal
                  size="lg"
                  show={this.state.showProfile}
                  onHide={this.hideProfileModal}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>แก้ไขข้อมูลส่วนตัว</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>
                      <img
                        className="d-block mx-auto mb-4"
                        src={this.state.PathImg || blankprofile}
                        style={{ width: "220px", height: "100%" }}
                      />

                      {/* <div className="input-group mb-3">
                      <input
                        type="file"
                        accept=".jpg,.jpe,.png,.gif"
                        className="form-control"
                        onChange={this.onFileChange}
                      />
                      <button
                        onClick={this.onFileUpload}
                        className="input-group-text"
                      >
                        Upload
                      </button>
                    </div> */}
                      <div className="input-group mb-3">
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            accept=".jpg,.jpe,.png,.gif"
                            onChange={this.onFileChange}
                          />
                          <label className="custom-file-label">เลือกไฟล์</label>
                        </div>
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary"
                            onClick={this.onFileUpload}
                          >
                            อัพโหลด
                          </button>
                        </div>
                      </div>

                      {fileError.length > 0 && (
                        <span className="error">{fileError}</span>
                      )}
                      <div className="row g-5">
                        <div className="col-md-12 col-lg-12">
                          <h4 className="mb-3">ประวัติส่วนตัว</h4>
                          <form>
                            <div className="row g-3">
                              <div className="col-sm-6">
                                <label
                                  htmlFor="firstName"
                                  className="form-label"
                                >
                                  ชื่อ
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={this.state.FirstName}
                                  disabled
                                />
                              </div>
                              <div className="col-sm-6">
                                <label
                                  htmlFor="lastName"
                                  className="form-label"
                                >
                                  นามสกุล
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={this.state.LastName}
                                  disabled
                                />
                              </div>
                              <div className="col-12">
                                <label htmlFor="address" className="form-label">
                                  รหัสบัตรประชาชน
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="Telno"
                                  defaultValue={this.state.CitizenId}
                                  disabled
                                />
                              </div>
                              <div className="col-12">
                                <label htmlFor="email" className="form-label">
                                  อีเมลล์{" "}
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  name="Email"
                                  value={this.state.Email}
                                  onChange={this.handleChange}
                                />
                                {errors.Email.length > 0 && (
                                  <span className="error">{errors.Email}</span>
                                )}
                              </div>
                              <div className="col-12">
                                <label htmlFor="address" className="form-label">
                                  เบอร์โทรศัพท์
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="Telno"
                                  minLength="10"
                                  maxLength="10"
                                  value={this.state.Telno}
                                  onChange={this.handleChange}
                                />
                                {errors.Telno.length > 0 && (
                                  <span className="error">{errors.Telno}</span>
                                )}
                              </div>
                            </div>
                            <hr className="my-4" />
                          </form>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.hideProfileModal}>
                      ปิด
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "#478ac9",
                        borderColor: "#478ac9",
                      }}
                      onClick={this.handleCheckProfile}
                    >
                      แก้ไขข้อมูล
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Modal
                  show={this.state.showResetPass}
                  onHide={this.hideResetPassModal}
                  animation={true}
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>แก้ไขรหัสผ่าน</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form>
                      <div className="row g-3">
                        <div className="col-12">
                          <label htmlFor="email" className="form-label">
                            รหัสผ่านใหม่{" "}
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="Password"
                            onChange={this.handleChangePassword}
                          />
                          {errors.Password.length > 0 && (
                            <span className="error">{errors.Password}</span>
                          )}
                        </div>
                        <div className="col-12">
                          <label htmlFor="address" className="form-label">
                            ยืนยันรหัสผ่านใหม่
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="Confirmation_Password"
                            onChange={this.handleChangePassword}
                          />
                          {errors.Confirmation_Password.length > 0 && (
                            <span className="error">
                              {errors.Confirmation_Password}
                            </span>
                          )}
                          {Error.length > 0 && (
                            <span className="error">{Error}</span>
                          )}
                        </div>
                      </div>
                      <hr className="my-4" />
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={this.hideResetPassModal}
                    >
                      ปิก
                    </Button>
                    <Button
                      variant="primary"
                      onClick={this.handleCheckResetPassword}
                    >
                      เปลี่ยนรหัสผ่าน
                    </Button>
                  </Modal.Footer>
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
                      <button
                        className="simplert__close "
                        onClick={this.handleProfileSubmit}
                      >
                        ใช่
                      </button>
                      <button
                        className="simplert__close "
                        onClick={this.hideModal}
                      >
                        ไม่ใช่
                      </button>
                    </div>
                  </div>
                </Modal>
                <Modal
                  size="sm"
                  show={showConfirmResetModal}
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
                      <div>ต้องการแก้ไขรหัสผ่าน</div>
                    </div>
                    <div className="simplert__footer">
                      <button
                        className="simplert__close "
                        onClick={this.handleResetPassSubmit}
                      >
                        ใช่
                      </button>
                      <button
                        className="simplert__close "
                        onClick={this.hideConfirmResetModal}
                      >
                        ไม่ใช่
                      </button>
                    </div>
                  </div>
                </Modal>
                <Modal
                  size="sm"
                  show={SuccessModal}
                  aria-labelledby="example-modal-sizes-title-sm"
                  centered
                >
                  <div style={{ textAlign: "center" }}>
                    <div className="simplert__header">
                      <div>
                        <div className="simplert__icon simplert__icon--success">
                          <div className="simplert__line simplert__line--success" />
                          <div className="simplert__line simplert__line--success-2" />
                        </div>
                      </div>
                      <b className="simplert__title">แก้ไขสำเร็จ</b>
                    </div>
                    {/* <div className="simplert__body">
              <div>
                ข้อมูลวัคซีนของท่านได้รับการอัพเดท
              </div>
            </div> */}
                    <div className="simplert__footer">
                      <button
                        className="simplert__close "
                        onClick={() => this.hideSuccessModal()}
                      >
                        ปิด
                      </button>
                    </div>
                  </div>
                </Modal>
                <Modal
                  size="sm"
                  show={ErrorModal}
                  aria-labelledby="example-modal-sizes-title-sm"
                  centered
                >
                  <div style={{ textAlign: "center" }}>
                    <div className="simplert__header">
                      <div>
                        <div className="simplert__icon simplert__icon--error">
                          <div className="simplert__line simplert__line--error" />
                          <div className="simplert__line simplert__line--error-2" />
                        </div>
                      </div>
                      <b className="simplert__title">แก้ไขไม่สำเร็จ</b>
                    </div>

                    {/* <div className="simplert__body">
              <div>
                ข้อมูลวัคซีนของท่านได้รับการอัพเดท
              </div>
            </div> */}
                    <div className="simplert__footer">
                      <button
                        className="simplert__close "
                        onClick={() => this.hideErrorModal()}
                      >
                        ปิด
                      </button>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </section>
      )
    );
  }
}

export default Profile;
