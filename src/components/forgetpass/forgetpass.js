import React, { Component } from "react";
import { connect } from "react-redux";
import "../forgetpass/forgetpass.css"

class Forgetpass extends Component {
  constructor(props){
    super(props);
    this.state ={
      Email: " ",
    } ;
  }
  render() {
    return(
    <div>
      <section className="u-clearfix sectionforgetpass" id="sec-97b3">
        <div className="u-align-left u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-sheet-1">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div
                  className="u-container-style u-image u-layout-cell u-size-30 u-image-1"
                  data-image-width={1004}
                  data-image-height={1077}
                >
                  <div className="u-container-layout u-container-layout-1" />
                </div>
                <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <h3 className="u-text u-text-default u-text-1">
                      ลืมรหัสผ่าน
                    </h3>
                    <div className="u-border-1 u-border-grey-75 u-palette-1-dark-1 u-radius-5 u-shape u-shape-round u-shape-1" />
                    <div className="u-border-1 u-border-grey-dark-1 u-container-style u-group u-radius-5 u-shape-round u-white u-group-1">
                      <div className="u-container-layout u-container-layout-3">
                        <p className="u-text u-text-default-lg u-text-default-xl u-text-2">
                          {" "}
                          กรุณาใส่อีเมลล์ของท่านเพื่อที่จะรับการรีเซ็ตรหัสผ่านทางอีเมล
                        </p>
                        <div className="u-form u-form-1">
                          <form
                            action="#"
                            method="POST"
                            className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                            source="custom"
                            name="form"
                            style={{ padding: 10 }}
                          >
                            <div className="u-form-email u-form-group">
                              <label
                                htmlFor="name-917e"
                                className="u-form-control-hidden u-label"
                              />
                              <input
                                type="email"
                                placeholder="อีเมล"
                                id="name-917e"
                                name="email"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-5 u-white"
                                required="required"
                              />
                            </div>
                            <div className="u-align-right u-form-group u-form-submit">
                              <a
                                href="#"
                                className="u-border-none u-btn u-btn-submit u-button-style u-palette-1-dark-1 u-btn-1"
                              >
                                Submit
                              </a>
                              <input
                                type="submit"
                                defaultValue="submit"
                                className="u-form-control-hidden"
                              />
                            </div>
                            <div className="u-form-send-message u-form-send-success">
                              {" "}
                              Thank you! Your message has been sent.{" "}
                            </div>
                            <div className="u-form-send-error u-form-send-message">
                              {" "}
                              Unable to send your message. Please fix errors
                              then try again.{" "}
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

export default Forgetpass;
