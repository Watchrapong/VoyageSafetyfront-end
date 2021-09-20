import React, { Component } from "react";
import "./header.css";
import * as cg from "react-icons/cg";
import logo from "../../assets/img/icons/logo.png";
import { connect } from "react-redux";
import { server, YES } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import { withRouter } from "react-router-dom";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";

class Header extends Component {
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
            this.setState({ User: result.data.result.FirstName });
          })
          .catch((err) => {
            localStorage.clear();
          })

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
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#659EBC" }}
      >
        <Container>
          <Navbar.Brand
            href=" "
            onClick={() => this.props.history.push("/home")}
          >
            <img src={logo} style={{ height: "40px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#featurs" onClick={() => this.props.history.push("/dashboard")}>จำนวนผู้ติดเชื้อ</Nav.Link>
              <Nav.Link href="#status" onClick={() => this.props.history.push("/dashboard")}>สถานะการฉีดวัคซีน</Nav.Link>
              <Nav.Link href="#registation" onClick={() => this.props.history.push("/addstore")}>ลงทะเบียนสถานที่</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text> Signed in as : </Navbar.Text>
              <Dropdown>
                <Dropdown.Toggle variant="light">
                  {this.state.User} <cg.CgProfile />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/profile" onClick={() => {this.props.history.push("/profile")}}>Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    href=""
                    onClick={() => {
                      this.props.history.push("/login");
                      localStorage.clear();
                      this.props.appReducer.app.forceUpdate();
                    }}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ appReducer }) => ({ appReducer });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
