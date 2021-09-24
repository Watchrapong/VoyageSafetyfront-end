import React, { Component } from "react";
import "./resetpassword.css"

class Resetpassword extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      NewPassword: "",
      ReNewPassword: "",
    };
  }

  render() {
    return (
      <div>
        <section
          className="u-align-center u-clearfix sectionresetpassword"
          id="sec-8757"
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
                    <div className="u-border-2 u-border-grey-dark-1 u-container-style u-expanded-width u-group u-shape-rectangle u-group-1">
                      <div className="u-container-layout u-container-layout-3">
                        <div className="u-container-style u-expanded-width u-group u-palette-1-base u-shape-rectangle u-group-2">
                          <div className="u-container-layout u-valign-middle u-container-layout-4">
                            <p className="u-text u-text-default u-text-1">
                              <b>รีเซ็ตรหัสผ่าน</b>
                            </p>
                          </div>
                        </div>
                        <p className="u-text u-text-2">
                          กรุณาใส่รหัสผ่านใหม่ของท่านเพื่อรีเซ็ตรหัสผ่าน
                        </p>
                        <p className="u-text u-text-default u-text-3">
                          รหัสผ่านใหม่ *
                        </p>
                        <div className="u-expanded-width-md u-form u-form-1">
                          <form
                            action="#"
                            method="POST"
                            className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                            source="custom"
                            name="form"
                            style={{ padding: 10 }}
                          >
                            <div className="u-form-group u-form-name u-form-group-1">
                              <label
                                htmlFor="name-29fd"
                                className="u-form-control-hidden u-label"
                              />
                              <input
                                type="text"
                                id="name-29fd"
                                name="NewPassword"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                required
                              />
                            </div>
                            <div className="u-form-group u-form-group-2">
                              <label
                                htmlFor="text-a5e9"
                                className="u-form-control-hidden u-label"
                              />
                              <input
                                type="text"
                                placeholder
                                id="text-a5e9"
                                name="ReNewPassword"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                required="required"
                              />
                            </div>
                            <div className="u-align-right u-form-group u-form-submit">
                              <a
                                href="#"
                                className="u-btn u-btn-submit u-button-style"
                                style={{background:"#0F4A69",color:"#ffffff"}}
                              >
                                ยืนยัน
                                <br />
                              </a>
                              <input
                                type="submit"
                                defaultValue="submit"
                                className="u-form-control-hidden"
                              />
                            </div>
                            <input
                              type="hidden"
                              defaultValue
                              name="recaptchaResponse"
                            />
                          </form>
                        </div>
                        <p className="u-text u-text-default u-text-4">
                          ยืนยันรหัสผ่านใหม่ *
                        </p>
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

export default Resetpassword;
