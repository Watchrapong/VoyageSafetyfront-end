import React, { Component } from "react";
import blankprofile from "../../assets/img/blankprofile.png";
import { server, apiBlockChain } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import "./viewstaff.css";
import { WaveLoading } from "react-loadingg";
import * as action from "../../actions/staff.action";
import { connect } from "react-redux";
import axios from "axios";
import ReactPaginate from "react-paginate";

class Viewstaff extends Component {
  componentDidMount() {
    let EstId = this.props.match.params.EstId;
    this.props.getStaff(EstId);
    this.isLoading();
    setTimeout(() => this.staffRow(), 4000);
  }

  constructor(props) {
    super(props);
    this.state = {
      postData: (
        <div style={{ marginTop: "400px" }}>
          <WaveLoading />
        </div>
      ),
      offset: 0,
      data: [],
      perPage: 3,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  // getVaccines = (CitizenId) => {
  //   axios
  //     .post(`${apiBlockChain}/${server.VACCINATION}/${CitizenId}`)
  //     .then((result) => {
  //       let data = result.data.result;
  //       console.log(data);
  //       this.setState({ managerData: data });
  //       console.log(this.state.managerData)
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       return error;
  //     });
  // };

  isLoading = () => {
    this.setState({
      postData: (
        <div style={{ marginTop: "400px" }}>
          <WaveLoading />
        </div>
      ),
    });
  };

  staffRow = () => {
    try {
      const { result } = this.props.staffReducer;
      const slice = result.staffUser.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice.map((pd) => (
        <tr style={{ height: "109px" }}>
          <th scope="row">
            <img
              width="84px"
              height="84px"
              className="u-image u-image-circle u-preserve-proportions"
              src={pd.pathImg||blankprofile}
              alt=""
              data-image-width="153"
              data-image-height="206"
            />
          </th>
          <td>
            {pd.FirstName} {pd.LastName}
          </td>
          <td></td>
          <td>
            {/* {axios
              .post(`${apiBlockChain}/${server.VACCINATION}/${pd.CitizenId}`)
              .then((result) => {
                let data = result.data.result;
                console.log(data);
              })
              .catch((error) => {
                console.error(error);
              })} */}
          </td>
          <td></td>
        </tr>
      ));
      this.setState({
        pageCount: Math.ceil(result.length / this.state.perPage),

        postData,
      });
    } catch (error) {}
  };

  render() {
    const { result, isFetching } = this.props.staffReducer;
    // this.getVaccines(result.result.CitizenId);
    return (
      !isFetching &&
      result != null && (
        <section className="u-clearfix sectionviewstaff" id="sec-c6a2">
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div
                    className="u-align-left u-container-style u-image u-layout-cell u-size-21 u-image-1"
                    data-image-width={650}
                    data-image-height={1080}
                  >
                    <div className="u-container-layout u-container-layout-1" />
                  </div>
                  <div className="u-container-style u-layout-cell u-size-39 u-layout-cell-2">
                    <div className="u-container-layout u-container-layout-2">
                      <h4 className="u-text u-text-default-lg u-text-default-md u-text-default-xl u-text-palette-1-dark-1 u-text-1">
                        พนักงานสถานประกอบการของคุณ
                      </h4>
                      <div className="u-border-2 u-border-grey-15 u-line u-line-horizontal u-line-1" />
                      <p className="u-small-text u-text u-text-default u-text-variant u-text-2">
                        จำนวนพนักงานทั้งหมด : 0
                      </p>
                      <div className="u-container-style u-expanded-width-sm u-expanded-width-xs u-grey-10 u-group u-radius-5 u-shape-round u-group-1">
                        <div className="u-container-layout u-container-layout-3">
                          {/* <div class="u-expanded-height u-grey-40 u-radius-5 u-shape u-shape-round u-shape-1"></div>
                        <p class="u-custom-font u-font-roboto u-text u-text-default u-text-3">
                          นายรัชชวัสส์ วิลัยรักษ์
                        </p>
                        <p class="u-custom-font u-font-roboto u-text u-text-default u-text-4">
                          ผู้จัดกา​รร้าน
                        </p>
                        <img
                          class="u-image u-image-circle u-preserve-proportions u-image-2"
                          src="../../assets/img/rooftop.png"
                          alt=""
                          data-image-width="153"
                          data-image-height="206"
                        />
                        <p class="u-custom-font u-font-roboto u-text u-text-default u-text-5">
                          วัคซีนเข็มที่สอง
                        </p>
                        <p class="u-custom-font u-font-roboto u-text u-text-default u-text-6">
                          Astrazeneca
                        </p>
                        <p class="u-custom-font u-font-roboto u-text u-text-default u-text-7">
                          Astrazeneca
                        </p>
                        <p class="u-custom-font u-font-roboto u-text u-text-default u-text-8">
                          วัคซีนเข็มที่หนึ่ง
                        </p> */}
                          <div className="table-responsive">
                            <table className="table table-striped align-middle">
                              <thead>
                                <tr style={{ height: "49.5px" }}>
                                  <th scope="col"></th>
                                  <th scope="col">ชื่อ-สกุล</th>
                                  <th scope="col">ตำแหน่ง</th>
                                  <th scope="col">วัคซีนเข็มที่หนึ่ง</th>
                                  <th scope="col">วัคซีนเข็มที่สอง</th>
                                </tr>
                              </thead>
                              <thead>
                                <tr>
                                  <th scope="col" style={{ height: "109px" }}>
                                    <img
                                      width="84px"
                                      height="84px"
                                      className="u-image u-image-circle u-preserve-proportions"
                                      src={result.result.pathImg || blankprofile}
                                      alt=""
                                      data-image-width="153"
                                      data-image-height="206"
                                    />
                                  </th>
                                  <td>
                                    {result.result.FirstName}{" "}
                                    {result.result.LastName}
                                  </td>
                                  <td>ผู้จัดการร้าน</td>
                                  <td>{result.ownerResult.vaccineName2}</td>
                                  <td>{result.ownerResult.vaccineName2}</td>
                                </tr>
                              </thead>
                              <tbody>{this.state.postData}</tbody>
                              {/* {this.staffRow} */}
                            </table>
                          </div>
                        </div>
                      </div>
                      <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination justify-content-center"}
                        disabledClassName={"page-item disabled"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        activeClassName={"page-item"}
                        activeLinkClassName={"page-link"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    );
  }
}

const mapStateToProps = ({ staffReducer }) => ({
  staffReducer,
});

const mapDispatchToProps = {
  ...action,
};

export default connect(mapStateToProps, mapDispatchToProps)(Viewstaff);
