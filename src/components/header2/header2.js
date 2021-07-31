import React, { Component } from "react";
import logo from "../../assets/img/icons/logo.png";
import { withRouter } from 'react-router-dom';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

class Header2 extends Component {
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
{/*         
        <div className="w3-top">
          <div className="w3-bar w3-white w3-card" id="myNavbar">
            <a href="" onClick={() => this.props.history.push("/")} className="w3-button w3-wide">
              <img src={logo} style={{ height: "50px"}}></img>
            </a>
            
            <button onClick={() => this.props.history.push("/login")} className="w3-right w3-button w3-white">ลงชื่อเข้าใช้</button>
            
          </div>
        </div>*/}
        
      </div> 
    );
  }
}

export default withRouter (Header2);
