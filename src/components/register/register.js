import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "./../../actions/register.action";
import "../register/register.css";
import img1 from "../../assets/img/icons/1.png";
import img2 from "../../assets/img/icons/2g.png";
import img3 from "../../assets/img/icons/3g.png";
import img1c from "../../assets/img/icons/1c.png";
import img3g from "../../assets/img/icons/3g.png";
import img3c from "../../assets/img/icons/3c.png";
import img2c from "../../assets/img/icons/2c.png";
import img2cc from "../../assets/img/icons/2cc.png";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: null,
      LastName: null,
      Email: null,
      CitizenId: null,
      Telno: null,
      Gender: "1",
      Password: null,
      Confirmation_Password: null,
      view: "",
      checkbox: false,
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  componentDidMount() {
    this.onClickView1();
  }

  handleCheckboxChange = (e) => {
    this.setState({ checkbox: !this.state.checkbox });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.register(this.props.history, this.state);
    if (this.props.registerReducer.isError) {
      this.onClickView2();
    } else {
      this.onClickView3();
    }
  };

  showError = () => {
    return (
      <div className="alert alert-primary" role="alert" style={{ marginLeft: 60 }}>
      Incorrect Information
    </div>
    );
  };

  onClickView1 = () => {
    this.setState({
      view: (
        <section
          className="u-clearfix u-image register-section-1"
          id="sec-8600"
          data-image-width={1919}
          data-image-height={970}
        >
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-size-60 u-layout-cell-1">
                    <div className="u-container-layout u-container-layout-1">
                      <h1 className="u-text u-text-body-alt-color u-text-default u-text-1">
                        สมัครสมาชิก
                      </h1>
                      <div className="u-border-3 u-border-white u-line u-line-horizontal u-line-1" />
                      <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-1">
                        <img src={img1} />
                      </span>
                      <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-2">
                        <img src={img2} />
                      </span>
                      <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-3">
                        <img src={img3} />
                      </span>
                      <div className="u-form u-form-1">
                        <form
                          action="#"
                          method="POST"
                          className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                          source="custom"
                          name="form"
                          style={{ padding: 10 }}
                        >
                          <div className="u-form-checkbox u-form-group u-form-group-1">
                            <input
                              type="checkbox"
                              id="checkbox-d00b"
                              name="checkbox"
                              defaultChecked={this.state.checkbox}
                              onChange={this.handleCheckboxChange}
                            />
                            <label
                              htmlFor="checkbox-d00b"
                              className="u-label u-text-white"
                            >
                              ยอมรับเงื่อนไขการใช้งาน(จำเป็น)
                            </label>
                          </div>
                          <div className="u-align-center u-form-group u-form-submit">
                            <a
                              href="#"
                              className="u-btn u-btn-round u-btn-submit u-button-style u-radius-10"
                              onClick={(e) => {
                                if (this.state.checkbox === true) {
                                  e.preventDefault();
                                  this.onClickView2();
                                } else {
                                }
                              }}
                            >
                              ถัดไป
                            </a>
                            <input
                              type="submit"
                              className="u-form-control-hidden"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    });
  };

  onClickView2 = () => {
    this.setState({
      view: (
        <section
          className="u-clearfix u-image register-section-2"
          id="sec-7f3f"
          data-image-width={1600}
          data-image-height={809}
        >
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-size-30-lg u-size-30-xl u-size-59-md u-size-59-sm u-size-59-xs u-layout-cell-1">
                    <div className="u-container-layout u-container-layout-1">
                      <h1 className="u-text u-text-body-alt-color u-text-default u-text-1">
                        สมัครสมาชิก
                      </h1>
                      <div className="u-border-3 u-border-white u-line u-line-horizontal u-line-1" />
                      <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-1">
                        <img src={img1c} />
                      </span>
                      <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-2">
                        <img src={img2c} />
                      </span>
                      <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-3">
                        <img src={img3g} />
                      </span>
                      <div className="u-expanded-width-xs u-form u-form-1">
                        <form
                          action="#"
                          method="POST"
                          className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                          source="custom"
                          name="form"
                          style={{ padding: 10 }}
                        >
                          <div className="u-form-group u-form-name">
                            <label className="u-custom-font u-font-roboto u-label u-text-white u-label-1">
                              อีเมล
                            </label>
                            <input
                              type="email"
                              name="email"
                              className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-1"
                              required
                              onChange={(e) =>
                                this.setState({ Email: e.target.value })
                              }
                            />
                          </div>
                          <div className="u-form-email u-form-group">
                            <label className="u-custom-font u-font-roboto u-label u-text-white u-label-2">
                              รหัสผ่าน
                            </label>
                            <input
                              type="password"
                              name="pasword"
                              className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-2"
                              required
                              onChange={(e) =>
                                this.setState({ Password: e.target.value })
                              }
                            />
                          </div>
                          <div className="u-form-group u-form-group-3">
                            <label className="u-custom-font u-font-roboto u-label u-text-white u-label-3">
                              ยืนยันรหัสผ่าน
                            </label>
                            <input
                              type="password"
                              name="confirmation_password"
                              className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-3"
                              required
                              onChange={(e) =>
                                this.setState({
                                  Confirmation_Password: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="u-form-group u-form-select u-form-group-4">
                            <label className="u-custom-font u-font-roboto u-label u-text-white u-label-4">
                              เพศ
                            </label>
                            <div className="u-form-select-wrapper">
                              <select
                                name="gender"
                                className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-4"
                                required
                                onChange={(e) =>
                                  this.setState({ Gender: e.target.value })
                                }
                              >
                                <option value="1">ชาย</option>
                                <option value="2">หญิง</option>
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
                          <div className="u-form-group u-form-group-5">
                            <label className="u-custom-font u-font-roboto u-label u-text-white u-label-5">
                              ชื่อ
                            </label>
                            <input
                              type="text"
                              name="firstname"
                              className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-5"
                              required
                              onChange={(e) =>
                                this.setState({ FirstName: e.target.value })
                              }
                            />
                          </div>
                          <div className="u-form-group u-form-group-6">
                            <label className="u-custom-font u-font-roboto u-label u-text-white u-label-6">
                              นามสกุล
                            </label>
                            <input
                              type="text"
                              name="lastname"
                              className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-6"
                              required
                              onChange={(e) =>
                                this.setState({ LastName: e.target.value })
                              }
                            />
                          </div>
                          <div className="u-form-group u-form-name u-form-group-7">
                            <label className="u-custom-font u-font-roboto u-label u-text-white u-label-7">
                              รหัสบัตรประชาชน
                            </label>
                            <input
                              type="text"
                              name="citizenId"
                              className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-7"
                              required
                              onChange={(e) =>
                                this.setState({ CitizenId: e.target.value })
                              }
                            />
                          </div>
                          <div className="u-form-group u-form-phone u-form-group-8">
                            <label
                              htmlFor="phone-3f10"
                              className="u-custom-font u-font-roboto u-label u-text-white u-label-8"
                            >
                              เบอร์ติดต่อ
                            </label>
                            <input
                              type="tel"
                              pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})"
                              id="phone-3f10"
                              name="phone"
                              className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-8"
                              required
                              placeholder="0XX-XXX-XXXX"
                              onChange={(e) =>
                                this.setState({ Telno: e.target.value })
                              }
                            />
                          </div>
                          {this.props.registerReducer.isError &&
                            this.showError()}
                          <div className="u-align-right u-form-group u-form-submit">
                            <a
                              href=""
                              className="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-custom-color-1 u-radius-10 u-btn-1"
                              onClick={this.handleSubmit}
                            >
                              ถัดไป
                              <br />
                            
                            <input
                              type="submit"
                              defaultValue="submit"
                              className="u-form-control-hidden"
                            /></a>
                          </div>
                        </form>
                      </div>
                      <a
                        href=""
                        className="u-btn u-btn-round u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-radius-10 u-btn-2"
                        onClick={(e) => {
                          e.preventDefault();
                          this.onClickView1();
                        }}
                      >
                        ยกเลิก
                      </a>
                    </div>
                  </div>
                  <div className="u-container-style u-layout-cell u-size-1-md u-size-1-sm u-size-1-xs u-size-30-lg u-size-30-xl u-layout-cell-2">
                    <div className="u-container-layout u-container-layout-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    });
  };

  onClickView3 = () => {
    this.setState({
      view: (
        <section
          className="u-clearfix u-image register-section-3"
          id="sec-4e73"
          data-image-width={1600}
          data-image-height={809}
        >
          <div className="u-align-left u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-size-30-lg u-size-30-xl u-size-58-md u-size-58-sm u-size-58-xs u-layout-cell-1">
                    <div className="u-container-layout u-valign-bottom-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-valign-top-xs u-container-layout-1">
                      <h1 className="u-text u-text-body-alt-color u-text-default-lg u-text-default-md u-text-default-xl u-text-1">
                        สมัครสมาชิก
                      </h1>
                      <div className="u-border-3 u-border-white u-expanded-width-xs u-line u-line-horizontal u-line-1" />
                      <div className="u-expanded-width-xs u-layout-grid u-list u-list-1">
                        <div className="u-repeater u-repeater-1">
                          <div className="u-container-style u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-xl u-container-layout-2">
                              <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-1">
                                <img src={img1c} />
                              </span>
                            </div>
                          </div>
                          <div className="u-container-style u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-xl u-container-layout-3">
                              <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-2">
                                <img src={img2cc} />
                              </span>
                            </div>
                          </div>
                          <div className="u-container-style u-custom-background u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-xl u-container-layout-4">
                              <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-3">
                                <img src={img3c} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="u-text u-text-body-alt-color u-text-default u-text-2">
                        โปรดยินยันอีเมลล์ของคุณเพื่อเข้าใช้งาน{" "}
                      </p>
                      <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-4">
                        <img src="images/topcoat_email.png" />
                      </span>
                      <p className="u-text u-text-body-alt-color u-text-default u-text-3">
                        อีเมลล์ของคุณคือ
                      </p>
                      <p className="u-text u-text-body-alt-color u-text-default u-text-4">
                        {this.state.Email}
                      </p>
                      <a
                        href=""
                        className="u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-hover-palette-1-dark-1 u-radius-10 u-text-body-alt-color u-btn-1"
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.history.push("/login");
                        }}
                      >
                        ลงชื่อเข้าใช้
                      </a>
                    </div>
                  </div>
                  <div className="u-container-style u-layout-cell u-size-2-md u-size-2-sm u-size-2-xs u-size-30-lg u-size-30-xl u-layout-cell-2">
                    <div className="u-container-layout u-container-layout-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    });
  };

  render() {
    return this.state.view;
  }
}

const mapStateToProps = ({ registerReducer }) => ({ registerReducer });

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
