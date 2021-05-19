import React, { Component } from "react";
import * as actions from "./../../actions/establishment.action";
import Background from "../../assets/img/homebg.svg";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Search: "",
    };
  }

  componentDidMount() {
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
              src=""
              alt="New York"
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

  render() {
    return (
      <div>
        <div>
          <img src={Background}></img>
        </div>

        <div id="tour">
          <div
            className="w3-container w3-content w3-padding-64"
            style={{ maxWidth: 800 }}
          >
            <section className="">
              <div className="">
                <h2 className="">ค้นหาสถานที่</h2>
                <form>
                  <div className="">
                    <div className="">
                      <div className="">
                        <div className="">
                          <div className="">
                            <label>เลือกประเภทสถานที่</label>
                            <select
                              className=""
                              multiple="multiple"
                              data-placeholder="Any"
                            >
                              <option>Text only</option>
                              <option>Images</option>
                              <option>Video</option>
                            </select>
                          </div>
                        </div>
                        <div className="">
                          <div className="">
                            <label>เรียงตามตัวอักษร</label>
                            <select className="">
                              <option selected>ASC</option>
                              <option>DESC</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="">
                          <input
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
            </section>
            <div className="w3-third w3-margin-bottom">{this.createRow()}</div>
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
