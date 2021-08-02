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
      Confirmed: "",
      Recovered: "",
      Hospitalized: "",
      Deaths: "",
      NewConfirmed: "",
      NewRecovered: "",
      NewHospitalized: "",
      NewDeaths: "",
    };
  }

  componentDidMount() {
    try {
      var config = {
        method: "get",
        url: apiCovidUrl,
        headers: {},
      };
      httpClient(config)
        .then((response) => {
          this.setState({
            Confirmed: response.data.Confirmed.toLocaleString("en"),
            Recovered: response.data.Recovered.toLocaleString("en"),
            Hospitalized: response.data.Hospitalized.toLocaleString("en"),
            Deaths: response.data.Deaths.toLocaleString("en"),
            NewConfirmed: response.data.NewConfirmed.toLocaleString("en"),
            NewRecovered: response.data.NewRecovered.toLocaleString("en"),
            NewHospitalized: response.data.NewHospitalized.toLocaleString("en"),
            NewDeaths: response.data.NewDeaths.toLocaleString("en"),
          });
        })
        .catch((error) => {
          this.setState({
            Confirmed: "000000",
            Recovered: "000000",
            Hospitalized: "00000",
            Deaths: "0000",
            NewConfirmed: "00000",
            NewRecovered: "00000",
            NewHospitalized: "00000",
            NewDeaths: "0000",
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
        <section className="u-clearfix u-grey-60 u-section-1" id="sec-7a63">
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
                  <h1 className="u-text u-text-default u-title u-text-3">{this.state.Confirmed}<span style={{fontWeight: 700}} />
                  </h1>
                  <p className="u-large-text u-text u-text-default u-text-variant u-text-4">ผู้ติดเชื้อส​ะสม</p>
                  <div className="u-opacity u-opacity-90 u-radius-15 u-shape u-shape-round u-white u-shape-1" />
                  <p className="u-text u-text-body-color u-text-default u-text-5">เพิ่มขึ้น<span style={{fontWeight: 700}} />
                  </p><span className="u-icon u-icon-circle u-text-palette-2-base u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 63.067 63.067" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-96db" /></svg><svg className="u-svg-content" viewBox="0 0 63.067 63.067" x="0px" y="0px" id="svg-96db" style={{enableBackground: 'new 0 0 63.067 63.067'}}><g><g><path d="M12.121,40.633L12.121,40.633l-0.828-0.826L10.47,40.63h-0.002L0.342,50.756c-0.456,0.456-0.456,1.195,0,1.651    c0.454,0.456,1.195,0.456,1.651,0l8.132-8.13v16.602c0,0.644,0.524,1.168,1.167,1.168c0.646,0,1.168-0.524,1.168-1.168V44.278    l8.134,8.13c0.229,0.229,0.527,0.342,0.826,0.342s0.598-0.113,0.828-0.342c0.457-0.456,0.457-1.195,0-1.651L12.121,40.633z" /><path d="M32.361,21.242C32.361,21.242,32.361,21.239,32.361,21.242l-0.828-0.828l-0.824,0.828c0,0,0,0-0.002,0.002L20.582,31.368    c-0.456,0.456-0.456,1.195,0,1.651c0.454,0.456,1.195,0.456,1.652,0l8.132-8.135v35.995c0,0.644,0.524,1.168,1.168,1.168    c0.646,0,1.168-0.524,1.168-1.168V24.884l8.134,8.132c0.229,0.229,0.527,0.34,0.826,0.34s0.598-0.113,0.828-0.34    c0.454-0.456,0.454-1.197,0-1.651L32.361,21.242z" /><path d="M62.727,11.97L52.601,1.847c0,0,0,0-0.002-0.002L51.773,1.02l-0.824,0.824h-0.002L40.821,11.968    c-0.456,0.455-0.456,1.197,0,1.652c0.454,0.455,1.195,0.455,1.651,0l8.133-8.131v55.389c0,0.646,0.524,1.168,1.168,1.168    c0.646,0,1.168-0.522,1.168-1.168V5.489l8.134,8.131c0.229,0.229,0.527,0.341,0.826,0.341s0.598-0.114,0.827-0.341    C63.181,13.167,63.181,12.425,62.727,11.97z" />
                        </g>
                      </g></svg></span>
                  <p className="u-small-text u-text u-text-body-color u-text-default u-text-variant u-text-6">{this.state.NewConfirmed}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="u-size-30">
            <div className="u-layout-row">
              <div className="u-container-style u-layout-cell u-palette-3-base u-radius-20 u-shape-round u-size-20 u-layout-cell-2">
                <div className="u-container-layout u-container-layout-2">
                  <p className="u-text u-text-default u-text-7">กำลังรักษา</p>
                  <h2 className="u-subtitle u-text u-text-default u-text-8">{this.state.Hospitalized}</h2>
                  <div className="u-opacity u-opacity-90 u-radius-15 u-shape u-shape-round u-white u-shape-2" />
                  <p className="u-text u-text-body-color u-text-default u-text-9">เพิ่มขึ้น<span style={{fontWeight: 700}} />
                  </p><span className="u-icon u-icon-circle u-text-palette-3-base u-icon-2"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 63.067 63.067" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-26c9" /></svg><svg className="u-svg-content" viewBox="0 0 63.067 63.067" x="0px" y="0px" id="svg-26c9" style={{enableBackground: 'new 0 0 63.067 63.067'}}><g><g><path d="M12.121,40.633L12.121,40.633l-0.828-0.826L10.47,40.63h-0.002L0.342,50.756c-0.456,0.456-0.456,1.195,0,1.651    c0.454,0.456,1.195,0.456,1.651,0l8.132-8.13v16.602c0,0.644,0.524,1.168,1.167,1.168c0.646,0,1.168-0.524,1.168-1.168V44.278    l8.134,8.13c0.229,0.229,0.527,0.342,0.826,0.342s0.598-0.113,0.828-0.342c0.457-0.456,0.457-1.195,0-1.651L12.121,40.633z" /><path d="M32.361,21.242C32.361,21.242,32.361,21.239,32.361,21.242l-0.828-0.828l-0.824,0.828c0,0,0,0-0.002,0.002L20.582,31.368    c-0.456,0.456-0.456,1.195,0,1.651c0.454,0.456,1.195,0.456,1.652,0l8.132-8.135v35.995c0,0.644,0.524,1.168,1.168,1.168    c0.646,0,1.168-0.524,1.168-1.168V24.884l8.134,8.132c0.229,0.229,0.527,0.34,0.826,0.34s0.598-0.113,0.828-0.34    c0.454-0.456,0.454-1.197,0-1.651L32.361,21.242z" /><path d="M62.727,11.97L52.601,1.847c0,0,0,0-0.002-0.002L51.773,1.02l-0.824,0.824h-0.002L40.821,11.968    c-0.456,0.455-0.456,1.197,0,1.652c0.454,0.455,1.195,0.455,1.651,0l8.133-8.131v55.389c0,0.646,0.524,1.168,1.168,1.168    c0.646,0,1.168-0.522,1.168-1.168V5.489l8.134,8.131c0.229,0.229,0.527,0.341,0.826,0.341s0.598-0.114,0.827-0.341    C63.181,13.167,63.181,12.425,62.727,11.97z" />
                        </g>
                      </g></svg></span>
                  <p className="u-small-text u-text u-text-body-color u-text-default u-text-variant u-text-10">{this.state.NewHospitalized}</p>
                </div>
              </div>
              <div className="u-container-style u-custom-color-1 u-layout-cell u-radius-20 u-shape-round u-size-20 u-layout-cell-3">
                <div className="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-xl u-container-layout-3">
                  <p className="u-text u-text-default u-text-11">หายแล้ว</p>
                  <h2 className="u-subtitle u-text u-text-default u-text-12">{this.state.Recovered}</h2>
                  <div className="u-opacity u-opacity-90 u-radius-15 u-shape u-shape-round u-white u-shape-3" />
                  <p className="u-text u-text-body-color u-text-default u-text-13">เพิ่มขึ้น<span style={{fontWeight: 700}} />
                  </p><span className="u-icon u-icon-circle u-text-custom-color-1 u-icon-3"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 63.067 63.067" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-f018" /></svg><svg className="u-svg-content" viewBox="0 0 63.067 63.067" x="0px" y="0px" id="svg-f018" style={{enableBackground: 'new 0 0 63.067 63.067'}}><g><g><path d="M12.121,40.633L12.121,40.633l-0.828-0.826L10.47,40.63h-0.002L0.342,50.756c-0.456,0.456-0.456,1.195,0,1.651    c0.454,0.456,1.195,0.456,1.651,0l8.132-8.13v16.602c0,0.644,0.524,1.168,1.167,1.168c0.646,0,1.168-0.524,1.168-1.168V44.278    l8.134,8.13c0.229,0.229,0.527,0.342,0.826,0.342s0.598-0.113,0.828-0.342c0.457-0.456,0.457-1.195,0-1.651L12.121,40.633z" /><path d="M32.361,21.242C32.361,21.242,32.361,21.239,32.361,21.242l-0.828-0.828l-0.824,0.828c0,0,0,0-0.002,0.002L20.582,31.368    c-0.456,0.456-0.456,1.195,0,1.651c0.454,0.456,1.195,0.456,1.652,0l8.132-8.135v35.995c0,0.644,0.524,1.168,1.168,1.168    c0.646,0,1.168-0.524,1.168-1.168V24.884l8.134,8.132c0.229,0.229,0.527,0.34,0.826,0.34s0.598-0.113,0.828-0.34    c0.454-0.456,0.454-1.197,0-1.651L32.361,21.242z" /><path d="M62.727,11.97L52.601,1.847c0,0,0,0-0.002-0.002L51.773,1.02l-0.824,0.824h-0.002L40.821,11.968    c-0.456,0.455-0.456,1.197,0,1.652c0.454,0.455,1.195,0.455,1.651,0l8.133-8.131v55.389c0,0.646,0.524,1.168,1.168,1.168    c0.646,0,1.168-0.522,1.168-1.168V5.489l8.134,8.131c0.229,0.229,0.527,0.341,0.826,0.341s0.598-0.114,0.827-0.341    C63.181,13.167,63.181,12.425,62.727,11.97z" />
                        </g>
                      </g></svg></span>
                  <p className="u-small-text u-text u-text-body-color u-text-default u-text-variant u-text-14">{this.state.NewRecovered}</p>
                </div>
              </div>
              <div className="u-container-style u-custom-color-3 u-layout-cell u-radius-20 u-shape-round u-size-20 u-layout-cell-4">
                <div className="u-container-layout u-container-layout-4">
                  <p className="u-text u-text-default u-text-15">เสียชิวิต</p>
                  <h2 className="u-subtitle u-text u-text-default u-text-16">{this.state.Deaths}</h2>
                  <div className="u-opacity u-opacity-90 u-radius-15 u-shape u-shape-round u-white u-shape-4" />
                  <p className="u-text u-text-body-color u-text-default u-text-17">เพิ่มขึ้น<span style={{fontWeight: 700}} />
                  </p><span className="u-icon u-icon-circle u-text-custom-color-3 u-icon-4"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 63.067 63.067" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-d773" /></svg><svg className="u-svg-content" viewBox="0 0 63.067 63.067" x="0px" y="0px" id="svg-d773" style={{enableBackground: 'new 0 0 63.067 63.067'}}><g><g><path d="M12.121,40.633L12.121,40.633l-0.828-0.826L10.47,40.63h-0.002L0.342,50.756c-0.456,0.456-0.456,1.195,0,1.651    c0.454,0.456,1.195,0.456,1.651,0l8.132-8.13v16.602c0,0.644,0.524,1.168,1.167,1.168c0.646,0,1.168-0.524,1.168-1.168V44.278    l8.134,8.13c0.229,0.229,0.527,0.342,0.826,0.342s0.598-0.113,0.828-0.342c0.457-0.456,0.457-1.195,0-1.651L12.121,40.633z" /><path d="M32.361,21.242C32.361,21.242,32.361,21.239,32.361,21.242l-0.828-0.828l-0.824,0.828c0,0,0,0-0.002,0.002L20.582,31.368    c-0.456,0.456-0.456,1.195,0,1.651c0.454,0.456,1.195,0.456,1.652,0l8.132-8.135v35.995c0,0.644,0.524,1.168,1.168,1.168    c0.646,0,1.168-0.524,1.168-1.168V24.884l8.134,8.132c0.229,0.229,0.527,0.34,0.826,0.34s0.598-0.113,0.828-0.34    c0.454-0.456,0.454-1.197,0-1.651L32.361,21.242z" /><path d="M62.727,11.97L52.601,1.847c0,0,0,0-0.002-0.002L51.773,1.02l-0.824,0.824h-0.002L40.821,11.968    c-0.456,0.455-0.456,1.197,0,1.652c0.454,0.455,1.195,0.455,1.651,0l8.133-8.131v55.389c0,0.646,0.524,1.168,1.168,1.168    c0.646,0,1.168-0.522,1.168-1.168V5.489l8.134,8.131c0.229,0.229,0.527,0.341,0.826,0.341s0.598-0.114,0.827-0.341    C63.181,13.167,63.181,12.425,62.727,11.97z" />
                        </g>
                      </g></svg></span>
                  <p className="u-small-text u-text u-text-body-color u-text-default u-text-variant u-text-18">{this.state.NewDeaths}</p>
                </div>
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

export default Welcome;
