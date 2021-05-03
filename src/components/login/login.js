import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div class="hold-transition login-page">
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
              <form action="../../index3.html" method="post">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
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
                    <button type="submit" className="btn btn-block btn-primary btn-sm">
                      Sign In
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <p className="mb-1">
                <button class="btn btn-block btn-outline-primary btn-sm">
                  I forgot my password
                </button>
              </p>
              <p className="mb-0">
                <button
                  onClick={() => this.props.history.push("/register")}
                  class="btn btn-block btn-outline-primary btn-sm"
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

export default Login;
