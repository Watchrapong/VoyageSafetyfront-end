import React, { Component } from "react";
import { connect } from "react-redux";
import "../resetpass/resetpass.css"

class Resetpass extends Component {
  constructor(prop){
    super(prop);
    this.state = {
      Newpassword : "",
      Againpassword : "",
    };
  }

  render() {
    return (
    <div>
      <section class="u-clearfix sectionrestpass" id="sec-bc83">
      <div class="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-sheet-1">
        <div class="u-clearfix u-expanded-width-lg u-expanded-width-md u-expanded-width-xl u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-container-style u-image u-layout-cell u-size-30 u-image-1" data-image-width="1004" data-image-height="1077">
                <div class="u-container-layout u-container-layout-1"></div>
              </div>
              <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                <div class="u-container-layout u-container-layout-2">
                  <h3 class="u-text u-text-default u-text-1">รีเซ็ตรหัสผ่าน</h3>
                  <div class="u-border-1 u-border-grey-75 u-container-style u-expanded-width-xs u-group u-palette-1-dark-1 u-radius-5 u-shape-round u-group-1">
                    <div class="u-container-layout u-container-layout-3">
                      <p class="u-text u-text-2">กรุณาใส่รหัสผ่านใหม่ของท่านเพื่อทำการรีเซ็ตรหัสผ่าน</p>
                      <div class="u-border-1 u-border-grey-75 u-container-style u-expanded-width u-group u-radius-5 u-shape-round u-white u-group-2">
                        <div class="u-container-layout u-valign-middle-lg u-valign-middle-xl u-container-layout-4">
                          <div class="u-form u-form-1">
                            <form action="#" method="POST" class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form" style="padding: 10px;">
                              <div class="u-form-group u-form-name">
                                <label for="name-35f4" class="u-label">รหัสผ่านใหม่</label>
                                <input type="text" placeholder="Enter your Name" id="name-35f4" name="name" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required=""/>
                              </div>
                              <div class="u-form-group u-form-name u-form-group-2">
                                <label for="name-94cb" class="u-label">โปรดใส่รหัสผ่านใหม่อีกครั้ง</label>
                                <input type="text" placeholder="Enter your Name" id="name-94cb" name="name-1" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required=""/>
                              </div>
                              <div class="u-align-right u-form-group u-form-submit">
                                <a href="#" class="u-border-none u-btn u-btn-submit u-button-style u-palette-1-dark-1 u-btn-1">Submit</a>
                                <input type="submit" value="submit" class="u-form-control-hidden"/>
                              </div>
                              <div class="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                              <div class="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                              <input type="hidden" value="" name="recaptchaResponse"/>
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
        </div>
      </div>
    </section>

    </div>
    );
  }
}

export default Resetpass;
