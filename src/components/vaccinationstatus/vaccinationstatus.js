import React, { Component } from "react";
import { apiBlockChain, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import { YES } from "../../constants";
import "./vaccinationstatus.css";
import axios from "axios";
import havevaccineimg from "./../../assets/img/vaccine/havevaccine.png";
import donthavevaccineimg from "./../../assets/img/vaccine/donthavevaccine.png";

class Vaccinationstatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CitizenId: "",
      haveVaccine: "",
      countVaccine: "",
      vaccineName1: "ยังไม่ได้รับวัคซีน",
      dateGetVaccine1: "",
      hospitalName1: "",
      img1 : donthavevaccineimg,
      vaccineName2: "ยังไม่ได้รับวัคซีน",
      dateGetVaccine2: "",
      hospitalName2: "",
      img2: donthavevaccineimg,
    };
  }

  componentDidMount() {
    this.getVaccination();
  }

  async getVaccination() {
    try {
      if (localStorage.getItem(server.LOGIN_PASSED) == YES) {
        let token = localStorage.getItem("Token");
        await httpClient
          .get(server.LOGIN_USER, {
            headers: { Authorization: `Authorization ${token}` },
          })
          .then((result) => {
            this.setState({ CitizenId: result.data.result.CitizenId });
            axios
              .post(
                `${apiBlockChain}/${server.VACCINATION}/${this.state.CitizenId}`
              )
              .then((result) => {
                let data = result.data.result;
                console.log(data);
                if (data.countVaccine === "1") {
                  this.setState({
                    vaccineName1: data.vaccineName1,
                    dateGetVaccine1: data.dateGetVaccine1,
                    hospitalName1: data.hospitalName1,
                    img1: havevaccineimg
                  });
                } else {
                  this.setState({
                    vaccineName1: data.vaccineName1,
                    dateGetVaccine1: data.dateGetVaccine1,
                    hospitalName1: data.hospitalName1,
                    img1: havevaccineimg,
                    vaccineName2: data.vaccineName2,
                    dateGetVaccine2: data.dateGetVaccine2,
                    hospitalName2: data.hospitalName2,
                    img2: havevaccineimg
                  });
                }
              })
              .catch((error) => {
               console.error(error);
              });
          });
      } else {
      }
    } catch (e) {}
  }
  
  render() {
    const {
      haveVaccine,
      countVaccine,
      vaccineName1,
      dateGetVaccine1,
      hospitalName1,
      img1,
      vaccineName2,
      dateGetVaccine2,
      hospitalName2,
      img2,
    } = this.state;
    return (
      <section className="u-clearfix section-vaccination" >
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-container-style u-custom-color-3 u-expanded-width-lg u-expanded-width-md u-expanded-width-xl u-expanded-width-xs u-group u-radius-15 u-shape-round u-group-1">
            <div className="u-container-layout u-container-layout-1">
              <p className="u-text u-text-default-lg u-text-default-md u-text-default-sm u-text-default-xl u-text-1">
                <b>สถานะการฉีดวัคซีน </b>
              </p>
              <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-list u-list-1">
                <div className="u-repeater u-repeater-1">
                  <div className="u-container-style u-list-item u-repeater-item">
                    <div className="u-container-layout u-similar-container u-valign-top-xs u-container-layout-2">
                      <div className="u-container-style u-custom-color-4 u-expanded-width-xs u-group u-radius-15 u-shape-round u-group-2">
                        <div className="u-container-layout u-container-layout-3">
                          <img
                            className="u-image u-image-default u-image-1"
                            data-image-width={500}
                            data-image-height={500}
                            src={img1}
                          />
                          <h3 className="u-text u-text-default u-text-2">
                            {vaccineName1}
                          </h3>
                          <p className="u-text u-text-3">
                            วันที่ได้รับวัคซีน:&nbsp;{dateGetVaccine1}
                          </p>
                          <p className="u-text u-text-4">
                            โรงพยาบาลที่ฉีดวัคซีน:&nbsp;{hospitalName1}
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
                            className="u-image u-image-default u-image-2"
                            data-image-width={2000}
                            data-image-height={1333}
                            src={img2}
                          />
                          <h3 className="u-text u-text-default u-text-6">
                            {vaccineName2}
                          </h3>
                          <p className="u-text u-text-7">
                            วันที่ได้รับวัคซีน:&nbsp;{dateGetVaccine2}
                          </p>
                          <p className="u-text u-text-8">
                            โรงพยาบาลที่ฉีดวัคซีน:&nbsp;{hospitalName2}
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
