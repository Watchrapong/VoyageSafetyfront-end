import React, { Component } from "react";
import Rooftop from "../../assets/img/rooftop.png";
import Image from "react-bootstrap/Image";
import { httpClient } from "../../utils/HttpClient";
import { apiCovidUrl } from "../../constants";
import "./welcome.css";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total_case: "",
      total_recovered: "",
      total_death: "",
      new_case: "",
      new_recovered: "",
      new_death: "",
      date: "",
    };
  }

   componentDidMount() {
    try {
      
      httpClient.get(apiCovidUrl)
        .then((result) => {
          this.setState({
            total_case: result.data[0].total_case.toLocaleString("en"),
            total_recovered: result.data[0].total_recovered.toLocaleString("en"),
            total_death: result.data[0].total_death.toLocaleString("en"),
            new_case: result.data[0].new_case.toLocaleString("en"),
            new_recovered: result.data[0].new_recovered.toLocaleString("en"),
            new_death: result.data[0].new_death.toLocaleString("en"),
            date: result.data[0].update_date,
          });
        })
        .catch((error) => {
          console.error(JSON.stringify(error))
          this.setState({
            total_case: "000000",
            total_recovered: "000000",
            total_death: "0000",
            new_case: "00000",
            new_recovered: "00000",
            new_death: "0000",
            date: "xx/xx/xxxx xx:xx"
          });
        });
    } catch (e) {}
  }

  render() {
    return (
      <div>
        <Image src={Rooftop} fluid />
        <div className="px-4 py-5 my-5 text-center">
          <h2 className="display-5 fw-bold">VOYAGE SAFETY</h2>
          <div className="col-lg-7 mx-auto">
            <p className="lead mb-4">
              <b>Voyage Safety</b>{" "}
              ถูกพัฒนาขึ้นเพื่อช่วยให้ผู้ใช้สามารถลงทะเบียนบันทึกการฉีดวัคซีนของบุคลากรภายในร้านของท่าน
              <br />
              รวมถึงค้นหาและตรวจสอบสถานะการฉีดวัคซีนของบุคลากรภายในร้านค้า
              เพื่อหลีกเลี่ยงความเสี่ยงในการเดินทางไปยังสถานที่ต่าง ๆ
            </p>
          </div>
        </div>
       

<section className="u-clearfix u-custom-color-7 section-dashboard" id="sec-7a63">
  <div className="u-align-left u-clearfix u-sheet u-sheet-1">
    <h3 className="u-text u-text-default u-text-1">ตัวเลขผู้ติดเชื้อ</h3>
    <h1 className="u-text u-text-custom-color-5 u-text-default u-text-2">Covid-19</h1>
    <div className="u-clearfix u-gutter-16 u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-col">
          <div className="u-size-30">
            <div className="u-layout-col">
              <div className="u-container-style u-custom-color-4 u-layout-cell u-radius-20 u-shape-round u-size-60 u-layout-cell-1">
                <div className="u-container-layout u-container-layout-1">
                  <h1 className="u-text u-text-default u-title u-text-3">{this.state.total_case}<span style={{fontWeight: 700}} />
                  </h1>
                  <p className="u-large-text u-text u-text-default u-text-variant u-text-4">ผู้ติดเชื้อส​ะสม</p>
                  <div className="u-opacity u-opacity-90 u-radius-15 u-shape u-shape-round u-white u-shape-1" />
                  <p className="u-text u-text-body-color u-text-default u-text-5">เพิ่มขึ้น<span style={{fontWeight: 700}} />
                  </p><span className="u-icon u-icon-circle u-text-palette-2-base u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 63.067 63.067" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-96db" /></svg><svg className="u-svg-content" viewBox="0 0 63.067 63.067" x="0px" y="0px" id="svg-96db" style={{enableBackground: 'new 0 0 63.067 63.067'}}><g><g><path d="M12.121,40.633L12.121,40.633l-0.828-0.826L10.47,40.63h-0.002L0.342,50.756c-0.456,0.456-0.456,1.195,0,1.651    c0.454,0.456,1.195,0.456,1.651,0l8.132-8.13v16.602c0,0.644,0.524,1.168,1.167,1.168c0.646,0,1.168-0.524,1.168-1.168V44.278    l8.134,8.13c0.229,0.229,0.527,0.342,0.826,0.342s0.598-0.113,0.828-0.342c0.457-0.456,0.457-1.195,0-1.651L12.121,40.633z" /><path d="M32.361,21.242C32.361,21.242,32.361,21.239,32.361,21.242l-0.828-0.828l-0.824,0.828c0,0,0,0-0.002,0.002L20.582,31.368    c-0.456,0.456-0.456,1.195,0,1.651c0.454,0.456,1.195,0.456,1.652,0l8.132-8.135v35.995c0,0.644,0.524,1.168,1.168,1.168    c0.646,0,1.168-0.524,1.168-1.168V24.884l8.134,8.132c0.229,0.229,0.527,0.34,0.826,0.34s0.598-0.113,0.828-0.34    c0.454-0.456,0.454-1.197,0-1.651L32.361,21.242z" /><path d="M62.727,11.97L52.601,1.847c0,0,0,0-0.002-0.002L51.773,1.02l-0.824,0.824h-0.002L40.821,11.968    c-0.456,0.455-0.456,1.197,0,1.652c0.454,0.455,1.195,0.455,1.651,0l8.133-8.131v55.389c0,0.646,0.524,1.168,1.168,1.168    c0.646,0,1.168-0.522,1.168-1.168V5.489l8.134,8.131c0.229,0.229,0.527,0.341,0.826,0.341s0.598-0.114,0.827-0.341    C63.181,13.167,63.181,12.425,62.727,11.97z" />
                        </g>
                      </g></svg></span>
                  <p className="u-small-text u-text u-text-body-color u-text-default u-text-variant u-text-6">{this.state.new_case}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="u-size-30">
            <div className="u-layout-row">
              <div className="u-container-style u-custom-color-1 u-layout-cell u-radius-20 u-shape-round u-size-28 u-layout-cell-2">
                <div className="u-container-layout u-container-layout-2">
                  <p className="u-text u-text-default u-text-7">หายแล้ว</p>
                  <h2 className="u-subtitle u-text u-text-default u-text-8">{this.state.total_recovered}</h2>
                  <div className="u-opacity u-opacity-90 u-radius-15 u-shape u-shape-round u-white u-shape-2" />
                  <div className="u-container-style u-group u-group-1">
                    <div className="u-container-layout u-container-layout-3">
                      <p className="u-text u-text-body-color u-text-default u-text-9">เพิ่มขึ้น<span style={{fontWeight: 700}} />
                      </p><span className="u-icon u-icon-circle u-text-custom-color-1 u-icon-2"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 63.067 63.067" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-31a6" /></svg><svg className="u-svg-content" viewBox="0 0 63.067 63.067" x="0px" y="0px" id="svg-31a6" style={{enableBackground: 'new 0 0 63.067 63.067'}}><g><g><path d="M12.121,40.633L12.121,40.633l-0.828-0.826L10.47,40.63h-0.002L0.342,50.756c-0.456,0.456-0.456,1.195,0,1.651    c0.454,0.456,1.195,0.456,1.651,0l8.132-8.13v16.602c0,0.644,0.524,1.168,1.167,1.168c0.646,0,1.168-0.524,1.168-1.168V44.278    l8.134,8.13c0.229,0.229,0.527,0.342,0.826,0.342s0.598-0.113,0.828-0.342c0.457-0.456,0.457-1.195,0-1.651L12.121,40.633z" /><path d="M32.361,21.242C32.361,21.242,32.361,21.239,32.361,21.242l-0.828-0.828l-0.824,0.828c0,0,0,0-0.002,0.002L20.582,31.368    c-0.456,0.456-0.456,1.195,0,1.651c0.454,0.456,1.195,0.456,1.652,0l8.132-8.135v35.995c0,0.644,0.524,1.168,1.168,1.168    c0.646,0,1.168-0.524,1.168-1.168V24.884l8.134,8.132c0.229,0.229,0.527,0.34,0.826,0.34s0.598-0.113,0.828-0.34    c0.454-0.456,0.454-1.197,0-1.651L32.361,21.242z" /><path d="M62.727,11.97L52.601,1.847c0,0,0,0-0.002-0.002L51.773,1.02l-0.824,0.824h-0.002L40.821,11.968    c-0.456,0.455-0.456,1.197,0,1.652c0.454,0.455,1.195,0.455,1.651,0l8.133-8.131v55.389c0,0.646,0.524,1.168,1.168,1.168    c0.646,0,1.168-0.522,1.168-1.168V5.489l8.134,8.131c0.229,0.229,0.527,0.341,0.826,0.341s0.598-0.114,0.827-0.341    C63.181,13.167,63.181,12.425,62.727,11.97z" />
                            </g>
                          </g></svg></span>
                      <p className="u-small-text u-text u-text-body-color u-text-default u-text-variant u-text-10">{this.state.new_recovered}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-container-style u-hidden-sm u-hidden-xs u-layout-cell u-radius-20 u-shape-round u-size-3 u-layout-cell-3">
                <div className="u-container-layout u-container-layout-4" />
              </div>
              <div className="u-container-style u-custom-color-3 u-layout-cell u-radius-20 u-shape-round u-size-29 u-layout-cell-4">
                <div className="u-container-layout u-container-layout-5">
                  <p className="u-text u-text-default u-text-11">เสียชิวิต</p>
                  <h2 className="u-subtitle u-text u-text-default u-text-12">{this.state.total_death}</h2>
                  <div className="u-container-style u-group u-opacity u-opacity-90 u-radius-15 u-shape-round u-white u-group-2">
                    <div className="u-container-layout u-container-layout-6">
                      <p className="u-small-text u-text u-text-body-color u-text-default u-text-variant u-text-13">{this.state.new_death}</p><span className="u-icon u-icon-circle u-text-custom-color-3 u-icon-3"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 63.067 63.067" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-d773" /></svg><svg className="u-svg-content" viewBox="0 0 63.067 63.067" x="0px" y="0px" id="svg-d773" style={{enableBackground: 'new 0 0 63.067 63.067'}}><g><g><path d="M12.121,40.633L12.121,40.633l-0.828-0.826L10.47,40.63h-0.002L0.342,50.756c-0.456,0.456-0.456,1.195,0,1.651    c0.454,0.456,1.195,0.456,1.651,0l8.132-8.13v16.602c0,0.644,0.524,1.168,1.167,1.168c0.646,0,1.168-0.524,1.168-1.168V44.278    l8.134,8.13c0.229,0.229,0.527,0.342,0.826,0.342s0.598-0.113,0.828-0.342c0.457-0.456,0.457-1.195,0-1.651L12.121,40.633z" /><path d="M32.361,21.242C32.361,21.242,32.361,21.239,32.361,21.242l-0.828-0.828l-0.824,0.828c0,0,0,0-0.002,0.002L20.582,31.368    c-0.456,0.456-0.456,1.195,0,1.651c0.454,0.456,1.195,0.456,1.652,0l8.132-8.135v35.995c0,0.644,0.524,1.168,1.168,1.168    c0.646,0,1.168-0.524,1.168-1.168V24.884l8.134,8.132c0.229,0.229,0.527,0.34,0.826,0.34s0.598-0.113,0.828-0.34    c0.454-0.456,0.454-1.197,0-1.651L32.361,21.242z" /><path d="M62.727,11.97L52.601,1.847c0,0,0,0-0.002-0.002L51.773,1.02l-0.824,0.824h-0.002L40.821,11.968    c-0.456,0.455-0.456,1.197,0,1.652c0.454,0.455,1.195,0.455,1.651,0l8.133-8.131v55.389c0,0.646,0.524,1.168,1.168,1.168    c0.646,0,1.168-0.522,1.168-1.168V5.489l8.134,8.131c0.229,0.229,0.527,0.341,0.826,0.341s0.598-0.114,0.827-0.341    C63.181,13.167,63.181,12.425,62.727,11.97z" />
                            </g>
                          </g></svg></span>
                      <p className="u-text u-text-body-color u-text-default u-text-14">เพิ่มขึ้น<span style={{fontWeight: 700}} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p className="u-text u-text-15">อัพเดทล่าสุด&nbsp; {this.state.date}</p>
  </div>
</section>


        </div>
    );
  }
}

export default Welcome;
