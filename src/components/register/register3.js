import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "./../../actions/register.action";
import "../register/register3.css"

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
        <section className="u-clearfix u-image u-section-1" id="sec-4e73" data-image-width={1600} data-image-height={809}>
  <div className="u-align-left u-clearfix u-sheet u-sheet-1">
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div className="u-container-style u-layout-cell u-size-30-lg u-size-30-xl u-size-58-md u-size-58-sm u-size-58-xs u-layout-cell-1">
            <div className="u-container-layout u-valign-bottom-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-valign-top-xs u-container-layout-1">
              <h1 className="u-text u-text-body-alt-color u-text-default-lg u-text-default-md u-text-default-xl u-text-1">สมัครสมาชิค</h1>
              <div className="u-border-3 u-border-white u-expanded-width-xs u-line u-line-horizontal u-line-1" />
              <div className="u-expanded-width-xs u-layout-grid u-list u-list-1">
                <div className="u-repeater u-repeater-1">
                  <div className="u-container-style u-list-item u-repeater-item">
                    <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-xl u-container-layout-2"><span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-1"><img src="..//..//assets//img//icons//1c.png" alt /></span>
                    </div>
                  </div>
                  <div className="u-container-style u-list-item u-repeater-item">
                    <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-xl u-container-layout-3"><span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-2"><img src="..//..//assets//img//icons//2cc.png" alt /></span>
                    </div>
                  </div>
                  <div className="u-container-style u-custom-background u-list-item u-repeater-item">
                    <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-xl u-container-layout-4"><span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-3"><img src="..//..//assets//img//icons//3c.png" alt /></span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="u-text u-text-body-alt-color u-text-default u-text-2">โปรดยินยันอีเมลล์ของคุณเพื่อเข้าใช้งาน </p><span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-4"><img src="images/topcoat_email.png" alt /></span>
              <p className="u-text u-text-body-alt-color u-text-default u-text-3">อีเมลล์ของคุณคือ</p>
              <p className="u-text u-text-body-alt-color u-text-default u-text-4">yuippv@gmail.com</p>
              <a href="https://nicepage.com/c/architecture-building-website-templates" className="u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-hover-palette-1-dark-1 u-radius-10 u-text-body-alt-color u-btn-1">ลงชื่อเข้าใช้</a>
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

       
       );
  }
}


const mapStateToProps = ({ registerReducer }) => ({ registerReducer });

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);



