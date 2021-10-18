import React, { Component } from "react";
import "./thanksforbooking.css"
import  manbooking from "../../assets/img/manbooking.jpeg" ;

class Thanksforbooking extends Component {
  render() {
    return (
      <div>
        <section
        className="u-align-left u-clearfix u-image thanksforbookingsection"
        id="sec-8757"
        data-image-width={626}
        data-image-height={417}
        >
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-container-style u-custom-color-4 u-group u-radius-15 u-shape-round u-group-1">
              <div className="u-container-layout u-container-layout-1">
                <img
                className="u-image u-image-default u-preserve-proportions u-image-1"
                src={manbooking}
                alt
                data-image-width={626}
                data-image-height={626}
                />
                <p className="u-text u-text-default u-text-1">
                ยืนยันข้อมูลการจองคิวสำเร็จ
                <br />
                </p>
                <p className="u-align-center u-text u-text-2">
                {" "}
                คุณได้ยืนยันข้อมูลการจองคิวสำเร็จ
                <br />
                โปรดตรวจสอบสถานะการจองผ่านทางอีเมลล์
                <br />
                ของคุณที่ใช้สมัคร voyagesafety
                </p>
                <a
                  href="/home"
                  className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-radius-6 u-btn-1"
                  style={{background:"#0F4A69",color:"#ffffff"}}
                  >
                  กลับสู่หน้าหลัก
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Thanksforbooking;
