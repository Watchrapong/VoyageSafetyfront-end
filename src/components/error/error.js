import React, { Component } from "react";
import "./error.css"

class Error extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id="notfound">
  <div className="notfound">
    <div className="notfound-404">
      <h1>404</h1>
    </div>
    <h2>ขออภัย ไม่พบหน้าที่คุณต้องการ</h2>
      <p>กรุณาตรวจลิ้งค์ที่คุณเข้า หรือกลับไปที่หน้าแรก</p>
    <a href="/home">กลับสู่หน้าแรก</a>
  </div>
</div>

    );
  }
}

export default Error;
