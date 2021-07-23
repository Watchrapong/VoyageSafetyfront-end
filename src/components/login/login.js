import React, { Component } from "react";
import { login, autoLogin } from "./../../actions/login.action";
import { connect } from "react-redux";
import logo from "../../assets/img/icons/logo.png";
import { unmountComponentAtNode } from "react-dom";

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      Email: "",
      Password: "",
    }
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
    )
  }



  render() {
    return (
      <div className="w3-top">
        <div className="w3-bar w3-white w3-card" id="myNavbar">
          <a href="#home" className="w3-button w3-wide">
            <img src={logo} style={{ height: "50px"}}></img>
          </a>
          
          
          <button className="w3-right w3-button w3-white">ลงชื่อเข้าใช้</button>
        </div>
      
      <div className="hold-transition login-page">
        <div className="login-box">
          {/* /.login-logo */}
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
                  {/* /.col */}
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
                  {/* /.col */}
                </div>
              </form>
              <p className="mb-1">
                <button className="btn btn-block btn-outline-primary btn-sm">
                  I forgot my password
                </button>
              </p>
              <p className="mb-0">
                <button
                  onClick={() => this.props.history.push("/register")}
                  className="btn btn-block btn-outline-primary btn-sm"
                >
                  Register a new membership
                </button>
              </p>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({ loginReducer })

const mapDispatchToProps = {
  login,
  autoLogin
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
