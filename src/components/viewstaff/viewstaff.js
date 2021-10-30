import React, { Component } from "react";
import blankprofile from "../../assets/img/blankprofile.png";
import "./viewstaff.css";
import { WaveLoading } from "react-loadingg";
import * as action from "../../actions/staff.action";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";
import { Button, Modal } from "react-bootstrap";

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
      show: false,
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

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitHandler = (e) => {};

  addStaff = () => {
    return (
      <div className="u-btn u-btn-round u-button-style u-radius-5 u-btn-1">
        <Button variant="none" onClick={() => this.setState({ show: true })}>
          เพิ่มพนักงาน
        </Button>
        <Modal
          show={this.state.show}
          animation={true}
          size="md"
          className=" shadow-lg border"
        >
          <Modal.Header className="bg-info text-white text-center py-1">
            <Modal.Title className="text-center">
              <h5>กรุณาใส่ข้อมูลพนักงานที่ท่านต้องการเพิ่ม</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-0 border">
            <form>
              <div className="form-group">
                <label htmlFor="citizId">เลขบัตรประชาชน</label>
                <input className="form-control" id="citizId" />
              </div>
              <div className="form-group">
                <label htmlFor="position">ตำแหน่ง</label>
                <input className="form-control" id="position" />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer className="py-1 d-flex justify-content-center">
            <div>
              <Button
                variant="outline-dark"
                onClick={() => this.setState({ show: false })}
              >
                Cancel
              </Button>
            </div>
            <div>
              <Button
                variant="outline-danger"
                className="mx-2 px-3"
                onClick={this.submitHandler}
              >
                Submit
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };

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
              src={pd.pathImg || blankprofile}
              alt=""
              data-image-width="153"
              data-image-height="206"
            />
          </th>
          <td>
            {pd.FirstName} {pd.LastName}
          </td>
          <td>{pd.Position}</td>
          <td>{pd.vaccineName1}</td>
          <td>{pd.vaccineName2}</td>
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
                                      src={
                                        result.result.pathImg || blankprofile
                                      }
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
                      {this.addStaff()}
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
