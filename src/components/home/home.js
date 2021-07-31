import React, { Component } from "react";
import * as actions from "./../../actions/establishment.action";
import Background from "../../assets/img/backgroud.png";
import { connect } from "react-redux";
import _ from "lodash";
import "./home.css";
import Image from 'react-bootstrap/Image'

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
          // <div
          //   key={item.EstId}
          //   className="w3-third w3-margin-bottom"
          //   style={{ margin: "", backgroundColor: "#E3E3E3" }}
          // >
          //   <div className="w3-card-4">
          //     <a
          //       href=""
          //       style={{ textDecoration: "none" }}
          //       onClick={() => this.props.history.push(`/detail/${item.EstId}`)}
          //     >
          //       <div style={{padding:8}}>
          //         <img
          //           src={
          //             item.pathImg ||
          //             "https://via.placeholder.com/500x333?text=Image"
          //           }
          //           alt="mainImage"
          //           width="310"
          //           height="217"
          //         />
          //       </div>
          //       <div className="w3-container">
          //         <p>
          //           <b>{item.Name}</b>
          //         </p>
          //         <p className="w3-opacity">
          //           {item.Address}
          //           {item.District}
          //           {item.Province}
          //           {item.PostCode}
          //         </p>
          //         <p></p>{" "}
          //         <i style={{ fontSize: 24 }} className="fa fa-pie-chart"></i>
          //       </div>
          //     </a>
          //   </div>
          // </div>

          <div key={item.EstId} className="col-md-4">
            <a onClick={() => this.props.history.push(`/detail/${item.EstId}`)}>
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: 225, width: '100%', display: 'block'}} src={item.pathImg} data-holder-rendered="true" />
          <div className="card-body">
            <p className="card-text">{item.Name}</p>
            <p>
                   {item.Address}
                   {item.District}
                     {item.Province}
                    {item.PostCode}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-muted"><i style={{ fontSize: 24 }} className="fa fa-pie-chart"></i></small>
            </div>
          </div>
        </div>
        </a>
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
      // <div className="font">
      //   <img className="w3-image" src={Background}></img>
      //   <div className="w3-content">
      //     <div className="">
      //       <div
      //         className="w3-container w3-content w3-padding-64"
      //         style={{ maxWidth: 800 }}
      //       >
      //         <section className="">
      //           <div className="a">
      //             <h2 className="c">ค้นหาสถานที่</h2>
      //             <form>
      //               <div className="">
      //                 <div className="">
      //                   <div className="">
      //                     <div className="g">
      //                       <div className="">
      //                         <label>เลือกประเภทสถานที่</label>
      //                         <br />

      //                         <select className="select">
      //                           <option selected>ร้านอาหาร</option>
      //                           <option>category1</option>
      //                           <option>category2</option>
      //                           <option>category3</option>
      //                         </select>
      //                       </div>
      //                     </div>
      //                     <div className="g">
      //                       <div className="f">
      //                         <label>เรียงตามตัวอักษร</label>
      //                         <br />
      //                         <select className="select">
      //                           <option selected value="ASC">
      //                             ASC
      //                           </option>
      //                           <option value="DESC">DESC</option>
      //                         </select>
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div className="">
      //                     <div className="">
      //                       <input
      //                         onChange={this.onChange}
      //                         type="search"
      //                         className=""
      //                         placeholder=""
      //                         placeholder="ค้นหาสถานที่"
      //                         style={{ width: "100%" }}
      //                       />
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </form>
      //           </div>
      //           <br />
      //         </section>
      //         {/*<div className ="inline">
      //         <div className="left">
      //           <div className="card" style={{ width: "75%" }} >
      //             <div className="card-body">{this.createRow()}
      //             </div>
      //           </div>
      //         </div>
      //       </div>*/}

      //         {/* <div className ="inline">
              
      //           <div className="card" style={{ width: "75%" }} >
      //             <div className="card-body">{this.createRow()}
      //             </div>
      //           </div>
              
      //       </div> */}
      //       </div>

      //       <div
      //         className="w3-row-padding w3-padding-32"
      //         style={{ margin: "0 -16px" }}
      //       >
      //         {this.createRow()}
      //       </div>
      //     </div>
      //   </div>
      // </div>
    <div>
      {/* <div id="myCarousel" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className src={Background} />
    </div>
  </div>
</div> */}
<Image src={Background} fluid />
<div className="container">
  <div className="card-deck mb-3 text-center">
    <div className="card mb-4 box-shadow">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">ค้นหาสถานที่</h4>
      </div>
      <div className="card-body">
        
        <ul className="list-unstyled mt-3 mb-4">
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
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
      </div>
    </div>
  </div>
</div>

{/* <section className="jumbotron text-center">
  <div className="container">
    <h1 className="jumbotron-heading">Album example</h1>
    <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
    <p>
      <a href="#" className="btn btn-primary my-2">Main call to action</a>
      <a href="#" className="btn btn-secondary my-2">Secondary action</a>
    </p>
  </div>
</section> */}

<div className="album py-5 bg-light">
  <div className="container">
    <div className="row">
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
