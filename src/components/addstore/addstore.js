import React, { Component } from "react";
import { server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import "./addstore.css";

class Addstore extends Component {
  constructor(props) {
    super(props);

    this.state = {
        StoreName: "",
        Description: "",
        type: "",
        address: "",
        view: "",
        category: "",
    };
}

componentDidMount() {
  this.Addstore();
}

Addstore = () => {
  this.setState({view: (<section className="u-align-center u-clearfix addstore-section" id="sec-b1e2">
  <div className="u-align-left u-clearfix u-sheet u-sheet-1">
    <h1 className="u-text u-text-default u-text-1">Create Your Store </h1>
    <h6 className="u-text u-text-custom-color-2 u-text-default u-text-2">*กรุณาเลือกประเภทของร้านค้าของท่าน</h6>
    <div className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div className="u-container-style u-image u-layout-cell u-size-30 u-image-1" data-image-width={897} data-image-height={759}>
            <a href="" onClick={e => {e.preventDefault(); this.restaurant()}} className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-1">
              <h2 className="u-text u-text-custom-color-4 u-text-default u-text-3">ร้านอาหาร</h2>
            </a>
          </div>
          <div className="u-container-style u-image u-layout-cell u-size-30 u-image-2" data-image-width={897} data-image-height={759}>
            <a href="" onClick={e => {e.preventDefault(); this.hotel()}} className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-2">
              <h2 className="u-text u-text-custom-color-4 u-text-default u-text-4">ที่พัก </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)})
  };

  hotel =  () => {
    
    this.setState({view: (<section className="u-clearfix hotel-section" id="sec-97b3">
  <div className="u-align-left u-clearfix u-sheet u-valign-middle-lg u-sheet-1">
    <h4 className="u-text-1"><a href="" onClick={() => this.Addstore}>ลงทะเบียนสถานที่</a> / ที่พัก</h4>
    <div className="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div className="u-container-style u-image u-layout-cell u-size-12 u-image-1" data-image-width={897} data-image-height={759}>
            <div className="u-container-layout u-valign-middle u-container-layout-1">
              <h3 className="u-text u-text-custom-color-4 u-text-default u-text-2">ที่พัก</h3>
            </div>
          </div>
          <div className="u-container-style u-layout-cell u-size-24 u-layout-cell-2">
            <div className="u-container-layout u-valign-top u-container-layout-2">
              <h6 className="u-text u-text-custom-color-2 u-text-default u-text-3">*กรุณาใส่ช้อมูลสถานที่</h6>
              <div className="u-expanded-width-xs u-form u-form-1">
                <form action="#" method="POST" className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form" style={{padding: 15}} source="custom" name="form">
                  <div className="u-form-group u-form-name">
                    <label htmlFor="name-6797" className="u-label u-label-1">ชื่อสถานที่</label>
                    <input type="text" placeholder="Name" id="name-6797" name="name" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-1" required />
                  </div>
                  <div className="u-form-group u-form-message">
                    <label htmlFor="message-6797" className="u-label u-label-2">รายละเอียดสถานที่</label>
                    <textarea rows={4} cols={50} id="message-6797" name="message" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-2" required defaultValue={""} />
                  </div>
                  <div className="u-form-group u-form-select u-form-group-3">
                    <label htmlFor="select-fcb4" className="u-form-control-hidden u-label u-label-3" />
                    <div className="u-form-select-wrapper">
                      <select id="select-fcb4" name="select" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-3">
                        <option value="ประเภทร้านอาหาร">ประเภทที่พัก</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Hostel">Hostel</option>
                        <option value="Resort">Resort</option>
                      </select>
                      <svg xmlns="http://www.w3.org/2000/svg" width={14} height={12} version={1} className="u-caret"><path fill="currentColor" d="M4 8L0 4h8z" /></svg>
                    </div>
                  </div>
                  <div className="u-form-group u-form-group-4">
                    <label htmlFor="text-c6f5" className="u-label u-label-4">ที่อยู่</label>
                    <input type="text" id="text-c6f5" name="text" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4" />
                  </div>
                  <div className="u-align-left u-form-group u-form-submit">
                    <a href="#" className="u-btn u-btn-submit u-button-style">Submit</a>
                    <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                  </div>
                  <div className="u-form-send-message u-form-send-success">Thank you! Your message has been sent.</div>
                  <div className="u-form-send-error u-form-send-message">Unable to send your message. Please fix errors then try again.</div>
                  <input type="hidden" defaultValue name="recaptchaResponse" />
                </form>
              </div>
            </div>
          </div>
          <div className="u-align-left u-container-style u-layout-cell u-size-24 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-3">
              <h6 className="u-text u-text-custom-color-2 u-text-default u-text-4">*กรุณาใส่รูปภาพ</h6>
              <div className="u-shape u-shape-rectangle u-white u-shape-1" />
              <div className="u-shape u-shape-rectangle u-white u-shape-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)})
  }

  restaurant = () => {
    this.setState({view: (
      <section className="u-clearfix restaurant-section" id="sec-8600">
  <div className="u-clearfix u-sheet u-sheet-1">
    <h4 className="u-text-1"><a href="" onClick={() => this.Addstore}>ลงทะเบียนสถานที่ </a>/ ร้านอาหาร</h4>
    <div className="u-clearfix u-expanded-width-xs u-gutter-0 u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div className="u-container-style u-image u-layout-cell u-size-12 u-image-1" data-image-width={897} data-image-height={759}>
            <div className="u-container-layout u-valign-middle u-container-layout-1">
              <h4 className="u-text u-text-custom-color-4 u-text-default-lg u-text-default-xl u-text-2">ร้านอาหาร</h4>
            </div>
          </div>
          <div className="u-container-style u-layout-cell u-size-24 u-layout-cell-2">
            <div className="u-container-layout u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-2">
              <h6 className="u-text u-text-custom-color-2 u-text-default u-text-3">*กรุณาใส่ข้อมูลสถานที่</h6>
              <div className="u-expanded-width-xs u-form u-form-1">
                <form action="#" method="POST" className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form" style={{padding: 15}} source="custom" name="form">
                  <div className="u-form-group u-form-name">
                    <label htmlFor="name-6797" className="u-label u-label-1">ชื่อสถานที่</label>
                    <input type="text" placeholder="Name" id="name-6797" name="name" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-1" required />
                  </div>
                  <div className="u-form-group u-form-message">
                    <label htmlFor="message-6797" className="u-label u-label-2">รายละเอียดสถานที่</label>
                    <textarea rows={4} cols={50} id="message-6797" name="message" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-2" required defaultValue={""} />
                  </div>
                  <div className="u-form-group u-form-select u-form-group-3">
                    <label htmlFor="select-fcb4" className="u-form-control-hidden u-label u-label-3" />
                    <div className="u-form-select-wrapper">
                      <select id="select-fcb4" name="select" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-3">
                        <option value="ประเภทร้านอาหาร">ประเภทร้านอาหาร</option>
                        <option value="Buffet">Buffet</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Fastfood">Fastfood</option>
                        <option value="Cafe">Cafe</option>          
                      </select>
                      <svg xmlns="http://www.w3.org/2000/svg" width={14} height={12} version={1} className="u-caret"><path fill="currentColor" d="M4 8L0 4h8z" /></svg>
                    </div>
                  </div>
                  <div className="u-form-group u-form-group-4">
                    <label htmlFor="text-c6f5" className="u-label u-label-4">ที่อยู่</label>
                    <input type="text" id="text-c6f5" name="text" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-input-4" />
                  </div>
                  <div className="u-align-left u-form-group u-form-submit">
                    <a href="#" className="u-btn u-btn-submit u-button-style">Submit</a>
                    <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="u-align-left u-container-style u-layout-cell u-size-24 u-layout-cell-3">
            <div className="u-container-layout u-valign-bottom-sm u-valign-bottom-xs u-container-layout-3">
              <h6 className="u-text u-text-custom-color-2 u-text-default u-text-4">*กรุณาใส่รูปภาพ</h6>
              <div className="u-expanded-width-md u-shape u-shape-rectangle u-white u-shape-1" >
                <input type="file"></input>
              </div>
              <div className="u-expanded-width-md u-shape u-shape-rectangle u-white u-shape-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    )})
  }

render() {
return this.state.view ;
}
}

export default Addstore;
