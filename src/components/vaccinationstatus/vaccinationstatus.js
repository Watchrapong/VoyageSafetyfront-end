import React, { Component } from "react";
import "../vaccinationstatus/vaccinationstatus.css";

class Vaccinationstatus extends Component {
  render() {
    return (
      <section className="u-clearfix section-vaccination" id="sec-4f2b">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-container-style u-custom-color-3 u-expanded-width-lg u-expanded-width-md u-expanded-width-xl u-expanded-width-xs u-group u-radius-15 u-shape-round u-group-1">
            <div className="u-container-layout u-container-layout-1">
              <p className="u-text u-text-default-lg u-text-default-md u-text-default-sm u-text-default-xl u-text-1" >
                <b>สถานะการฉีดวัคซีน </b>
              </p>
              <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-list u-list-1">
                <div className="u-repeater u-repeater-1">
                  <div className="u-container-style u-list-item u-repeater-item">
                    <div className="u-container-layout u-similar-container u-valign-top-xs u-container-layout-2">
                      <div className="u-container-style u-custom-color-4 u-expanded-width-xs u-group u-radius-15 u-shape-round u-group-2">
                        <div className="u-container-layout u-container-layout-3">
                          <img
                            alt
                            className="u-image u-image-default u-image-1"
                            data-image-width={500}
                            data-image-height={500}
                            src="images/pf-s77-ted-1175-eye-chat-06a-mockup-removebg-preview.png"
                          />
                          <h3 className="u-text u-text-default u-text-2">
                            โมเดอร์น่า
                          </h3>
                          <p className="u-text u-text-3">
                            วันที่ได้รับวัคซีน :&nbsp;
                          </p>
                          <p className="u-text u-text-4">
                            โรงพยาบาลที่ฉีดวัคซีน :&nbsp;
                          </p>
                        </div>
                      </div>
                      <div className="u-container-style u-custom-color-5 u-expanded-width-xs u-group u-radius-15 u-shape-round u-group-3">
                        <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-valign-middle-xs u-container-layout-4">
                          <p className="u-text u-text-default u-text-5">
                            <b>โดสที่ 1</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="u-container-style u-list-item u-repeater-item">
                    <div className="u-container-layout u-similar-container u-valign-top-xs u-container-layout-5">
                      <div className="u-container-style u-custom-color-4 u-expanded-width-xs u-group u-radius-15 u-shape-round u-group-4">
                        <div className="u-container-layout u-container-layout-6">
                          <img
                            alt
                            className="u-image u-image-default u-image-2"
                            data-image-width={2000}
                            data-image-height={1333}
                            src="images/2.svg"
                          />
                          <h3 className="u-text u-text-default u-text-6">
                            ยังไม่ได้รับวัคซีน
                          </h3>
                          <p className="u-text u-text-7">
                            วันที่ได้รับวัคซีน :&nbsp;
                          </p>
                          <p className="u-text u-text-8">
                            โรงพยาบาลที่ฉีดวัคซีน :&nbsp;
                          </p>
                        </div>
                      </div>
                      <div className="u-container-style u-custom-color-5 u-expanded-width-xs u-group u-radius-15 u-shape-round u-group-5">
                        <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-valign-middle-xs u-container-layout-7">
                          <p className="u-text u-text-default u-text-9">
                            <b>โดสที่ 2</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href=""
                className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-btn-1"
              >
                อัพเดทสถานะการฉีดวัคซีน
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Vaccinationstatus;
