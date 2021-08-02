import React, { Component } from "react";
import { login, autoLogin } from "./../../actions/login.action";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button, Badge } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import bglogin from "./../../assets/img/bglogin.png";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      Password: "",
    };
  }

  componentDidMount() {
    this.props.autoLogin(this.props.history);
  }

  showError = () => {
    return (
      <div className="alert alert-danger alert-dismissible">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          ×
        </button>
        <h5>
          <i className="icon fas fa-ban" /> Error!
        </h5>
        Incorrect Email or Password
      </div>
    );
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Image src={bglogin} fluid />
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={e => this.setState({ Email: e.target.value })}/>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={e => this.setState({ Password: e.target.value })}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {this.props.loginReducer.isError && this.showError()}
                <Button variant="primary" type="submit" onClick={e => {
                        e.preventDefault();
                        this.props.login(this.props.history, this.state)
                      }}>
                  ลงชื่อเข้าใช้
                </Button>
              </Form>
              <a href="" onClick={() => this.props.history.push("/register")}>
              <Badge pill bg="light" text="dark"
                  >
                    ยังไม่ได้สมัครสมาชิกสำหรับเข้าใช้งานเว็บไซต์ ?
                </Badge></a>
            </Col>
          </Row>
        </Container>
        {/* <div className="hold-transition login-page">
        <div className="login-box">
         
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="../../index2.html" className="h1">
                <b>Voyage</b>Safety
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form>
                <div className="input-group mb-3">
                  <input
                    onChange={e => this.setState({ Email: e.target.value })}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="Email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    onChange={e => this.setState({ Password: e.target.value })}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="Password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                {this.props.loginReducer.isError && this.showError()}
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  
                  <div className="col-4">
                    <button
                      onClick={e => {
                        e.preventDefault();
                        this.props.login(this.props.history, this.state)
                      }}
                      type="submit" className="btn btn-block btn-primary btn-sm">
                      Sign In
                    </button>
                  </div>
                  
                </div>
              </form>
              <p className="mb-1">
                <button className="btn btn-block btn-outline-primary btn-sm">
                  I forgot my password
                </button>
              </p>
              <p className="mb-0"> */}
        {/* <button
                  onClick={() => this.props.history.push("/register")}
                  className="btn btn-block btn-outline-primary btn-sm"
                >
                  Register a new membership
                </button>
              </p>
            </div>
            
          </div>
         
        </div>
      </div> */}
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({ loginReducer });

const mapDispatchToProps = {
  login,
  autoLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
