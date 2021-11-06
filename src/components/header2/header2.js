import React, { Component } from "react";
import logo from "../../assets/img/icons/logo.png";
import { withRouter } from "react-router-dom";
import { Container, Button, Navbar } from "react-bootstrap";

class Header2 extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#659EBC" }}
      >
        <Container>
          <Navbar.Brand
            href=""
            onClick={() => this.props.history.push("/")}
          >
            <img src={logo} style={{ height: "40px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Button
                  style={{
                    backgroundColor: "#0F4A69",
                    fontFamily: "IBM Plex Sans Thai",
                  }}
                  onClick={() => this.props.history.push("/login")}
                >
                  ลงชื่อเข้าใช้
                </Button>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(Header2);
