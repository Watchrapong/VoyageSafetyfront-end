import React, { Component } from "react";
import logo from "../../assets/img/icons/logo.png";

class Header2 extends Component {
  render() {
    return (
      <div>
        
        <div className="w3-top">
          <div className="w3-bar w3-white w3-card" id="myNavbar">
            <a href="#home" className="w3-button w3-wide">
              <img src={logo} style={{ height: "50px"}}></img>
            </a>
            
            <button onClick={() => this.props.history.push("/login")} className="w3-right w3-button w3-white">ลงชื่อเข้าใช้</button>
            
          </div>
        </div>
        
      </div>
    );
  }
}

export default Header2;
