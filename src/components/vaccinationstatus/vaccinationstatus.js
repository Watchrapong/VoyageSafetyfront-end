import React, { Component } from "react";
import { apiBlockChain, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import { YES } from "../../constants";
import "./vaccinationstatus.css";
import axios from "axios";
import havevaccineimg from "./../../assets/img/vaccine/havevaccine.png";
import donthavevaccineimg from "./../../assets/img/vaccine/donthavevaccine.png";
import { WaveLoading } from "react-loadingg";
import Modal from "react-bootstrap/Modal";

class Vaccinationstatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haveVaccine: false,
      CitizenId: "",
      haveVaccine: "",
      countVaccine: "",
      vaccineName1: "",
      dateGetVaccine1: "",
      hospitalName1: "",
      img1: donthavevaccineimg,
      vaccineName2: "",
      dateGetVaccine2: "",
      hospitalName2: "",
      img2: donthavevaccineimg,
      isFetching: false,
      showModal: false,
      shownoVaccineModal: false,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  shownoVaccineModal = () => {
    this.setState({ shownoVaccineModal: true });
  };

  hidenoVaccineModal = () => {
    this.setState({ shownoVaccineModal: false });
  };

  componentDidMount() {
    this.setState({ isFetching: true });
    this.getVaccination();
  }

  updateStatus = () => {
    const { haveVaccine, CitizenId } = this.state;
    if (haveVaccine === true) {
      httpClient
        .put(`${server.UPDATE_STATUS}`, { CitizenId: CitizenId })
        .then((response) => {
          console.log(response.data);
          this.showModal();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      this.shownoVaccineModal();
    }
  };

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
                if (data.haveVaccine === true) {
                  this.setState({ haveVaccine: true });
                  if (data.countVaccine === "1") {
                    this.setState({
                      vaccineName1: data.vaccineName1,
                      dateGetVaccine1: data.dateGetVaccine1,
                      hospitalName1: data.hospitalName1,
                      img1: havevaccineimg,
                      vaccineName2: "ยังไม่ได้รับวัคซีน",
                      dateGetVaccine2: "",
                      hospitalName2: "",
                      img2: donthavevaccineimg,
                      isFetching: false,
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
                      img2: havevaccineimg,
                      isFetching: false,
                    });
                  }
                  this.updateStatus();
                } else {
                  this.setState({
                    vaccineName1: "ยังไม่ได้รับวัคซีน",
                    dateGetVaccine1: "",
                    hospitalName1: "",
                    img1: donthavevaccineimg,
                    vaccineName2: "ยังไม่ได้รับวัคซีน",
                    dateGetVaccine2: "",
                    hospitalName2: "",
                    img2: donthavevaccineimg,
                    isFetching: false,
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
      vaccineName1,
      dateGetVaccine1,
      hospitalName1,
      img1,
      vaccineName2,
      dateGetVaccine2,
      hospitalName2,
      img2,
      isFetching,
      showModal,
      shownoVaccineModal,
    } = this.state;

    return (
      <section className="u-clearfix section-vaccination">
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
                          {(isFetching === true && <WaveLoading />)|| <div>
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
                            </div>}
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
                          {(isFetching === true && <WaveLoading />)||<div>
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
                            </div>}
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
                onClick={(e) => {
                  e.preventDefault();
                  this.updateStatus();
                }}
                href=""
                className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-btn-1"
              >
                อัพเดทสถานะการฉีดวัคซีน
              </a>
            </div>
          </div>
        </div>
        <Modal
          size="sm"
          show={showModal}
          aria-labelledby="example-modal-sizes-title-sm"
          centered
        >
          <div style={{ textAlign: "center" }}>
            <div className="simplert__header">
              <div>
                <div className="simplert__icon simplert__icon--success">
                  <div className="simplert__line simplert__line--success" />
                  <div className="simplert__line simplert__line--success-2" />
                </div>
              </div>
              <b className="simplert__title">อัพเดทสำเร็จ</b>
            </div>
            <div className="simplert__body">
              <div>
                ข้อมูลวัคซีนของท่านได้รับการอัพเดท
              </div>
            </div>
            <div className="simplert__footer">
              <button className="simplert__close " onClick={() => this.hideModal()}>ปิด</button>
            </div>
          </div>
        </Modal>
        <Modal
          size="sm"
          show={shownoVaccineModal}
          aria-labelledby="example-modal-sizes-title-sm"
          centered
        >
          <div style={{textAlign: 'center'}}>
            <div className="simplert__header">
              <div>
                <div className="simplert__icon simplert__icon--error">
                  <div className="simplert__line simplert__line--error" />
                  <div className="simplert__line simplert__line--error-2" />
                </div>
              </div>
              <b className="simplert__title">อัพเดทไม่สำเร็จ</b>
            </div>
            <div className="simplert__body">
              <div>
                เนื่องจากท่านยังไม่ได้รับวัคซีน
              </div>
            </div>
            <div className="simplert__footer">
              <button className="simplert__close " onClick={() => this.hidenoVaccineModal()}>Close</button>
            </div>
          </div>
        </Modal>
      </section>
    );
  }
}

export default Vaccinationstatus;
