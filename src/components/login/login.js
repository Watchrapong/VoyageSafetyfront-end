import React, { Component } from "react";
import { login, autoLogin } from "./../../actions/login.action";
import { connect } from "react-redux";
import {Container, Row, Col, Form, Button} from "react-bootstrap"
import Image from "react-bootstrap/Image"
import bglogin from "./../../assets/img/bglogin.png"
import "../login/login.css"

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      Email: "",
      Password: "",
    }
  }

  componentDidMount() {
    this.props.autoLogin(this.props.history);
  }

  showError = () => {
    return (
      
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
                  Incorrect Email or Password
      </div>
    )
  }



  render() {
    return (
      <div>
        <section className="u-align-center u-clearfix sectionlogin" id="sec-2614">
  <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
    <div className="u-layout">
      <div className="u-layout-row">
        <div className="u-container-style u-image u-layout-cell u-size-30 u-image-1" data-image-width={896} data-image-height={1080}>
          <div className="u-container-layout u-container-layout-1" />
        </div>
        <div className="u-container-style u-layout-cell u-shape-rectangle u-size-30 u-layout-cell-2">
          <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-container-layout-2">
            <div className="u-container-style u-group u-group-1">
              <div className="u-container-layout">
                <h1 className="u-text u-text-default u-text-1">กรุณาลงชื่อเข้าใช้ </h1>
                <div className="u-border-3 u-border-grey-dark-1 u-expanded-width u-line u-line-horizontal u-line-1" />
                <div className="u-form u-form-1">
                  <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form" style={{padding: 10}}>
                    <div className="u-form-group u-form-group-1">
                      <label htmlFor="text-42dd" className="u-label">อีเมลล์</label>
                      <input type="text" placeholder="Enter you Email" id="text-42dd" name="text" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white" />
                    </div>
                    <div className="u-form-group u-form-group-2">
                      <label htmlFor="text-364e" className="u-label">รหัสผ่าน</label>
                      <input type="text" placeholder="Enter your password" id="text-364e" name="password" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white" required="required" />
                    </div>
                    <div className="u-align-center u-form-group u-form-submit u-form-group-3">
                      <a href="#" className="u-btn u-btn-submit u-button-style">Submit</a>
                      <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                    </div>
                    <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                    <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                    <input type="hidden" defaultValue name="recaptchaResponse" />
                  </form>
                </div>
                <p className="u-text u-text-default u-text-2">ลืมรหัสผ่าน</p>
                <p className="u-text u-text-default u-text-3">ยังไม่ได้สมัครสมาชิคสำหรับเข้าใช้งานเว็บไซต์?</p>
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

const mapStateToProps = ({ loginReducer }) => ({ loginReducer })

const mapDispatchToProps = {
  login,
  autoLogin
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
