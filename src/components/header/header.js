import React, { Component } from "react";
import "./header.css";
//import { ReactComponent as Logo } from "../../icons/logo.svg";
import { ReactComponent as Login } from "../../assets/img/icons/loginbutton.svg";
import * as ai from "react-icons/ai";
import * as cg from "react-icons/cg";
import logo from "../../assets/img/icons/logo.png";

class Header extends Component {
  render() {
    return (
      <div>
        {/* Navbar (sit on top) */}
        <div className="w3-top">
          <div className="w3-bar w3-white w3-card" id="myNavbar">
            <a href="#home" className="w3-button w3-wide">
              <img src={logo} style={{ height: "50px"}}></img>
            </a>
            {/* Right-sided navbar links */}
            <div className="w3-right w3-hide-small">
              <a href="#about" className="w3-bar-item w3-button">
                จำนวนผู้ติดเชื้อ
              </a>
              <a href="#team" className="w3-bar-item w3-button">
                {" "}
                สถานะการฉีดวัคซีน
              </a>
              <a href="#work" className="w3-bar-item w3-button">
                {" "}
                ลงทะเบียนสถานที่
              </a>
              <a href="#pricing" className="w3-bar-item w3-button">
                {" "}
                แนะนำสถานที่
              </a>
              <div
                className="w3-bar-btn"
              style={{padding:8}}>
                <button style={{backgroundColor:"white"}} className="w3-btn w3-round">
                  <div style={{ fontColor: "659EBC"}}>
                  <cg.CgProfile style={{fontSize:20}}></cg.CgProfile><p style={{marginBottom: 5}}>name</p>
                  </div>
                  
                </button>
              </div>
            </div>
            {/* Hide right-floated links on small screens and replace them with a menu icon */}
            <a
              href="#"
              className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
              onclick=""
            >
              <i>
                <ai.AiOutlineMenu />
              </i>
            </a>
          </div>
        </div>
        {/* Sidebar on small screens when clicking the menu icon */}
        <nav
          className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
          style={{ display: "none" }}
        >
          <a
            href="nav"
            onclick="w3_close()"
            className="w3-bar-item w3-button w3-large w3-padding-16"
          >
            Close ×
          </a>
          <a
            href="#about"
            onclick="w3_close()"
            className="w3-bar-item w3-button"
          >
            ABOUT
          </a>
          <a
            href="#team"
            onclick="w3_close()"
            className="w3-bar-item w3-button"
          >
            TEAM
          </a>
          <a
            href="#work"
            onclick="w3_close()"
            className="w3-bar-item w3-button"
          >
            WORK
          </a>
          <a
            href="#pricing"
            onclick="w3_close()"
            className="w3-bar-item w3-button"
          >
            PRICING
          </a>
          <a
            href="#contact"
            onclick="w3_close()"
            className="w3-bar-item w3-button"
          >
            CONTACT
          </a>
        </nav>
      </div>
    );
  }
}

export default Header;
