import React, { Component } from "react";
import "./profile.css";
import blankprofile from "../../assets/img/blankprofile.png";
import { server, YES } from "../../constants";
import { httpClient } from "../../utils/HttpClient";

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      User: "",
    };
  }

  componentDidMount() {
    try {
      if (localStorage.getItem(server.LOGIN_PASSED) == YES) {
        let token = localStorage.getItem("Token");
        httpClient
          .get(server.LOGIN_USER, {
            headers: { Authorization: `Authorization ${token}` },
          })
          .then((result) => {
            const data = result.data;
            this.setState({ User: data.userData.result });
            console.log(this.state.User);
          });

        // const user = result.data.userData;
      } else {
        this.setState({ User: "" });
      }
    } catch (e) {
      this.setState({ User: "" });
    }
  }

  render() {
    return (
      <section className="skrollable u-clearfix u-image u-parallax profile-section skrollable-between" id="sec-6e38" data-image-width={1920} data-image-height={1080} data-bottom-top="background-position: 50% 10vh;" data-top-bottom="background-position: 50% -10vh;" style={{backgroundAttachment: 'fixed', backgroundPosition: '50% -0.0753498vh'}}>
  <div className="u-clearfix u-sheet u-sheet-1">
    <div className="u-container-style u-custom-color-7 u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-group u-radius-15 u-shape-round u-group-1">
      <div className="u-container-layout u-container-layout-1" style={{backgroundColor:'#f6f6f6'}}>
        <h3 className="u-text u-text-default u-text-1">ประวัติส่วนตัว</h3>
        <img src={blankprofile} className="u-blog-control u-image u-image-default u-image-1" />
        <p className="u-text u-text-default u-text-2">Email :&nbsp;</p>
        <p className="u-text u-text-default u-text-3">เพศ :&nbsp;</p>
        <p className="u-text u-text-default u-text-4">ชื่อ :</p>
        <p className="u-text u-text-default u-text-5">นามสกุล:&nbsp;</p>
        <div className="u-border-1 u-border-grey-75 u-radius-10 u-shape u-shape-round u-shape-1" ><span style={{marginLeft: 5}}>{this.state.User.Email}</span></div>
        <div className="u-border-1 u-border-grey-75 u-radius-10 u-shape u-shape-round u-shape-2" ><span style={{marginLeft: 5}}>{}</span></div>
        <div className="u-border-1 u-border-grey-75 u-radius-10 u-shape u-shape-round u-shape-3" ><span style={{marginLeft: 5}}>{this.state.User.FirstName}</span></div>
        <div className="u-border-1 u-border-grey-75 u-radius-10 u-shape u-shape-round u-shape-4" ><span style={{marginLeft: 5}}>Watcharapong</span></div>
        <p className="u-text u-text-default u-text-6">รหัสบัตรประชาชน:&nbsp;</p>
        <div className="u-border-1 u-border-grey-75 u-radius-10 u-shape u-shape-round u-shape-5" ><span style={{marginLeft: 5}}>Watcharapong</span></div>
        <p className="u-text u-text-default u-text-7">เบอร์โทรศัพท์ :&nbsp;</p>
        <div className="u-border-1 u-border-grey-75 u-radius-10 u-shape u-shape-round u-shape-6" ><span style={{marginLeft: 5}}>Watcharapong</span></div>
        <a href="" className="u-btn u-btn-round u-button-style u-radius-10 u-btn-1">แก้ไขข้อมูลส่วนตัว</a>
      </div>
    </div>
  </div>
</section>

    );
  }
}

export default Profile;
