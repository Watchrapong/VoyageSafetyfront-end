import React, { Component } from "react";
import * as actions from "./../../actions/establishment.action";
import Background from "../../assets/img/backgroud.png";
import { connect } from "react-redux";
import _ from "lodash";
import "./home.css";

class Home extends Component {
  componentDidMount() {
    this.debounceSearch = _.debounce(
      this.props.getEstablishmentsByKeyword,
      500
    );
    this.debounceSearchCategory = _.debounce(this.props.getEstablishmentsByCategory,500)
    this.props.getEstablishments();
  }

  createRow = () => {
    try {
      const { result, isFetching } = this.props.establishmentReducer;
      return (
        !isFetching &&
        result != null &&
        result.map((item) => (
          <div
            key={item.EstId}
            className="w3-third w3-margin-bottom"
            style={{ margin: "", backgroundColor: "#E3E3E3" }}
          >
            <div className="w3-card-4">
              <a
                href=""
                style={{ textDecoration: "none" }}
                onClick={() => this.props.history.push(`/detail/${item.EstId}`)}
              >
                <div style={{padding:8}}>
                  <img
                    src={
                      item.pathImg ||
                      "https://via.placeholder.com/500x333?text=Image"
                    }
                    alt="mainImage"
                    width="310"
                    height="217"
                  />
                </div>
                <div className="w3-container">
                  <p>
                    <b>{item.Name}</b>
                  </p>
                  <p className="w3-opacity">
                    {item.Address}
                    {item.District}
                    {item.Province}
                    {item.PostCode}
                  </p>
                  <p></p>{" "}
                  <i style={{ fontSize: 24 }} className="fa fa-pie-chart"></i>
                </div>
              </a>
            </div>
          </div>
        ))
      );
    } catch (e) {}
  };

  onChange = (e) => {
    e.persist();
    this.debounceSearch(e);
  };

  onChangeType = (e) => {
    e.persist();
    this.debounceSearchType(e);
  }

  render() {
    return (
      <div className="font">
        <img className="w3-image" src={Background}></img>
        <div className="w3-content">
          <div className="">
            <div
              className="w3-container w3-content w3-padding-64"
              style={{ maxWidth: 800 }}
            >
              <section className="">
                <div className="a">
                  <h2 className="c">ค้นหาสถานที่</h2>
                  <form>
                    <div className="">
                      <div className="">
                        <div className="">
                          <div className="g">
                            <div className="">
                              <label>เลือกประเภทสถานที่</label>
                              <br />

                              <select className="select">
                                <option selected>ร้านอาหาร</option>
                                <option>category1</option>
                                <option>category2</option>
                                <option>category3</option>
                              </select>
                            </div>
                          </div>
                          <div className="g">
                            <div className="f">
                              <label>เรียงตามตัวอักษร</label>
                              <br />
                              <select className="select">
                                <option selected value="ASC">
                                  ASC
                                </option>
                                <option value="DESC">DESC</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div className="">
                            <input
                              onChange={this.onChange}
                              type="search"
                              className=""
                              placeholder=""
                              placeholder="ค้นหาสถานที่"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <br />
              </section>
              {/*<div className ="inline">
              <div className="left">
                <div className="card" style={{ width: "75%" }} >
                  <div className="card-body">{this.createRow()}
                  </div>
                </div>
              </div>
            </div>*/}

              {/* <div className ="inline">
              
                <div className="card" style={{ width: "75%" }} >
                  <div className="card-body">{this.createRow()}
                  </div>
                </div>
              
            </div> */}
            </div>

            <div
              className="w3-row-padding w3-padding-32"
              style={{ margin: "0 -16px" }}
            >
              {this.createRow()}
            </div>
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
