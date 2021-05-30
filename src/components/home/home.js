import React, { Component } from "react";
import * as actions from "./../../actions/establishment.action";
import Background from "../../assets/img/homebg.svg";
import { connect } from "react-redux";
import _ from "lodash";
import "./home.css";


class Home extends Component {

  componentDidMount() {
    this.debounceSearch = _.debounce(this.props.getEstablishmentsByKeyword,500)
    this.props.getEstablishments();
  }

  createRow = () => {
    try {
      const { result, isFetching } = this.props.establishmentReducer;
      return (
        !isFetching &&
        result != null &&
        result.map((item) => (
          <a href="" style={{textDecoration:"none"}} onClick={() =>this.props.history.push(`/detail/${item.EstId}`)}>
          <div
            key={item.EstId}
            className="w3-row-padding w3-padding-32"
            style={{ margin: "0 -16px" , backgroundColor:'#E3E3E3' }}
          >
            <img    
              src={item.pathImg||"https://via.placeholder.com/400x300"}
              alt="mainImage"
              style={{ width: "100%" }}
              className="w3-hover-opacity"
            />
            <div className="w3-container">
              <p>
                <b>{item.Name}</b>
              </p>
              <p className="">
                {item.Address}
                {item.District}
                {item.Province}
                {item.PostCode}
              </p>
              <p>{item.Description}</p>
            </div>
          </div>
          </a>
        ))
      );
    } catch (e) {}
  };

  onChange = e => {
    e.persist();
    this.debounceSearch(e);
  }

  render() {
    return (
      
      <div>
        <div className="font">
          <img src={Background}></img>
        </div>

        <div id="tour">
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
                            <label>เลือกประเภทสถานที่</label><br />

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
                            <label>เรียงตามตัวอักษร</label><br />
                            <select className="select">
                              <option selected>ASC</option>
                              <option>DESC</option>
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
            <div className ="inline">
              
                <div className="card" style={{ width: "75%" }} >
                  <div className="card-body">{this.createRow()}
                  </div>
                </div>
              
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
