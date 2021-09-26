import React, { Component } from "react";
import Cryptr from "cryptr";
import { keycryptr, server } from "./../../constants";
import { httpClient } from "../../utils/HttpClient";
import image54 from "../../assets/img/icons/image54.png";
import circle_one from "../../assets/img/icons/ph_number-circle-one.png";
import circle_threee from "../../assets/img/icons/ph_number-circle-three.png";
import circle_two from "../../assets/img/icons/ph_number-circle-two.png";
import "./verify.css";

class Verify extends Component {
  componentDidMount() {
    try {
      const cryptr = new Cryptr(keycryptr);
      let key = this.props.match.params.key;
      let UserId = cryptr.decrypt(key);
      console.log(UserId);
      var data = new FormData();
      data.append("UserId", UserId);
      data.append("Verify", true);
      httpClient
        .put(server.EDIT_USER, data)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <section
        className="u-clearfix u-image verify-section"
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
                              <img src={circle_one} />
                            </span>
                          </div>
                        </div>
                        <div className="u-container-style u-list-item u-repeater-item">
                          <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-xl u-container-layout-3">
                            <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-2">
                              <img src={circle_two} />
                            </span>
                          </div>
                        </div>
                        <div className="u-container-style u-custom-background u-list-item u-repeater-item">
                          <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-xl u-container-layout-4">
                            <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-3">
                              <img src={circle_threee} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="u-text u-text-body-alt-color u-text-default-lg u-text-default-md u-text-default-sm u-text-default-xl u-text-2">
                      อีเมลล์ของคุณ
                    </p>
                    <p className="u-text u-text-body-alt-color u-text-default u-text-3">
                      {this.props.match.params.email}
                    </p>
                    <span className="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-4">
                      <img src={image54} />
                    </span>
                    <p className="u-text u-text-body-alt-color u-text-default u-text-4">
                      ได้ทำการยืนยันสำเร็จ
                    </p>
                    <p className="u-text u-text-body-alt-color u-text-default u-text-5">
                      สามารถเข้าใช้งานได้แล้ว
                    </p>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.history.push("/login");
                      }}
                      className="u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-hover-palette-1-dark-1 u-radius-10 u-text-body-alt-color u-btn-1"
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
    );
  }
}

export default Verify;
