import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "./../../actions/register.action";
import "../register/register2.css"

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      CitizenId: "",
      Telno: "",
      Gender: "1",
      Password: "",
      confirm_password: "",
    };
  }

  showError = ()=>{
    return(
      <div className="alert alert-danger alert-dismissible">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                  <h5>
                    <i className="icon fas fa-ban" /> Error!
                  </h5>
                  Incorrect information
                </div>
    )
  }

  render() {
    return (
        <section className="u-clearfix u-image u-section-1" id="sec-7f3f" data-image-width={1600} data-image-height={809}>
  <div className="u-clearfix u-sheet u-sheet-1">
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div className="u-container-style u-layout-cell u-size-30-lg u-size-30-xl u-size-59-md u-size-59-sm u-size-59-xs u-layout-cell-1">
            <div className="u-container-layout u-container-layout-1">
              <h1 className="u-text u-text-body-alt-color u-text-default u-text-1">สมัครสมาชิค</h1>
              <div className="u-border-3 u-border-white u-line u-line-horizontal u-line-1" /><span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-1"><img src="..//..//assets//img//icons//1c.png" alt /></span><span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-2"><img src="..//..//assets//img//icons//2c.png" alt /></span><span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-3"><img src="..//..//assets//img//icons//3g.png" alt /></span>
              <div className="u-expanded-width-xs u-form u-form-1">
                <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form" style={{padding: 10}}>
                  <div className="u-form-group u-form-name">
                    <label htmlFor="name-a816" className="u-custom-font u-font-roboto u-label u-text-white u-label-1">อีเมล</label>
                    <input type="text" id="name-a816" name="name" className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-1" required />
                  </div>
                  <div className="u-form-email u-form-group">
                    <label htmlFor="email-a816" className="u-custom-font u-font-roboto u-label u-text-white u-label-2">รหัสผ่าน</label>
                    <input type="email" id="email-a816" name="email" className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-2" required />
                  </div>
                  <div className="u-form-group u-form-group-3">
                    <label htmlFor="text-925b" className="u-custom-font u-font-roboto u-label u-text-white u-label-3">ยืนยันรหัสผ่าน</label>
                    <input type="text" placeholder id="text-925b" name="text" className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-3" />
                  </div>
                  <div className="u-form-group u-form-select u-form-group-4">
                    <label htmlFor="select-65ba" className="u-custom-font u-font-roboto u-label u-text-white u-label-4">เพศ</label>
                    <div className="u-form-select-wrapper">
                      <select id="select-65ba" name="select" className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-4">
                        <option value="ชาย">ชาย</option>
                        <option value="หญิง">หญิง</option>
                      </select>
                      <svg xmlns="http://www.w3.org/2000/svg" width={14} height={12} version={1} className="u-caret"><path fill="currentColor" d="M4 8L0 4h8z" /></svg>
                    </div>
                  </div>
                  <div className="u-form-group u-form-group-5">
                    <label htmlFor="text-19f3" className="u-custom-font u-font-roboto u-label u-text-white u-label-5">ชื่อ</label>
                    <input type="text" placeholder id="text-19f3" name="text-1" className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-5" />
                  </div>
                  <div className="u-form-group u-form-group-6">
                    <label htmlFor="text-0d9a" className="u-custom-font u-font-roboto u-label u-text-white u-label-6">นามสกุล</label>
                    <input type="text" placeholder id="text-0d9a" name="text-2" className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-6" />
                  </div>
                  <div className="u-form-group u-form-name u-form-group-7">
                    <label htmlFor="name-9265" className="u-custom-font u-font-roboto u-label u-text-white u-label-7">รหัสบัตรประชาชน</label>
                    <input type="text" id="name-9265" name="name-1" className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-7" required />
                  </div>
                  <div className="u-form-group u-form-phone u-form-group-8">
                    <label htmlFor="phone-3f10" className="u-custom-font u-font-roboto u-label u-text-white u-label-8">เบอร์ติดต่อ</label>
                    <input type="tel" pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})" id="phone-3f10" name="phone" className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-8" required placeholder="0XX-XXX-XXXX" />
                  </div>
                  <div className="u-align-right u-form-group u-form-submit">
                    <a href="#" className="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-custom-color-1 u-radius-10 u-btn-1">ถัดไป<br />
                    </a>
                    <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                  </div>
                  <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                  <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                  <input type="hidden" defaultValue name="recaptchaResponse" />
                </form>
              </div>
              <a href="https://nicepage.com/c/art-design-html-templates" className="u-btn u-btn-round u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-radius-10 u-btn-2">ยกเลิก</a>
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

      );
  }
}

const mapStateToProps = ({ registerReducer }) => ({ registerReducer });

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
