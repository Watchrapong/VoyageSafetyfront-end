import React, { Component } from "react";
import "../forgetpassword/forgetpassword.css";
import { validEmail, validateForm } from "../../utils/regex.js";
import { httpClient } from "../../utils/HttpClient";
import { OK, server } from "../../constants";

class Forgetpassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      errors: { Email: "" },
      Error: "",
      view: 1,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "Email":
        errors.Email = validEmail.test(value) ? "" : "Email is not valid!";
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
      let data = { Email: this.state.Email, host: window.location.host };
      httpClient
        .post(server.RESET_PASSWORD, data)
        .then((response) => {
          if (response.data.result === OK) {
            this.setState({ view: 2 })
            console.log(response.data);
          } else {
            console.log("null");
            console.log(response.data);
            this.setState({ Error: "ข้อมูลผิดพลาด" });
          }
        })
        .catch((error) => {
          console.error(error);
          this.setState({ Error: "ข้อมูลผิดพลาด" });
        });
    } else {
      console.error("Invalid Form");
      console.log(this.state.errors);
    }
  };

  inputEmail = () => {
    const { errors, Error } = this.state;
    return (
      <div>
        <p className="u-text u-text-default u-text-2">
          กรุณากรอกอีเมลล์ของท่านเพื่อที่จะรับการรีเซ็ตรหัสผ่านทางอีเมลล์ *
        </p>
        <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-form u-form-1">
          <form
            className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
            name="form"
            style={{ padding: 10 }}
          >
            <div className="u-form-group u-form-name">
              <label
                htmlFor="name-29fd"
                className="u-form-control-hidden u-label"
              />
              <input
                type="email"
                placeholder="อีเมลล์"
                name="Email"
                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                onChange={this.handleChange}
              />
              {errors.Email.length > 0 && (
                <span className="error">{errors.Email}</span>
              )}
              {Error.length > 0 && <span className="error">{Error}</span>}
            </div>
            <div
              className="u-align-right u-form-group u-form-submit"
              style={{ color: "#0F4A69" }}
            >
              <a
                href="#"
                onClick={this.handleSubmit}
                className="u-btn u-btn-submit u-button-style"
                style={{
                  background: "#0F4A69",
                  color: "#ffffff",
                }}
              >
                ยืนยัน
                <br />
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  };

  submitEmail = () => {
    const { Email } = this.state;
    return (
      <div>
        <p className="u-text u-text-default u-text-2">
          ลิงก์การยืนยันบัญชีถูกส่งไปยัง {Email}
          <p>
            คุณสามารถปิดหน้านี้และดำเนินการแก้ไขรหัสผ่านของคุณต่อได้จากลิงก์นี้
          </p>
        </p>
      </div>
    );
  };

  render() {
    const { view } = this.state;
    return (
      <div>
        <div>
          <section
            className="u-align-center u-clearfix sectionforgetpassword"
            id="sec-7c81"
          >
            <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
              <div className="u-layout" style={{}}>
                <div className="u-layout-row" style={{}}>
                  <div
                    className="u-align-left u-container-style u-image u-layout-cell u-left-cell u-size-30 u-size-xs-60 u-image-1"
                    src
                    data-image-width={1280}
                    data-image-height={853}
                  >
                    <div
                      className="u-container-layout u-valign-middle u-container-layout-1"
                      src
                    />
                  </div>
                  <div className="u-align-left u-container-style u-custom-color-4 u-layout-cell u-right-cell u-size-30 u-size-xs-60 u-layout-cell-2">
                    <div className="u-container-layout u-container-layout-2">
                      <div className="u-border-2 u-border-grey-dark-1 u-container-style u-expanded-width-lg u-expanded-width-md u-expanded-width-xl u-group u-shape-rectangle u-group-1">
                        <div className="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-3">
                          <div className="u-container-style u-expanded-width u-group u-palette-1-base u-shape-rectangle u-group-2">
                            <div className="u-container-layout u-valign-middle u-container-layout-4">
                              <p className="u-text u-text-default u-text-1">
                                <b>ลืมรหัสผ่าน</b>
                              </p>
                            </div>
                          </div>
                          {view === 1 && this.inputEmail()}
                          {view === 2 && this.submitEmail()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Forgetpassword;
