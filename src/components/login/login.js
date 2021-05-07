import React, { Component } from "react";
import { login } from "./../../actions/login.action";
import { connect } from "react-redux";

class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       Email:"",
       Password:"",
    }
  }
  

  render() {
    return (
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
                    onChange={e=>this.setState({Email:e.target.value})}
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
                    onChange={e=>this.setState({Password:e.target.value})}
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
                    onClick={e=>{e.preventDefault();
                    this.props.login(this.props.history,this.state)}}
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
    );
  }
}

const mapStateToProps = ({loginReducer}) => ({ loginReducer })

const mapDispatchToProps = {
  login
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
