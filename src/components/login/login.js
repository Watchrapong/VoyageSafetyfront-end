import React, { Component } from "react";
import { login, autoLogin } from "./../../actions/login.action";
import { connect } from "react-redux";
import "../login/login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
    };
  }

  componentDidMount() {
    this.props.autoLogin(this.props.history);
  }

  showError = () => {
    return (
      <div
        className="alert alert-primary d-flex align-items-center"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16"
          role="img"
          aria-label="Warning:"
        >
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div>Incorrect Email or Password.</div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <section
          className="u-align-center u-clearfix sectionlogin"
          id="sec-2614"
        >
          <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div
                  className="u-container-style u-image u-layout-cell u-size-30 u-image-1"
                  data-image-width={896}
                  data-image-height={1080}
                >
                  <div className="u-container-layout u-container-layout-1" />
                </div>
                <div className="u-container-style u-layout-cell u-shape-rectangle u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-container-layout-2">
                    <div className="u-container-style u-group u-group-1">
                      <div className="u-container-layout">
                        <h1 className="u-text u-text-default u-text-1">
                          กรุณาลงชื่อเข้าใช้{" "}
                        </h1>
                        <div className="u-border-3 u-border-grey-dark-1 u-expanded-width u-line u-line-horizontal u-line-1" />
                        <div className="u-form u-form-1">
                          <form
                            className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                            source="custom"
                            name="form"
                            style={{ padding: 10 }}
                          >
                            <div className="u-form-group u-form-group-1">
                              <label htmlFor="text-42dd" className="u-label">
                                อีเมล์
                              </label>
                              <input
                                type="text"
                                placeholder="Enter you Email"
                                id="text-42dd"
                                name="Email"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white"
                                onChange={(e) =>
                                  this.setState({ Email: e.target.value })
                                }
                              />
                            </div>
                            <div className="u-form-group u-form-group-2">
                              <label htmlFor="text-364e" className="u-label">
                                รหัสผ่าน
                              </label>
                              <input
                                type="password"
                                placeholder="Enter your password"
                                id="text-364e"
                                name="password"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white"
                                required="required"
                                onChange={(e) =>
                                  this.setState({ Password: e.target.value })
                                }
                              />
                            </div>
                            <div style={{ marginLeft: 35 }}>
                              {this.props.loginReducer.isError &&
                                this.showError()}
                            </div>
                            <div className="u-align-center u-form-group u-form-submit u-form-group-3">
                              <a
                                href="#"
                                className="u-btn u-btn-submit u-button-style"
                                onClick={(e) => {
                                  e.preventDefault();
                                  this.props.login(
                                    this.props.history,
                                    this.state
                                  );
                                }}
                              >Submit                              
                              <input
                                type="submit"
                                defaultValue="submit"
                                className="u-form-control-hidden"                
                              /></a>
                            </div>
                          </form>
                        </div>
                        <p className="u-text u-text-default u-text-2">
                          ลืมรหัสผ่าน
                        </p>
                        <a
                          className="u-text u-text-default u-text-3"
                          href=""
                          onClick={() => this.props.history.push("/register")}
                        >
                          ยังไม่ได้สมัครสมาชิกสำหรับเข้าใช้งานเว็บไซต์?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({ loginReducer });

const mapDispatchToProps = {
  login,
  autoLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
