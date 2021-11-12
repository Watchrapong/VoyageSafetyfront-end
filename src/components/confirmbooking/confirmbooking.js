import React, { Component } from "react";
import "./confirmbooking.css"
import  booking from "../../assets/img/womanbooking.jpeg" ;
import { server, YES } from "../../constants";
import { httpClient } from "../../utils/HttpClient";

class Confirmbooking extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      Name: "",
      Date: "" ,
      FirstName: "",
      Est: "",
    };
  }

  componentDidMount(){
    let EstId = this.props.match.params.EstId;
    let Date = this.props.match.params.date;
    this.setState({ Date })
    try {
      if (localStorage.getItem(server.LOGIN_PASSED) == YES) {
        let token = localStorage.getItem("Token");
        httpClient
          .get(server.LOGIN_USER, {
            headers: { Authorization: `Authorization ${token}` },
          })
          .then((result) => {
            const data = result.data;
            this.setState({
              FirstName: data.result.FirstName,
            });
            httpClient.get(`${server.DETAIL_URL}/${EstId}`).
    then(result => {
        const data = result.data;
        console.log(data.result)
        this.setState({ Est: data.result })
    })
          });
      } else {
      }
    } catch (e) {}
    // this.setState({Date: date});
    // console.log(this.state.Date)
  }

  render() {
    
    const { Est, Date } = this.state;
  return(
  <div>
    <section
      className="u-align-left u-clearfix u-image confirmbookingsection"
      id="sec-8757"
      data-image-width={626}
      data-image-height={417}
    >
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-container-style u-custom-color-4 u-group u-radius-15 u-shape-round u-group-1">
          <div className="u-container-layout u-container-layout-1">
            <img
              className="u-image u-image-default u-preserve-proportions u-image-1"
              src={booking}
              alt
              data-image-width={626}
              data-image-height={626}
            />
            <p className="u-text u-text-default u-text-1">
              {/* หัวปลาแม่กลอง */}
              <span style={{ fontWeight: 400 }}>{Est.Name}</span>
              <br />
            </p>
            <p className="u-align-center u-text u-text-2">
              {" "}
              นี่คือข้อมูลการจองคิวของคุณ
              <br />
              โปรดตรวจสอบความถูกต้องก่อนกดปุ่มยืนยันการจองคิว
            </p>
            <div className="u-container-style u-custom-color-3 u-group u-radius-15 u-shape-round u-group-2">
              <div className="u-container-layout u-container-layout-2">
                <p className="u-text u-text-3">
                  <b>วันที่ </b>
                </p>
                <p className="u-text u-text-4">
                  <b>ชื่อ</b>
                </p>
                <p className="u-text u-text-5">
                  <span style={{ fontWeight: 400 }}> {Date}</span>
                  <br />
                </p>
                <p className="u-text u-text-6">
                  <span style={{ fontWeight: 400 }}>{this.state.FirstName}</span>
                  <br />
                </p>
              </div>
            </div>
            <a
              href="/thanksforbooking"
              className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-radius-6 u-btn-1"
              style={{background:"#0F4A69",color:"#ffffff"}}
            >
              ยืนยันการจองห้อง
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
  }
}

export default Confirmbooking;
