import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "./../../actions/register.action";
import { validEmail, validPassword, validateForm } from "../../utils/regex.js";
import { Button, Modal } from "react-bootstrap";
import "../register/register.css";
import img1 from "../../assets/img/icons/1.png";
import img2 from "../../assets/img/icons/2g.png";
import img3 from "../../assets/img/icons/3g.png";
import img1c from "../../assets/img/icons/1c.png";
import img3g from "../../assets/img/icons/3g.png";
import img3c from "../../assets/img/icons/3c.png";
import img2c from "../../assets/img/icons/2c.png";
import img2cc from "../../assets/img/icons/2cc.png";
import imgEmail from "../../assets/img/icons/topcoat_email.png";
import { Scrollbars } from "react-custom-scrollbars";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: null,
      LastName: null,
      Email: null,
      CitizenId: null,
      Telno: null,
      Gender: "1",
      Password: null,
      Confirmation_Password: null,
      view: "",
      checkbox: false,
      Error: "",
      errors: {
        FirstName: "",
        LastName: "",
        Email: "",
        CitizenId: "",
        Telno: "",
        Password: "",
        Confirmation_Password: "",
      },
      host: window.location.host,
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  componentDidMount() {
    this.onClickView1();
  }

  handleCheckboxChange = (e) => {
    this.setState({ checkbox: !this.state.checkbox });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "FirstName":
        errors.FirstName =
          value.length < 5 ? "First Name must be 5 characters long!" : "";
        break;
      case "LastName":
        errors.LastName =
          value.length < 5 ? "Last Name must be 5 characters long!" : "";
        break;
      case "Email":
        errors.Email = validEmail.test(value) ? "" : "Email is not valid!";
        break;
      case "CitizenId":
        errors.CitizenId =
          value.length < 13 ? "Citizen id must be 13 characters long!" : "";
        break;
      case "Telno":
        errors.Telno =
          value.length < 10 ? "Phone id must be 10 characters long!" : "";
        break;
      case "Password":
        errors.Password =
          value.length < 8 || !validPassword.test(value)
            ? "Password must be 8 characters long!"
            : "";
        break;
      case "Confirm_Password":
        errors.Confirmation_Password =
          value.length < 8 || !validPassword.test(value)
            ? "Confirmation Password must be 8 characters long!"
            : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (
      //this.props.registerReducer.isError
      validateForm(this.state.errors)
    ) {
      console.info("Valid Form");
      await this.props.register(this.props.history, this.state);
      if (this.props.registerReducer.isError) {
        this.setState({ Error: "ข้อมูลผิดพลาด" });
        this.onClickView2();
      } else {
        this.onClickView3();
      }
    } else {
      console.error("Invalid Form");
      console.log(this.state.errors);
      this.onClickView2();
    }
  };

  showError = () => {
    return (
      <div
        className="alert alert-primary"
        role="alert"
        style={{ marginLeft: 60 }}
      >
        Incorrect Information
      </div>
    );
  };

  onClickView1 = () => {
    this.setState({
      view: (
        <section
          className="u-clearfix u-image register-section-1"
          id="sec-4e73"
          data-image-width={1600}
          data-image-height={809}
        >
          <div className="u-align-left u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-size-30-lg u-size-30-xl u-size-58-md u-size-58-sm u-size-58-xs u-layout-cell-1">
                    <div className="u-container-layout u-valign-top-md u-container-layout-1">
                      <h1 className="u-text u-text-body-alt-color u-text-default-lg u-text-default-md u-text-default-xl u-text-1">
                        สมัครสมาชิก
                      </h1>
                      <div className="u-border-3 u-border-white u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-line u-line-horizontal u-line-1" />
                      <div className="u-expanded-width-xs u-layout-grid u-list u-list-1">
                        <div className="u-repeater u-repeater-1">
                          <div className="u-container-style u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-xl u-container-layout-2">
                              <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-1">
                                <img src={img1} alt />
                              </span>
                            </div>
                          </div>
                          <div className="u-container-style u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-xl u-container-layout-3">
                              <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-2">
                                <img src={img2} alt />
                              </span>
                            </div>
                          </div>
                          <div className="u-container-style u-custom-background u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-xl u-container-layout-4">
                              <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-3">
                                <img src={img3} alt />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Scrollbars
                        style={{
                          width: 500,
                          height: 300,
                          backgroundColor: "white",
                          fontSize: "15px",
                        }}
                      >
                        <h4>1. นโยบายการจัดการข้อมูลส่วนบุคคล (จำเป็น) </h4>
                        <p>
                          ทีมงาน Voyage ทำการจัดเก็บข้อมูลส่วนตัวของผู้ใช้งาน{" "}
                          <br />
                          และส่งมอบข้อมูลส่วนบุคคล
                          ทั้งนี้โดยความยินยอมของผู้ใช้งาน
                          และทางเรารับรองสิทธิของผู้ใช้งาน(สิทธิในการกำหนดข้อมูลส่วนบุคคลด้วยตนเอง)
                          <br />
                          1) ทางเราทำการเข้ารหัสข้อมูลส่วนบุคคลของผู้ใช้งาน
                          จัดเก็บข้อมูลส่วนบุคคลของผู้ใช้งานที่มีความสำคัญ เช่น
                          รหัสผ่าน ฯลฯ โดยใช้การเชื่อมต่อที่ถูกเข้ารหัส
                        </p>
                        2. Voyage ใช้ข้อมูลส่วนบุคคล เพื่อวัตถุประสงค์อะไร
                        Voyage
                        ใช้ข้อมูลส่วนบุคคลตามเพื่อวัตถุประสงค์ดังต่อไปนี้เท่านั้น
                        ทางเราจะทำการสอบถามความยินยอมจากผู้ใช้งานก่อน
                        หากมีการเปลี่ยนแปลงวัตถุประสงค์ในการใช้ข้อมูลส่วนบุคคลก่อนทุกครั้ง
                        1) ใช้ในการระบุตัวตนของผู้ใช้งาน
                        และยืนยันในการสมัครใช้งาน
                        หรือป้องกันการเข้าใช้งานจากสมาชิกที่มีความประสงค์ที่ไม่ดี
                        2)
                        ใช้ในการจัดส่งข้อมูลในการแจ้งข่าวเกี่ยวกับการพัฒนาบริการใหม่,
                        ข้อมูลในการเข้าดูสถานที่, เช็คผู้ติดเชื้อรายวัน ฯลฯ 3)
                        ใช้ในการปรับปรุงการให้บริการ
                        เพื่อเพิ่มประสิทธิภาพในการให้บริการแก่ผู้ใช้งาน
                        โดยวิเคราะห์จากสถิติการเข้าใช้บริการ 4)
                        ใช้ในการแสดงสถานะของผู้ใช้ว่าได้ฉีดวัคซีนมาแล้วหรือไม่
                        ทางเราจะเก็บข้อมูลวัคซีน ดังนี้ จำนวนการฉีด ยี่ห้อวัคซีน
                        วันที่ทำการฉีด และโรงพยาบาลที่ฉีดวัคซีน
                        โดยข้อมูลส่วนนี้ผู้ใช้คนอื่นจะไม่สามารถเข้าถึงข้อมูลส่วนนี้ได้
                        3. Voyage จะใช้ข้อมูลส่วนบุคคลเป็นเวลานานเท่าใด Voyage
                        ใช้ข้อมูลส่วนบุคคลของผู้ใช้งานในระยะเวลาที่จำกัด
                        ตั้งแต่ผู้ใช้งานเริ่มลงทะเบียน และเริ่มใช้บริการ
                        ข้อมูลส่วนบุคคลจะถูกทำลายโดยทันทีเมื่อผู้ใช้งานร้องขอให้ยกเลิกการเป็นสมาชิก
                        หรือเพิกถอนการจัดเก็บข้อมูลส่วนบุคคล
                        และในกรณีที่ได้บรรลุวัตถุประสงค์ของการเก็บรวบรวมข้อมูล
                        หรือระยะเวลาการใช้งาน และการเก็บรักษาสิ้นสุดลง (หมายเหตุ
                        : หลังจากการขอลบข้อมูลการเป็นสมาชิก
                        ทางเราจะถือว่าสัญญาการบริการได้ถูกระงับลง แล้ว
                        ดังนั้นผู้ใช้งานจะไม่สามารถเข้าสู่ระบบบัญชี
                        และใช้บริการที่เกี่ยวข้องได้อีก) คุกกี้ Cookie
                        จะถูกติดตั้งและใช้งาน และผู้ใช้งานสามารถปฏิเสธดังนี้ 1)
                        คุกกี้คืออะไร? คุกกี้คือ
                        ไฟล์ข้อความขนาดเล็กที่ถูกส่งจากเซิร์ฟเวอร์ไปยังเบราว์เซอร์ซึ่งจะถูกจัดเก็บไว้ในคอมพิวเตอร์ของผู้ใช้งาน
                        เพื่อให้บริการเว็บไซต์ 2) ทำไมถึงต้องใช้คุกกี้? Voyage
                        ใช้คุกกี้ เพื่อเก็บการตั้งค่าที่ผู้ใช้งานนิยม ฯลฯ
                        ซึ่งช่วยให้การใช้งานเว็บไซต์มีความรวดเร็วยิ่งขึ้น
                        และเพื่อใช้ปรับปรุงบริการสำหรับผู้ใช้งาน
                        โดยจะทำให้ผู้ใช้งานมีความสะดวกใช้บริการ 3)
                        หากผู้ใช้งานต้องการปฏิเสธการจัดเก็บคุกกี้?
                        ผู้ใช้งานมีสิทธิในการติดตั้งคุกกี้
                        ซึ่งผู้ใช้งานสามารถตั้งค่าคุกกี้ที่เบราว์เซอร์เพื่ออนุญาตคุกกี้ทั้งหมด,ตรวจสอบทุกครั้งที่มีการบันทึกคุกกี้
                        หรือปฏิเสธที่จะบันทึกคุกกี้ทั้งหมด อย่างไรก็ตาม
                        หากผู้ใช้งานปฏิเสธที่จะติดตั้งคุกกี้อาจจะเกิดควมไม่สะดวกขณะใช้งานเว็บไซต์
                        และไม่สามารถใช้บางบริการที่ต้องมีการล็อกอินเข้าระบบ
                        Voyage ปกป้องสิทธิของผู้ใช้งาน 1) ผู้ใช้งานสามารถตรวจสอบ
                        และแก้ไขข้อมูลส่วนบุคคลของตนเองที่ได้ลงทะเบียนไว้ได้ทุกเมื่อ
                        ผู้ใช้งานสามารถตรวจสอบ/เปลี่ยนแปลงข้อมูลส่วนตัวที่
                        “เปลี่ยนแปลงข้อมูลสมาชิก” 2)
                        ผู้ใช้งานสามารถเพิกถอนความยินยอมที่จะใช้ข้อมูลส่วนบุคคล
                        และ ยกเลิกการเป็นสมาชิกได้ตลอดเวลา
                      </Scrollbars>
                      <div className="u-form-checkbox u-form-group u-form-group-1">
                        <input
                          type="checkbox"
                          id="checkbox-d00b"
                          name="checkbox"
                          defaultChecked={this.state.checkbox}
                          onChange={this.handleCheckboxChange}
                        />{" "}
                        <label
                          htmlFor="checkbox-d00b"
                          className="u-label u-text-white"
                        >
                          ยอมรับเงื่อนไขการใช้งาน(จำเป็น)
                        </label>
                      </div>
                      
                      <a
                        href=""
                        className="u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-hover-palette-1-dark-1 u-radius-10 u-text-body-alt-color u-btn-1"
                        onClick={(e) => {
                          if (this.state.checkbox === true) {
                            e.preventDefault();
                            this.onClickView2();
                          } else {
                          }
                        }}
                      >
                        ถัดไป
                      </a>
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
      ),
    });
  };

  onClickView2 = () => {
    const { errors, Error } = this.state;
    this.setState({
      view: (
        <section
          className="u-clearfix u-image register-section-2"
          id="sec-7f3f"
          data-image-width={1600}
          data-image-height={809}
        >
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-size-30-lg u-size-30-xl u-size-59-md u-size-59-sm u-size-59-xs u-layout-cell-1">
                    <div className="u-container-layout u-container-layout-1">
                      <h1 className="u-text u-text-body-alt-color u-text-default u-text-1">
                        สมัครสมาชิก
                      </h1>
                      <div className="u-border-3 u-border-white u-line u-line-horizontal u-line-1" />
                      <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-1">
                        <img src={img1c} />
                      </span>
                      <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-2">
                        <img src={img2c} />
                      </span>
                      <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-3">
                        <img src={img3g} />
                      </span>
                      <div className="u-expanded-width-xs u-form u-form-1">
                        <form
                          action="#"
                          method="POST"
                          className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                          source="custom"
                          name="form"
                          style={{ padding: 10 }}
                        >
                          <div className="u-form-group u-form-name">
                            <label className="u-custom-font u-font-roboto u-label u-text-white u-label-1">
                              อีเมล
                            </label>
                            <input
                              type="email"
                              name="Email"
                              className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-1"
                              required
                              onChange={this.handleChange}
                            />
                            {errors.Email.length > 0 && (
                              <span className="error">{errors.Email}</span>
                            )}
                          </div>
                          <div className="u-form-email u-form-group">
                            <label className="u-custom-font u-font-roboto u-label u-text-white u-label-2">
                              รหัสผ่าน
                            </label>
                            <input
                              type="password"
                              name="Password"
                              className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-2"
                              required
                              onChange={this.handleChange}
                            />
                            {errors.Password.length > 0 && (
                              <span className="error">{errors.Password}</span>
                            )}
                          </div>
                          <div className="u-form-group u-form-group-3">
                            <label className="u-custom-font u-font-roboto u-label u-text-white u-label-3">
                              ยืนยันรหัสผ่าน
                            </label>
                            <input
                              type="password"
                              name="Confirmation_Password"
                              className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-3"
                              required
                              onChange={this.handleChange}
                            />
                            {errors.Confirmation_Password.length > 0 && (
                              <span className="error">
                                {errors.Confirmation_Password}
                              </span>
                            )}
                          </div>
                          <div className="u-form-group u-form-select u-form-group-4">
                            <label className="u-custom-font u-font-roboto u-label u-text-white u-label-4">
                              เพศ
                            </label>
                            <div className="u-form-select-wrapper">
                              <select
                                name="Gender"
                                className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-4"
                                required
                                onChange={(e) =>
                                  this.setState({ Gender: e.target.value })
                                }
                              >
                                <option value="1">ชาย</option>
                                <option value="2">หญิง</option>
                              </select>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={12}
                                version={1}
                                className="u-caret"
                              >
                                <path fill="currentColor" d="M4 8L0 4h8z" />
                              </svg>
                            </div>
                          </div>
                          <div className="u-form-group u-form-group-5">
                            <label className="u-custom-font u-font-roboto u-label u-text-white u-label-5">
                              ชื่อ
                            </label>
                            <input
                              type="text"
                              name="FirstName"
                              className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-5"
                              required
                              onChange={this.handleChange}
                            />
                            {errors.FirstName.length > 0 && (
                              <span className="error">{errors.FirstName}</span>
                            )}
                          </div>
                          <div className="u-form-group u-form-group-6">
                            <label className="u-custom-font u-font-roboto u-label u-text-white u-label-6">
                              นามสกุล
                            </label>
                            <input
                              type="text"
                              name="LastName"
                              className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-6"
                              required
                              onChange={this.handleChange}
                            />
                            {errors.LastName.length > 0 && (
                              <span className="error">{errors.LastName}</span>
                            )}
                          </div>
                          <div className="u-form-group u-form-name u-form-group-7">
                            <label className="u-custom-font u-font-roboto u-label u-text-white u-label-7">
                              รหัสบัตรประชาชน
                            </label>
                            <input
                              type="text"
                              name="CitizenId"
                              className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-7"
                              required
                              minLength="13"
                              maxLength="13"
                              onChange={this.handleChange}
                            />
                            {errors.CitizenId.length > 0 && (
                              <span className="error">{errors.CitizenId}</span>
                            )}
                          </div>
                          <div className="u-form-group u-form-phone u-form-group-8">
                            <label
                              htmlFor="phone-3f10"
                              className="u-custom-font u-font-roboto u-label u-text-white u-label-8"
                            >
                              เบอร์ติดต่อ
                            </label>
                            <input
                              type="tel"
                              name="Telno"
                              className="u-border-1 u-border-grey-30 u-custom-font u-font-roboto u-input u-input-rectangle u-radius-10 u-white u-input-8"
                              required
                              placeholder="0XX-XXX-XXXX"
                              minLength="10"
                              maxLength="10"
                              onChange={this.handleChange}
                            />
                            {errors.Telno.length > 0 && (
                              <span className="error">{errors.Telno}</span>
                            )}
                            {Error.length > 0 && (
                              <span className="error">{Error}</span>
                            )}
                          </div>
                          <div className="u-align-right u-form-group u-form-submit">
                            <a
                              href=""
                              className="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-custom-color-1 u-radius-10 u-btn-1"
                              onClick={this.handleSubmit}
                            >
                              ถัดไป
                              <br />
                              <input
                                type="submit"
                                defaultValue="submit"
                                className="u-form-control-hidden"
                              />
                            </a>
                          </div>
                        </form>
                      </div>
                      <a
                        href=""
                        className="u-btn u-btn-round u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-radius-10 u-btn-2"
                        onClick={(e) => {
                          e.preventDefault();
                          this.onClickView1();
                        }}
                      >
                        ยกเลิก
                      </a>
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
      ),
    });
  };

  onClickView3 = () => {
    this.setState({
      view: (
        <section
          className="u-clearfix u-image register-section-3"
          id="sec-4e73"
          data-image-width={1600}
          data-image-height={809}
        >
          <div className="u-align-left u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-size-30-lg u-size-30-xl u-size-58-md u-size-58-sm u-size-58-xs u-layout-cell-1">
                    <div className="u-container-layout u-valign-bottom-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-valign-top-xs u-container-layout-1">
                      <h1 className="u-text u-text-body-alt-color u-text-default-lg u-text-default-md u-text-default-xl u-text-1">
                        สมัครสมาชิก
                      </h1>
                      <div className="u-border-3 u-border-white u-expanded-width-xs u-line u-line-horizontal u-line-1" />
                      <div className="u-expanded-width-xs u-layout-grid u-list u-list-1">
                        <div className="u-repeater u-repeater-1">
                          <div className="u-container-style u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-xl u-container-layout-2">
                              <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-1">
                                <img src={img1c} />
                              </span>
                            </div>
                          </div>
                          <div className="u-container-style u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-xl u-container-layout-3">
                              <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-2">
                                <img src={img2cc} />
                              </span>
                            </div>
                          </div>
                          <div className="u-container-style u-custom-background u-list-item u-repeater-item">
                            <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-xl u-container-layout-4">
                              <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-3">
                                <img src={img3c} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="u-text u-text-body-alt-color u-text-default u-text-2">
                        โปรดยินยันอีเมลล์ของคุณเพื่อเข้าใช้งาน{" "}
                      </p>
                      <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-4">
                        <img src={imgEmail} />
                      </span>
                      <p className="u-text u-text-body-alt-color u-text-default u-text-3">
                        อีเมลล์ของคุณคือ
                      </p>
                      <p className="u-text u-text-body-alt-color u-text-default u-text-4">
                        {this.state.Email}
                      </p>
                      <a
                        href=""
                        className="u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-hover-palette-1-dark-1 u-radius-10 u-text-body-alt-color u-btn-1"
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.history.push("/login");
                        }}
                      >
                        ลงชื่อเข้าใช้
                      </a>
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
      ),
    });
  };

  render() {
    return this.state.view;
  }
}

const mapStateToProps = ({ registerReducer }) => ({ registerReducer });

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
