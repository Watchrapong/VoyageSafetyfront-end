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
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";


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
  }catch (e){
    this.setState( {User: ""});
  }
  }
  

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:'#659EBC'}}>
  <Container>
  <Navbar.Brand href="#home"><img src={logo} style={{ height: "40px"}}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


{/* <div className="w3-top">
          <div className="w3-bar w3-white w3-card" id="myNavbar">
            <a href="#home" className="w3-button w3-wide">
              <img src={logo} style={{ height: "50px"}}></img>
            </a>
            
            
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
         */}

      </div>
    );
  }
}

const mapStateToProps = ({ appReducer }) => ({ appReducer })

const mapDispatchToProps = {
  
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
