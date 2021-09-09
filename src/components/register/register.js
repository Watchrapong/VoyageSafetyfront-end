import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "./../../actions/register.action";
import "../register/register.css"

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
      <section className="u-clearfix u-image u-section-1" id="sec-8600" data-image-width={1919} data-image-height={970}>
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-container-style u-layout-cell u-size-60 u-layout-cell-1">
                <div className="u-container-layout u-container-layout-1">
                  <h1 className="u-text u-text-body-alt-color u-text-default u-text-1">สมัครสมาชิค</h1>
                  <div className="u-border-3 u-border-white u-line u-line-horizontal u-line-1" /><span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-1"><img src="../../assets/img/icons/1.png" alt /></span><span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-2"><img src="../../assets/img/icons/2g.png" alt /></span><span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-3"><img src="../../assets/img/icons/3g.png" alt /></span>
                    <div className="u-form u-form-1">
                       <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form" style={{padding: 10}}>
                          <div className="u-form-checkbox u-form-group u-form-group-1">
                           <input type="checkbox" id="checkbox-d00b" name="checkbox" defaultValue="On" />
                            <label htmlFor="checkbox-d00b" className="u-label u-text-white">ยอมรับเงื่อนไขการใช้งาน(จำเป็น)</label>
                          </div>
                          <div className="u-align-center u-form-group u-form-submit">
                            <a href="#" className="u-btn u-btn-round u-btn-submit u-button-style u-radius-10">ถัดไป</a>
                           <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                          </div>
                          <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                          <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                          <input type="hidden" defaultValue name="recaptchaResponse" />
                        </form>
                    </div>
                  </div>
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
