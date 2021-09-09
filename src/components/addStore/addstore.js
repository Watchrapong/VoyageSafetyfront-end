import React, { Component } from "react";
import { connect } from "react-redux";
import "../addstore/addstore.css"

class addstore extends Component{
    constructor(props) {
        super(props);

        this.state = {
            StoreName: "",
            Description: "",
            type: "",
            address: "",
        };
    }

showError = ()=>{
    return(
        <div className="alert alert-danger alert-dismissible">
            <button    
            type="button"
            className="close"
            aria-hidden="true"
            >
                x

            </button>
            <h5>
                <i className = "icon fas fa-ban"/> Error!
            </h5>
            Incorrect information
        </div>
    )
}

render() {
    return(
        <section className="u-align-center u-clearfix u-section-1" src id="sec-b1e2">
  <div className="u-align-left u-clearfix u-sheet u-sheet-1">
    <h1 className="u-text u-text-default u-text-1">Create Your Store </h1>
    <h6 className="u-text u-text-custom-color-2 u-text-default u-text-2">*กรุณาเลือกประเภทของร้านค้าของท่าน</h6>
    <div className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div className="u-container-style u-image u-layout-cell u-size-30 u-image-1" data-image-width={897} data-image-height={759}>
            <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-1">
              <h2 className="u-text u-text-custom-color-4 u-text-default u-text-3">ร้านอาหาร</h2>
            </div>
          </div>
          <div className="u-container-style u-image u-layout-cell u-size-30 u-image-2" data-image-width={897} data-image-height={759}>
            <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-2">
              <h2 className="u-text u-text-custom-color-4 u-text-default u-text-4">ที่พัก </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}
}