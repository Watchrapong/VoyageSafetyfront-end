import React, { Component } from "react";
import "../forgetpassword/forgetpassword.css"

class Forgetpassword extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
    };
  }

  render() {
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
                          <p className="u-text u-text-default u-text-2">
                            กรุณากรอกอีเมลล์ของท่านเพื่อที่จะรับการรีเซ็ตรหัสผ่านทางอีเมลล์
                            *
                          </p>
                          <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-form u-form-1">
                            <form
                              action="#"
                              method="POST"
                              className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                              source="custom"
                              name="form"
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
                                  htmlFor="name-29fd"
                                  className="u-form-control-hidden u-label"
                                />
                                <input
                                  type="text"
                                  placeholder="อีเมลล์"
                                  id="name-29fd"
                                  name="name"
                                  className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                  required
                                />
                              </div>
                              <div className="u-align-right u-form-group u-form-submit" style={{color:"#0F4A69"}}>
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
                        </div>
                      </div>
                      <a
                        href
                        className="u-border-2 u-border-white u-btn u-btn-rectangle u-button-style u-none u-btn-2"
                      >
                        learn more
                      </a>
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
