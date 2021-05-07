import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "./../../actions/register.action";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      CitizenId: "",
      Telno: "",
      Gender: "1",
      Password: "",
      confirm_password: "",
    };
  }

  showError = ()=>{
    return(
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
                  Incorrect information
                </div>
    )
  }

  render() {
    return (
      <div className="hold-transition register-page">
        <div className="register-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="../../index2.html" className="h1">
                <b>Voyage</b>Safety
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Register a new membership</p>
              <form>
                <div className="input-group mb-3">
                  <input
                    onChange={(e) =>
                      this.setState({ FirstName: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    placeholder="Firstname"
                    name="FirstName"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    onChange={(e) =>
                      this.setState({ LastName: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    placeholder="Lastname"
                    name="LastName"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    onChange={(e) => this.setState({ Email: e.target.value })}
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
                    onChange={(e) =>
                      this.setState({ CitizenId: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    placeholder="CitizenId"
                    name="CitizenId"
                  />

                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-check" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    onChange={(e) => this.setState({ Telno: e.target.value })}
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    name="Telno"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-phone" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <select
                    onChange={(e) => this.setState({ Gender: e.target.value })}
                    className="form-control select2bs4"
                    style={{ width: "100%" }}
                    name="Gender"
                  >
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                </div>

                <div className="input-group mb-3">
                  <input
                    onChange={(e) =>
                      this.setState({ Password: e.target.value })
                    }
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
                <div className="input-group mb-3">
                  <input
                    onChange={(e) =>
                      this.setState({ confirm_password: e.target.value })
                    }
                    type="password"
                    className="form-control"
                    placeholder="Retype password"
                    name="confirm_password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                {this.props.registerReducer.isError && this.showError()}
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="terms"
                        defaultValue="agree"
                      />
                      <label htmlFor="agreeTerms">
                        I agree to the <a href="#">terms</a>
                      </label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.register(this.props.history, this.state);
                      }}
                      type="submit"
                      className="btn btn-primary btn-block"
                    >
                      Register
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <button
                onClick={() => this.props.history.goBack()}
                className="btn btn-block btn-outline-primary btn-sm"
                style={{ margin: 8 }}
              >
                I already have a membership
              </button>
            </div>
            {/* /.form-box */}
          </div>
          {/* /.card */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ registerReducer }) => ({ registerReducer });

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
