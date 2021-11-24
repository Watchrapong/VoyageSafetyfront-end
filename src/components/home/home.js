import React, { Component } from "react";
import * as actions from "./../../actions/establishment.action";
import Background from "../../assets/img/backgroud.png";
import { connect } from "react-redux";
import _ from "lodash";
import "./home.css";
import Image from "react-bootstrap/Image";
import ReactPaginate from "react-paginate";
import { WaveLoading } from "react-loadingg";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      postData: null,
      offset: 0,
      data: [],
      perPage: 6,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.isLoading();
    this.createRow();
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
        this.createRow();
      }
    );
  };

  createRow = () => {
    try {
      this.debounceSearchCategory = _.debounce(
        this.props.getEstablishmentsByCategory,
        500
      );
      this.props.getEstablishments();
      const { result } = this.props.establishmentReducer;
      console.log("result", result);
      const slice = result.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice.map((pd) => (
        <div key={pd.EstId} className="col-md-4">
          <a onClick={() => this.props.history.push(`/detail/${pd.EstId}`)}>
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                alt="Thumbnail [100%x225]"
                style={{ height: 225, width: "100%", display: "block" }}
                src={pd.pathImg}
                data-holder-rendered="true"
              />
              <div className="card-body">
                <p className="card-text">
                  <b>{pd.Name}</b>
                </p>
                <p>
                  {pd.Address} {pd.District} {pd.Province} {pd.PostCode}{" "}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => {
                        window.open(
                          `https://www.google.com/maps/search/?api=1&query=${pd.Lat},${pd.Lng}`
                        );
                      }}
                    >
                      ดูแผนที่
                    </button>
                  </div>

                  <small className="text-muted">
                    <p>จำนวนการฉีดวัคซีน {pd.Percent} %</p>
                    {/* <i
                        style={{ fontSize: 24 }}
                        className="fa fa-pie-chart"
                      ></i> */}
                  </small>
                </div>
              </div>
            </div>
          </a>
        </div>
      ));
      this.setState({
        pageCount: Math.ceil(result.length / this.state.perPage),

        postData,
      });
    } catch (error) {
      setTimeout(() => {
        const { result } = this.props.establishmentReducer;
        console.log("result error", result);
        if (result != null) {
          const slice = result.slice(
            this.state.offset,
            this.state.offset + this.state.perPage
          );
          const postData = slice.map((pd) => (
            <div key={pd.EstId} className="col-md-4">
              <a onClick={() => this.props.history.push(`/detail/${pd.EstId}`)}>
                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                    alt="Thumbnail [100%x225]"
                    style={{ height: 225, width: "100%", display: "block" }}
                    src={pd.pathImg}
                    data-holder-rendered="true"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <b>{pd.Name}</b>
                    </p>
                    <p>
                      {pd.Address} {pd.District} {pd.Province} {pd.PostCode}{" "}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                      <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => {
                        window.open(
                          `https://www.google.com/maps/search/?api=1&query=${pd.Lat},${pd.Lng}`
                        );
                      }}
                    >
                      ดูแผนที่
                    </button>
                      </div>
                      <small className="text-muted">
                        <p>จำนวนการฉีดวัคซีน {pd.Percent} %</p>
                        {/* <i
                        style={{ fontSize: 24 }}
                        className="fa fa-pie-chart"
                      ></i> */}
                      </small>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ));
          this.setState({
            pageCount: Math.ceil(result.length / this.state.perPage),

            postData,
          });
        } else {
          this.createRow();
        }
      }, 6000);
    }
  };

  isLoading = () => {
    this.setState({
      postData: (
        <div style={{ marginTop: "500px" }}>
          <WaveLoading />
        </div>
      ),
    });
  };

  enterSearch = (e) => {
    if (e.key === "Enter") {
      this.isLoading();
      this.props.getEstablishmentsByKeyword(this.state.search);
      setTimeout(() => {
        this.createRow();
      }, 4000);
    }
  };

  submitSearch = (e) => {
    this.isLoading();
    this.props.getEstablishmentsByKeyword(this.state.search);
    setTimeout(() => {
      this.createRow();
    }, 4000);
  };

  onChangeType = (e) => {
    this.isLoading();
    e.preventDefault();
    e.persist();
    const offset = 0 * this.state.perPage;
    this.setState(
      {
        currentPage: 0,
        offset: 0,
      },
      () => {
        this.debounceSearchCategory(e);
        setTimeout(() => {
          this.createRow();
        }, 4000);
      }
    );
  };

  render() {
    return (
      <div>
        <Image src={Background} fluid />
        <div className="container">
          <div className="card-deck mb-3 text-center">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">ค้นหาสถานที่</h4>
              </div>
              <div className="card-body">
                <div style={{ margin: "50" }}>
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={(e) => {
                      e.preventDefault();
                      //this.props.getEstablishments();
                      this.createRow();
                    }}
                  >
                    ทั้งหมด
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    value="11"
                    onClick={this.onChangeType}
                  >
                    ร้านอาหาร
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    value="12"
                    onClick={this.onChangeType}
                  >
                    คาเฟ่
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    value="13"
                    onClick={this.onChangeType}
                  >
                    ฟาสต์ฟู้ด
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    value="21"
                    onClick={this.onChangeType}
                  >
                    โรงแรม
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    value="22"
                    onClick={this.onChangeType}
                  >
                    โฮสเทล
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    value="23"
                    onClick={this.onChangeType}
                  >
                    รีสอร์ต
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    value="14"
                    onClick={this.onChangeType}
                  >
                    บุฟเฟ่ต์
                  </button>{" "}
                </div>
                <div className="input-group mb-3" style={{ marginTop: "15px" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ค้นหาสถานที่"
                    onChange={(e) => this.setState({ search: e.target.value })}
                    onKeyDown={this.enterSearch}
                  />
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={this.submitSearch}
                  >
                    ค้นหา
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">{this.state.postData}</div>
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
    );
  }
}

const mapStateToProps = ({ establishmentReducer }) => ({
  establishmentReducer,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
