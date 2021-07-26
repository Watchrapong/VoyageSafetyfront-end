import React, { Component } from "react";
import "./header.css";
//import { ReactComponent as Logo } from "../../icons/logo.svg";
import * as ai from "react-icons/ai";
import * as cg from "react-icons/cg";
import logo from "../../assets/img/icons/logo.png";
import * as action from "./../../actions/app.action";
import { connect } from "react-redux";
import { server, YES} from "../../constants";
import {httpClient} from "../../utils/HttpClient";
import { withRouter } from "react-router-dom";

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      User: "",
    }
  }

  
  componentDidMount() {
     try{
     if(localStorage.getItem(server.LOGIN_PASSED)  == YES  ){
      let token = localStorage.getItem('Token');
      httpClient.get(server.LOGIN_USER, {headers: {'Authorization':  `Authorization ${token}`}})
      .then((result)=>{
       this.setState( {User: result.data.userData.result.FirstName});
        console.log(this.state.User);
      });
      
     // const user = result.data.userData;
     
     
   
    }else {
      this.setState( {User: ""});
    }
  }catch{
    this.setState( {User: ""});
  }
  }
  
  // Authen  () {
  //   if(localStorage.getItem(server.LOGIN_PASSED)  == YES  ){
  //     return (<div className="w3-right w3-hide-small">
  //     <a href="#about" className="w3-bar-item w3-button">
  //       จำนวนผู้ติดเชื้อ
  //     </a>
  //     <a href="#team" className="w3-bar-item w3-button">
  //       {" "}
  //       สถานะการฉีดวัคซีน
  //     </a>
  //     <a href="#work" className="w3-bar-item w3-button">
  //       {" "}
  //       ลงทะเบียนสถานที่
  //     </a>
  //     <a href="#pricing" className="w3-bar-item w3-button">
  //       {" "}
  //       แนะนำสถานที่
  //     </a>
  //     <div
  //       className="w3-bar-btn"
  //     style={{padding:8}}>
  //       <button style={{backgroundColor:"white"}} className="w3-btn w3-round">
  //         <div style={{ fontColor: "659EBC"}}>
  //         <cg.CgProfile style={{fontSize:20}}></cg.CgProfile><p style={{marginBottom: 5}}>name</p>
  //         </div>
  //         <span>#{this.state.isLoggedIn}</span>
  //       </button>
  //     </div>
  //   </div>)
  //   }else{
  //     return (<button className="w3-right w3-button w3-white">ลงชื่อเข้าใช้</button>)
  //   }
    
  // }



  render() {
    return (
      <div>
        {/* Navbar (sit on top) */}
        <div className="w3-top">
          <div className="w3-bar w3-white w3-card" id="myNavbar">
            <a href="#home" className="w3-button w3-wide">
              <img src={logo} style={{ height: "50px"}}></img>
            </a>
            {/* <div className="w3-right w3-hide-small">
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
        </div> */}

            {/* no login */}
            {/* <button className="w3-right w3-button w3-white">ลงชื่อเข้าใช้</button> */}
            
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
        className="w3-bar-btn w3-dropdown-hover "
      style={{padding:8}}>
        <div className="w3-dropdown-content">
          <a href="" class="w3-bar-newitem">Profile</a>
          <a href="" onClick={()=>{this.props.history.push("/login"); 
              localStorage.clear();
              this.props.appReducer.app.forceUpdate();}} class="w3-bar-newitem ">Logout</a>
          </div>
        <button style={{backgroundColor:"white"}} className="w3-btn w3-round">
          <div  style={{ fontColor: "659EBC"}}>
          <cg.CgProfile style={{fontSize:20}}></cg.CgProfile><p style={{marginBottom: 5}}>{this.state.User}</p>
          
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
        {/* <nav
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
      */}
      </div>
    );
  }
}

const mapStateToProps = ({ appReducer }) => ({ appReducer })

const mapDispatchToProps = {
  
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
