import React, { Component } from "react";
import "./editestabilishment.css";

class Editestabilishment extends Component {

  constructor(props){
    super(props);
    this.state = {
      Name : "",
      type : "",
      description : "",
      address : "",
      district : "",
      province : "",
      postcode : "",
      lat : "",
      lng : "",
      view: null,
    };
  }


  render() {
    return (
      <section
        className="u-clearfix u-image sectionEditEst"
        id="sec-d585"
        data-image-width={1920}
        data-image-height={1080}
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <p className="u-text u-text-1">
            <a href="" onclick={() => this.state({view: null})}>
            ร้านค้าของฉัน
            </a>{" "}
            / แก้ไขข้อมูลร้านค้า
          </p>
          <h3 className="u-text u-text-default u-text-2">
            ข้อมูลสถานประกอบการ{" "}
          </h3>
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-size-35 u-layout-cell-1">
                  <div className="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-1">
                    <div className="u-container-style u-expanded-width u-grey-10 u-group u-shape-rectangle u-group-1">
                      <div className="u-container-layout u-container-layout-2">
                        <p className="u-text colortext u-text-default u-text-3">
                          *กรุณาใส่รายละเอียดร้านค้าของท่าน
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
                            <div className="u-form-group u-form-name u-form-partition-factor-2">
                              <label htmlFor="name-2e0a" className="u-label">
                                ชื่อ
                              </label>
                              <input
                                type="text"
                                id="name-2e0a"
                                name="Name"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                required
                              />
                            </div>
                            <div className="u-form-group u-form-partition-factor-2 u-form-select u-form-group-2">
                              <label
                                htmlFor="select-bceb"
                                className="u-form-control-hidden u-label"
                              />
                              <div className="u-form-select-wrapper">
                                <select
                                  id="select-bceb"
                                  name="type"
                                  className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                >
                                  <option value="Item 1">Item 1</option>
                                  <option value="Item 2">Item 2</option>
                                  <option value="Item 3">Item 3</option>
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
                            <div className="u-form-group u-form-message">
                              <label htmlFor="message-2e0a" className="u-label">
                                รายละเอียด
                              </label>
                              <textarea
                                placeholder="Enter your message"
                                rows={4}
                                cols={50}
                                id="message-2e0a"
                                name="description"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                required
                                defaultValue={""}
                              />
                            </div>
                            <div className="u-form-group u-form-group-4">
                              <label htmlFor="text-e993" className="u-label">
                                ที่อยู่
                              </label>
                              <input
                                type="text"
                                placeholder
                                id="text-e993"
                                name="address"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                              />
                            </div>
                            <div className="u-form-group u-form-partition-factor-2 u-form-group-5">
                              <label htmlFor="text-edf7" className="u-label">
                                เขต / อำเภอ
                              </label>
                              <input
                                type="text"
                                placeholder
                                id="text-edf7"
                                name="district"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                              />
                            </div>
                            {/* <div className="u-form-group u-form-partition-factor-2 u-form-group-6">
                              <label htmlFor="text-76f1" className="u-label">
                                เขต / อำเภอ
                              </label>
                              <input
                                type="text"
                                placeholder
                                id="text-76f1"
                                name="text-2"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                              />
                            </div> */}
                            <div className="u-form-group u-form-partition-factor-2 u-form-group-7">
                              <label htmlFor="text-f1ac" className="u-label">
                                จังหวัด
                              </label>
                              <input
                                type="text"
                                placeholder
                                id="text-f1ac"
                                name="province"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                              />
                            </div>
                            <div className="u-form-group u-form-partition-factor-2 u-form-group-8">
                              <label htmlFor="text-202b" className="u-label">
                                รหัสไปรษณีย์
                              </label>
                              <input
                                type="text"
                                placeholder
                                id="text-202b"
                                name="postcode"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                              />
                            </div>
                        <h4 className="u-text u-text-default u-text-4">
                          แผนที่สถานประกอบการ
                        </h4>
                        <div className="u-border-2 u-border-grey-dark-1 u-shape u-shape-rectangle u-shape-1" />
                        <div className="u-form u-form-2">
                            <input
                              type="hidden"
                              id="siteId"
                              name="siteId"
                              defaultValue={257034660}
                            />
                            <input
                              type="hidden"
                              id="pageId"
                              name="pageId"
                              defaultValue={34417352}
                            />
                            <div className="u-form-group u-form-name u-form-partition-factor-2">
                              <label htmlFor="name-20b2" className="u-label">
                                ละติจูด
                              </label>
                              <input
                                type="text"
                                id="name-20b2"
                                name="lat"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                required
                              />
                            </div>
                            <div className="u-form-email u-form-group u-form-partition-factor-2">
                              <label htmlFor="email-20b2" className="u-label">
                                ลองจิจูด
                              </label>
                              <input
                                type="email"
                                id="email-20b2"
                                name="lag"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                required
                              />
                            </div>
                            <div className="u-align-right u-form-group u-form-submit">
                              <a
                                href="#"
                                className="u-btn u-btn-submit u-button-style"
                              >
                                แก้ไขข้อมูลร้านค้า
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
                            /></div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-size-25 u-layout-cell-2">
                  <div className="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-xl u-container-layout-3">
                    <div className="u-container-style u-expanded-width-lg u-expanded-width-md u-expanded-width-xs u-grey-10 u-group u-shape-rectangle u-group-2">
                      <div className="u-container-layout u-container-layout-4">
                        <h3 className="u-text u-text-default u-text-5">
                          รูปร้านค้า
                        </h3>
                        <div className="u-shape u-shape-rectangle u-white u-shape-2" />
                        <a
                          href="https://nicepage.com/c/technology-website-templates"
                          className="u-btn u-button-style u-btn-3"
                        >
                          เพิ่มรูปภาพ
                        </a>
                      </div>
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

export default Editestabilishment;
