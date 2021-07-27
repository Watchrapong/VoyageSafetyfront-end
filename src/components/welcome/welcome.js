import React, { Component } from "react";
import Rooftop from "../../assets/img/rooftop.png"
import logo from "../../assets/img/icons/logo.png";

class Welcome extends Component {
  render() {
    return (<div><header className="w3-display-container w3-content w3-wide" style={{maxWidth: 1500}} >
      {/* <div className="w3-top">
          <div className="w3-bar w3-white w3-card" id="myNavbar">
            <a href="#home" className="w3-button w3-wide">
              <img src={logo} style={{ height: "50px"}}></img>
            </a>
            
            <button onClick={() => this.props.history.push("/login")} className="w3-right w3-button w3-white">ลงชื่อเข้าใช้</button>
            
          </div>
          </div> */}
  <img className="w3-image" src={Rooftop} alt="Image" width={1500} height={800} />
  <div className="w3-display-middle w3-margin-top w3-center">
    <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min"><b>Voyage</b></span> <span className="w3-hide-small w3-text-light-grey">Safety</span></h1>
  </div>
</header>
<div className="w3-display-container w3-content w3-wide w3-center">
<button onClick={() => this.props.history.push("/login")} className="w3-button w3-white ">ลงชื่อเข้าใช้</button>
</div>
</div>
);
  }
}

export default Welcome;
