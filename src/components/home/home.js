import React, { Component } from "react";
import * as actions from "./../../actions/establishment.action";
import Background from "../../assets/img/backgroud.png";
import { connect } from "react-redux";
import _ from "lodash";
import "./home.css";
import Image from "react-bootstrap/Image";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      dropdown: [],
    };
  }

  componentDidMount() {
    this.debounceSearchCategory = _.debounce(
      this.props.getEstablishmentsByCategory,
      500
    );
    this.props.getEstablishments();
  }

  createRow = () => {
    try {
      const { result, isFetching } = this.props.establishmentReducer;
      return (
        !isFetching &&
        result != null &&
        result.map((item) => (
          <div key={item.EstId} className="col-md-4">
            <a onClick={() => this.props.history.push(`/detail/${item.EstId}`)}>
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  style={{ height: 225, width: "100%", display: "block" }}
                  src={item.pathImg}
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <p className="card-text">{item.Name}</p>
                  <p>
                    {item.Address}
                    {item.District}
                    {item.Province}
                    {item.PostCode}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                    </div>
                    <small className="text-muted">
                      <i
                        style={{ fontSize: 24 }}
                        className="fa fa-pie-chart"
                      ></i>
                    </small>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))
      );
    } catch (e) {}
  };

  enterSearch = (e) => {
    if (e.key === "Enter") {
      this.props.getEstablishmentsByKeyword(this.state.search);
    }
  };

  onChangeType = (e) => {
    e.persist();
    this.debounceSearchCategory(e);
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
                <button type="button" className="btn btn-dark" onClick={()=>window.location.reload(false)}>ทั้งหมด</button>{" "}
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    value="11"
                    onClick={this.onChangeType}
                  >
                    Restaurant
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    value="12"
                    onClick={this.onChangeType}
                  >
                    Cafe
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    value="13"
                    onClick={this.onChangeType}
                  >
                    Fastfood
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    value="21"
                    onClick={this.onChangeType}
                  >
                    Hotel
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-outline-warning"
                    value="22"
                    onClick={this.onChangeType}
                  >
                    Hostel
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-outline-info"
                    value="23"
                    onClick={this.onChangeType}
                  >
                    Resort
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    value="14"
                    onClick={this.onChangeType}
                  >
                    Buffet
                  </button>{" "}
                </div>

                <input
                  list="list"
                  onChange={(e) => this.setState({ search: e.target.value })}
                  onKeyDown={this.enterSearch}
                  type="text"
                  className="form-control"
                  placeholder="ค้นหาสถานที่"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  style={{ marginTop: "15px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">{this.createRow()}</div>
          </div>
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
